/* =====================================================================
   DATOS DEL INGENIERO — EDITA SOLO ESTE ARCHIVO
   Textos bilingües: { es: "...", en: "..." }. Lo que está entre
   [corchetes] es un dato de ejemplo por llenar.
   ===================================================================== */
const DATA = {
  nombre: { es: "Ing. Manuel Maldonado", en: "Manuel Maldonado" },
  nombreCorto: "Manuel Maldonado",
  iniciales: "MM",
  titulo: { es: "Ingeniero Civil · Construcción", en: "Civil Engineer · Construction" },
  tagline: { es: "Más de [XX] años convirtiendo planos en obras sólidas: entregadas a tiempo, dentro de presupuesto y con los más altos estándares de seguridad y calidad.",
             en: "Over [XX] years turning drawings into solid buildings — delivered on schedule, on budget, and to the highest safety and quality standards." },
  cvPdf: { es: "cv.pdf", en: "cv-en.pdf" }, // reemplaza por el PDF real del CV
  sobre1: { es: "Soy Ingeniero Civil con [XX] años de experiencia en la dirección, supervisión y ejecución de obras de edificación e infraestructura.",
            en: "I am a Civil Engineer with [XX] years of experience leading, supervising and delivering building and infrastructure projects." },
  sobre2: { es: "He coordinado equipos multidisciplinarios, contratistas y proveedores para llevar proyectos desde la planeación y el presupuesto hasta la entrega final. Mi enfoque: rigor técnico, control de costos y comunicación clara con el cliente.",
            en: "I have coordinated multidisciplinary teams, contractors and suppliers to take projects from planning and budgeting through final handover. My focus: technical rigor, cost control and clear communication with the client." },
  datos: [
    [{es:"Ubicación",en:"Location"}, {es:"[Ciudad, Estado]",en:"[City, State], Mexico"}],
    [{es:"Cédula profesional",en:"Professional license"}, "[0000000]"],
    [{es:"Disponibilidad",en:"Availability"}, {es:"[Proyectos en todo México]",en:"[Projects nationwide]"}]
  ],
  cifras: [
    { n: 25, suf: "+", label: {es:"Años de experiencia",en:"Years of experience"} },  // [placeholder]
    { n: 120000, suf: "", label: {es:"m² construidos",en:"m² built"} },               // [placeholder]
    { n: 60, suf: "+", label: {es:"Obras entregadas",en:"Projects delivered"} },       // [placeholder]
    { n: 100, suf: "%", label: {es:"Compromiso con la seguridad",en:"Commitment to safety"} }
  ],
  experiencia: [
    { periodo: {es:"[2015] — Presente",en:"[2015] — Present"}, puesto: {es:"Director de Obra",en:"Construction Director"}, empresa: {es:"[Constructora / Empresa]",en:"[Construction Company]"},
      desc: {es:"Dirección integral de proyectos habitacionales y comerciales; control de programa, costos y calidad.",en:"End-to-end management of residential and commercial projects; schedule, cost and quality control."} },
    { periodo: "[2008] — [2015]", puesto: {es:"Superintendente de Construcción",en:"Construction Superintendent"}, empresa: {es:"[Empresa]",en:"[Company]"},
      desc: {es:"Supervisión de estructura, cimentación e instalaciones; coordinación de subcontratistas y residentes.",en:"Oversaw foundations, structure and MEP works; coordinated subcontractors and site engineers."} },
    { periodo: "[2002] — [2008]", puesto: {es:"Residente de Obra",en:"Site Engineer"}, empresa: {es:"[Empresa]",en:"[Company]"},
      desc: {es:"Ejecución en campo, bitácora, estimaciones y generadores de obra.",en:"On-site execution, site logbook, progress billing and quantity take-offs."} },
    { periodo: "[1999] — [2002]", puesto: {es:"Ingeniero de Costos y Presupuestos",en:"Cost & Estimating Engineer"}, empresa: {es:"[Empresa]",en:"[Company]"},
      desc: {es:"Análisis de precios unitarios, cuantificación y concursos de obra pública y privada.",en:"Unit-price analysis, quantity surveying and bids for public and private projects."} }
  ],
  proyectos: [
    { img: "img/p1.jpg", tipo: {es:"Edificación vertical",en:"High-rise building"}, titulo: {es:"[Torre residencial]",en:"[Residential tower]"}, meta: {es:"[Ciudad] · [Año] · [00,000] m²",en:"[City] · [Year] · [00,000] m²"} },
    { img: "img/p2.jpg", tipo: {es:"Desarrollo urbano",en:"Urban development"}, titulo: {es:"[Conjunto de usos mixtos]",en:"[Mixed-use complex]"}, meta: {es:"[Ciudad] · [Año] · [00,000] m²",en:"[City] · [Year] · [00,000] m²"} },
    { img: "img/p6.jpg", tipo: {es:"Infraestructura",en:"Infrastructure"}, titulo: {es:"[Puente vehicular]",en:"[Road bridge]"}, meta: {es:"[Ciudad] · [Año] · [000] m lineales",en:"[City] · [Year] · [000] linear m"} },
    { img: "img/p3.jpg", tipo: {es:"Comercial",en:"Commercial"}, titulo: {es:"[Centro corporativo]",en:"[Corporate center]"}, meta: {es:"[Ciudad] · [Año] · [00,000] m²",en:"[City] · [Year] · [00,000] m²"} },
    { img: "img/p0.jpg", tipo: {es:"Rehabilitación",en:"Retrofit"}, titulo: {es:"[Rehabilitación estructural]",en:"[Structural retrofit]"}, meta: {es:"[Ciudad] · [Año] · [0,000] m²",en:"[City] · [Year] · [0,000] m²"} },
    { img: "img/p5.jpg", tipo: {es:"Obra industrial",en:"Industrial"}, titulo: {es:"[Nave industrial / Bodega]",en:"[Industrial warehouse]"}, meta: {es:"[Ciudad] · [Año] · [00,000] m²",en:"[City] · [Year] · [00,000] m²"} }
  ],
  especialidades: [
    [{es:"Obra civil y edificación",en:"Civil works & building"},{es:"Cimentaciones, estructura de concreto y acero, obra negra y acabados.",en:"Foundations, concrete and steel structures, shell and finishes."}],
    [{es:"Supervisión y dirección de obra",en:"Site supervision & management"},{es:"Control de calidad, bitácora, seguridad y cumplimiento normativo.",en:"Quality control, site records, safety and code compliance."}],
    [{es:"Presupuestos y costos",en:"Estimating & cost control"},{es:"Precios unitarios, estimaciones, control presupuestal y concursos.",en:"Unit pricing, progress billing, budget control and tenders."}],
    [{es:"Planeación y programación",en:"Planning & scheduling"},{es:"Rutas críticas, programas de obra y control de avance.",en:"Critical path, construction schedules and progress tracking."}],
    [{es:"Gestión de contratistas",en:"Contractor management"},{es:"Coordinación de subcontratos, proveedores y equipos en campo.",en:"Coordination of subcontractors, suppliers and field crews."}],
    [{es:"Trámites y normatividad",en:"Permits & regulations"},{es:"Licencias, DRO, reglamentos de construcción y protección civil.",en:"Building permits, DRO sign-off, building codes and civil protection."}]
  ],
  herramientas: ["AutoCAD","Revit","Opus","Neodata","MS Project",{es:"Excel avanzado",en:"Advanced Excel"},"SAP2000","Civil 3D"],
  formacion: [
    { anio: {es:"[Año]",en:"[Year]"}, titulo: {es:"Ingeniería Civil",en:"B.S. in Civil Engineering"}, lugar: {es:"[Universidad]",en:"[University]"} },
    { anio: {es:"[Año]",en:"[Year]"}, titulo: {es:"[Maestría / Especialidad en Construcción]",en:"[Master's / Graduate degree in Construction]"}, lugar: {es:"[Institución]",en:"[Institution]"} },
    { anio: {es:"[Año]",en:"[Year]"}, titulo: {es:"[Certificación — p. ej. PMP / DRO]",en:"[Certification — e.g. PMP / DRO]"}, lugar: {es:"[Organismo]",en:"[Issuing body]"} },
    { anio: {es:"[Año]",en:"[Year]"}, titulo: {es:"[Curso — Seguridad en obra / NOM-031-STPS]",en:"[Course — Construction safety / NOM-031-STPS]"}, lugar: {es:"[Institución]",en:"[Institution]"} }
  ],
  contacto: {
    email: "[correo@dominio.com]",
    telefono: "[55 0000 0000]",
    whatsapp: "520000000000",       // 52 + 10 dígitos, sin espacios
    linkedin: "https://www.linkedin.com/in/[usuario]"
  }
};
/* Textos fijos de la interfaz */
const UI = {
  es:{perfil:"Perfil",experiencia:"Experiencia",proyectos:"Proyectos",especialidades:"Especialidades",formacion:"Formación",contacto:"Contacto",
      cv:"Descargar CV (PDF)",desliza:"Desliza",sobreT:"Sobre mí",expT:"Experiencia",proyT:"Proyectos destacados",espT:"Especialidades",
      tools:"Software y herramientas",formT:"Formación y certificaciones",contT:"Hablemos de su próximo proyecto",
      correo:"Correo",tel:"Teléfono",wa:"Enviar mensaje",li:"Ver perfil",por:"Sitio por",
      credits:"Fotografías: Wikimedia Commons — dominio público (CC0), CC BY 4.0 y CC BY‑SA 4.0 (Dietmar Rabich). Imágenes ilustrativas.",
      title:"Ing. Manuel Maldonado · Ingeniero Civil · Construcción",
      desc:"Ingeniero Civil especializado en construcción, supervisión de obra, presupuestos y control de proyectos. Portafolio y currículum."},
  en:{perfil:"About",experiencia:"Experience",proyectos:"Projects",especialidades:"Expertise",formacion:"Education",contacto:"Contact",
      cv:"Download CV (PDF)",desliza:"Scroll",sobreT:"About me",expT:"Experience",proyT:"Selected projects",espT:"Areas of expertise",
      tools:"Software & tools",formT:"Education & certifications",contT:"Let's talk about your next project",
      correo:"Email",tel:"Phone",wa:"Send a message",li:"View profile",por:"Website by",
      credits:"Photos: Wikimedia Commons — public domain (CC0), CC BY 4.0 and CC BY‑SA 4.0 (Dietmar Rabich). Illustrative images.",
      title:"Manuel Maldonado, Civil Engineer · Construction",
      desc:"Civil Engineer specializing in construction, site supervision, estimating and project control. Portfolio and résumé."}
};
