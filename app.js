const $=s=>document.querySelector(s);
let L=localStorage.getItem('lang')||'es';
const t=v=>v&&typeof v==='object'?v[L]:v;
function render(){
 document.documentElement.lang=L; const U=UI[L];
 document.title=U.title; $('meta[name=description]').content=U.desc;
 document.querySelectorAll('[data-f]').forEach(e=>e.textContent=t(DATA[e.dataset.f]));
 document.querySelectorAll('[data-i]').forEach(e=>e.textContent=U[e.dataset.i]);
 document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));
 $('#cvBtn').href=t(DATA.cvPdf); $('#yr').textContent=new Date().getFullYear();
 $('#facts').innerHTML=DATA.datos.map(([k,v])=>`<li><span>${t(k)}</span>${t(v)}</li>`).join('');
 $('#stats').innerHTML=DATA.cifras.map(c=>`<div class="stat reveal in"><b>${c.n.toLocaleString(L==='es'?'es-MX':'en-US')}${c.suf}</b><span>${t(c.label)}</span></div>`).join('');
 $('#timeline').innerHTML=DATA.experiencia.map(x=>`<li class="reveal"><p class="per">${t(x.periodo)}</p><div><h3>${t(x.puesto)}</h3><p class="emp">${t(x.empresa)}</p><p>${t(x.desc)}</p></div></li>`).join('');
 $('#projects').innerHTML=DATA.proyectos.map(p=>`<figure class="proj reveal"><div class="ph"><img src="${p.img}" alt="${t(p.tipo)}"></div><figcaption><span>${t(p.tipo)}</span><h3>${t(p.titulo)}</h3><p>${t(p.meta)}</p></figcaption></figure>`).join('');
 $('#skills').innerHTML=DATA.especialidades.map(([a,d],i)=>`<div class="skill reveal"><i>${String(i+1).padStart(2,'0')}</i><h3>${t(a)}</h3><p>${t(d)}</p></div>`).join('');
 $('#tools').innerHTML=DATA.herramientas.map(x=>`<span>${t(x)}</span>`).join('');
 $('#edu').innerHTML=DATA.formacion.map(f=>`<li class="reveal"><span>${t(f.anio)}</span><div><h3>${t(f.titulo)}</h3><p>${t(f.lugar)}</p></div></li>`).join('');
 const c=DATA.contacto;
 $('#contact').innerHTML=[[U.correo,c.email,`mailto:${c.email}`],[U.tel,c.telefono,`tel:${c.telefono.replace(/\D/g,'')}`],["WhatsApp",U.wa,`https://wa.me/${c.whatsapp}`],["LinkedIn",U.li,c.linkedin]].map(([k,v,h])=>`<a class="ci reveal" href="${h}" target="_blank" rel="noopener"><span>${k}</span><b>${v}</b><i>→</i></a>`).join('');
 observe();
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
function observe(){document.querySelectorAll('.reveal:not(.in)').forEach(e=>io.observe(e))}
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{L=b.dataset.l;localStorage.setItem('lang',L);render()});
addEventListener('scroll',()=>$('#nav').classList.toggle('solid',scrollY>40),{passive:true});
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.body.classList.remove('menu'));
render();
