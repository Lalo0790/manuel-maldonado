const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L=localStorage.getItem('lang')||'es';
const t=v=>v&&typeof v==='object'?v[L]:v;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
function render(){
 document.documentElement.lang=L;const U=UI[L];
 document.title=U.title;$('meta[name=description]').content=U.desc;
 $$('[data-f]').forEach(e=>e.textContent=t(DATA[e.dataset.f]));
 $$('[data-i]').forEach(e=>e.textContent=U[e.dataset.i]);
 $$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));
 const cb=$('#cvBtn');if(DATA.cvPdf){cb.href='../'+t(DATA.cvPdf);cb.setAttribute('download','');cb.textContent=U.cv}else{cb.textContent=U.verProy}
 $('#yr').textContent=new Date().getFullYear();
 $('#facts').innerHTML=DATA.datos.map(([k,v])=>`<li><span>${t(k)}</span>${t(v)}</li>`).join('');
 $('#stats').innerHTML=DATA.cifras.map(c=>`<div class="stat"><b><em class="count" data-n="${c.n}">${c.n.toLocaleString(L==='es'?'es-MX':'en-US')}</em><small>${c.suf}</small></b><span>${t(c.label)}</span></div>`).join('');
 $('#timeline').innerHTML=DATA.experiencia.map((x,i)=>`<li class="step"><div class="step-bg"></div><span class="step-n">${String(i+1).padStart(2,'0')}</span><p class="per">${t(x.periodo)}</p><div class="step-body"><h3>${t(x.puesto)}</h3><p class="emp">${t(x.empresa)}</p><p class="desc">${t(x.desc)}</p></div></li>`).join('');
 $('#projects').innerHTML=DATA.proyectos.map(p=>`<figure class="proj"><div class="ph"><img src="../${p.img}" alt="${t(p.tipo)}" loading="lazy"></div><figcaption><span>${t(p.tipo)}</span><h3>${t(p.titulo)}</h3><p>${t(p.meta)}</p></figcaption></figure>`).join('');
 $('#skills').innerHTML=DATA.especialidades.map(([a,d],i)=>`<div class="flip" tabindex="0"><div class="flip-in"><div class="face front"><i>${String(i+1).padStart(2,'0')}</i><h3>${t(a)}</h3><small>${L==='es'?'Ver detalle ↻':'See details ↻'}</small></div><div class="face back"><p>${t(d)}</p></div></div></div>`).join('');
 $('#tools').innerHTML=DATA.herramientas.map(x=>`<span>${t(x)}</span>`).join('');
 $('#edu').innerHTML=DATA.formacion.map(f=>`<li><span>${t(f.anio)}</span><div><h3>${t(f.titulo)}</h3><p>${t(f.lugar)}</p></div></li>`).join('');
 const c=DATA.contacto;
 $('#contact').innerHTML=[[U.correo,c.email,`mailto:${c.email}`],[U.tel,c.telefono,`tel:${c.telefono.replace(/\D/g,'')}`],["WhatsApp",U.wa,`https://wa.me/${c.whatsapp}`],["LinkedIn",U.li,c.linkedin]].filter(([k,v,h])=>v&&!/wa\.me\/$|^tel:$|^mailto:$/.test(h)).map(([k,v,h])=>`<a class="ci" href="${h}" target="_blank" rel="noopener"><span>${k}</span><b>${v}</b><i>→</i></a>`).join('');
}
render();
$$('.lang button').forEach(b=>b.onclick=()=>{if(b.dataset.l===L)return;localStorage.setItem('lang',b.dataset.l);location.reload()});
$('.burger').onclick=()=>document.body.classList.toggle('menu');
$$('nav a').forEach(a=>a.onclick=()=>document.body.classList.remove('menu'));
$$('.flip').forEach(f=>f.onclick=()=>f.classList.toggle('on'));
addEventListener('scroll',()=>$('#nav').classList.toggle('solid',scrollY>innerHeight*1.6),{passive:true});

if(!RM&&window.gsap){
 gsap.registerPlugin(ScrollTrigger,SplitText);
 const mm=gsap.matchMedia();
 document.fonts.ready.then(()=>{
 /* 1. Hero: máscara MM crece, escala 1.4→1, aparece el texto */
 mm.add({d:"(min-width:901px)",m:"(max-width:900px)"},ctx=>{
  const big=ctx.conditions.d?"340vw":"900vw";
  const tl=gsap.timeline({scrollTrigger:{trigger:".hero-track",start:"top top",end:"bottom bottom",scrub:.5}});
  tl.to("#maskLayer",{scale:1,duration:.3,ease:"none"})
    .to("#heroIntro",{opacity:0,y:-30,duration:.2},0)
    .to("#maskLayer",{webkitMaskSize:big,maskSize:big,duration:.7,ease:"power2.in"},.15)
    .to("#heroShade",{opacity:1,duration:.3},.55)
    .fromTo("#heroText>*",{opacity:0,y:40},{opacity:1,y:0,stagger:.05,duration:.25},.7)
    .set("#heroText",{opacity:1},.69);
 });
 gsap.to("#arrow",{y:8,repeat:-1,yoyo:true,ease:"sine.inOut",duration:.9});

 /* 2. Manifiesto pinneado: palabras clave giran, letras aparecen */
 const st=SplitText.create("#mainText",{type:"words,chars",wordsClass:"word"});
 const key=/^(16|años|years|UVM|gran|envergadura|large-scale|Civil)/i;
 st.words.forEach(w=>{if(key.test(w.textContent.replace(/[(),.]/g,'')))w.classList.add('hl')});
 gsap.set(st.chars,{opacity:.12});
 const mt=gsap.timeline();
 mt.from(".main-text .hl",{rotateY:90,opacity:0,ease:"back.out(1.7)",stagger:.15,duration:.4})
   .to(st.chars,{opacity:1,scale:1,stagger:.012,duration:.2,ease:"power1.out"},0);
 ScrollTrigger.create({trigger:".manifest",pin:true,start:"top top",end:"+=120%",scrub:.5,animation:mt});

 /* Titulares letra por letra */
 $$(".split-h").forEach(h=>{const s=SplitText.create(h,{type:"chars"});
  gsap.from(s.chars,{opacity:0,scale:1.2,y:10,stagger:.025,duration:.5,ease:"power2.out",scrollTrigger:{trigger:h,start:"top 85%"}})});

 /* reveals genéricos */
 gsap.utils.toArray(".reveal,.facts li,.edu li,.chips span").forEach(e=>gsap.from(e,{y:40,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 88%"}}));

 /* contadores */
 $$(".count").forEach(e=>{const n=+e.dataset.n,o={v:0};gsap.to(o,{v:n,duration:2,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 90%"},onUpdate:()=>e.textContent=Math.round(o.v).toLocaleString(L==='es'?'es-MX':'en-US')})});

 /* 3. Experiencia: tarjetas con reveal 3D */
 gsap.utils.toArray(".step").forEach(s=>{
  const tl=gsap.timeline({scrollTrigger:{trigger:s,start:"top 85%",end:"top 45%",scrub:1}});
  tl.from(s,{opacity:0,x:80,rotateY:-25,ease:"power2.out"})
    .from(s.querySelector(".step-n"),{scale:0,ease:"back.out(2)"},"<.1")
    .from(s.querySelector("h3"),{x:-50,opacity:0},"<.1")
    .from(s.querySelector(".desc"),{y:30,opacity:0},"<.1")
    .from(s.querySelector(".step-bg"),{opacity:0},"<");
 });

 /* 4. Ilustración SVG que se ensambla */
 mm.add({d:"(min-width:901px)",m:"(max-width:900px)"},ctx=>{
  const k=ctx.conditions.d?1:.5;
  const pieces={"#g-ground":[0,120],"#g-col1":[-260,40],"#g-col2":[0,-220],"#g-col3":[260,60],"#g-beam":[-300,-150],"#g-roof":[200,-220],"#g-truss":[0,200],"#g-crane":[300,-60]};
  const tl=gsap.timeline({scrollTrigger:{trigger:"#build",start:"top 90%",end:"top 25%",scrub:1}});
  Object.entries(pieces).forEach(([s,[x,y]],i)=>tl.from(s,{x:x*k,y:y*k,scale:0,rotate:i%2?25:-25,opacity:0,transformOrigin:"50% 50%",ease:"back.out(1.4)"},i*.12));
 });
 gsap.utils.toArray(".proj").forEach((p,i)=>gsap.from(p,{y:80,opacity:0,rotateX:12,duration:1,delay:(i%3)*.12,ease:"power3.out",scrollTrigger:{trigger:p,start:"top 90%"}}));

 /* 5. Tarjetas 3D entran girando */
 gsap.from(".flip",{rotateY:-90,opacity:0,stagger:.12,duration:1,ease:"back.out(1.4)",scrollTrigger:{trigger:"#skills",start:"top 80%"}});
 gsap.from(".ci",{y:50,opacity:0,stagger:.1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:"#contact",start:"top 88%"}});
 gsap.to(".o1",{y:120,x:-60,scrollTrigger:{trigger:"#contacto",scrub:1}});
 gsap.to(".o2",{y:-100,x:80,scrollTrigger:{trigger:"#contacto",scrub:1}});
 ScrollTrigger.refresh();
 });
}
