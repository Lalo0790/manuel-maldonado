/* =====================================================================
   DATOS DEL INGENIERO — EDITA SOLO ESTE ARCHIVO
   Textos bilingües: { es: "...", en: "..." }.
   Fuente: perfil de LinkedIn de José Manuel Maldonado Roldán (oct. 2026).
   ===================================================================== */
const DATA = {
  nombre: { es: "Ing. José Manuel Maldonado Roldán", en: "José Manuel Maldonado Roldán" },
  nombreCorto: "Manuel Maldonado",
  iniciales: "MM",
  titulo: { es: "Director de Obra · Project Management", en: "Construction Director · Project Management" },
  tagline: { es: "Ingeniero Civil con más de 16 años en la gestión de proyectos de construcción de gran envergadura: planeación, control financiero, calidad y plazos cumplidos.",
             en: "Civil Engineer with 16+ years managing large-scale construction projects: planning, financial control, quality and on-time delivery." },
  cvPdf: null, // pon { es: "cv.pdf", en: "cv-en.pdf" } cuando llegue el CV real; mientras, el botón se oculta
  sobre1: { es: "Ingeniero Civil egresado de la UVM, con más de 16 años de experiencia en la gestión de proyectos de construcción de gran envergadura.",
            en: "Civil Engineer (UVM graduate) with more than 16 years of experience managing large-scale construction projects." },
  sobre2: { es: "He implementado metodologías Lean Construction y PMI con una reducción promedio del 10% en los costos de los proyectos. Mi enfoque está en la optimización de procesos, la mejora continua y la coordinación de equipos multidisciplinarios. Soy un negociador experimentado, con sólidas habilidades para asegurar la calidad y el cumplimiento de los plazos; en mi último proyecto logré elevar la satisfacción del cliente hasta un 95%. Me motiva la búsqueda constante de soluciones innovadoras para optimizar la ejecución de proyectos.",
            en: "I have implemented Lean Construction and PMI methodologies, achieving an average 10% reduction in project costs. My focus is on process optimization, continuous improvement and coordinating multidisciplinary teams. I am an experienced negotiator with strong skills in ensuring quality and meeting deadlines; on my most recent project I raised client satisfaction to 95%. I am driven by a constant search for innovative solutions to optimize project delivery." },
  datos: [
    [{es:"Ubicación",en:"Location"}, {es:"Área metropolitana de la Ciudad de México",en:"Mexico City metropolitan area"}],
    [{es:"Metodologías",en:"Methodologies"}, "Lean Construction · PMI"],
    [{es:"Idiomas",en:"Languages"}, {es:"Español nativo · Inglés profesional",en:"Spanish (native) · English (full professional)"}]
  ],
  cifras: [
    { n: 16, suf: "+", label: {es:"Años de experiencia",en:"Years of experience"} },
    { n: 10, suf: "%", label: {es:"Reducción promedio de costos",en:"Average cost reduction"} },
    { n: 95, suf: "%", label: {es:"Satisfacción del cliente",en:"Client satisfaction"} },
    { n: 55000, suf: " m²", label: {es:"Parque industrial Ephesus",en:"Ephesus industrial park"} }
  ],
  experiencia: [
    { periodo: {es:"Mar. 2024 — Actualidad",en:"Mar 2024 — Present"}, puesto: {es:"Director de Obra",en:"Construction Director"}, empresa: "Kamia Developers Lab · CDMX",
      desc: {es:"Interpretación del proyecto y comunicación a los equipos; cronograma de obra, asignación de tareas y coordinación de materiales y equipos. Supervisión de los trabajos en sitio, resolución de problemas técnicos y control de calidad con informes de seguimiento. Administración del presupuesto, contratación y supervisión de subcontratistas, relación con el cliente y cumplimiento normativo, incluidos licencias y permisos.",
             en:"Interpreting project drawings and specifications and communicating them to the teams; building detailed schedules, assigning tasks and coordinating materials and equipment. On-site supervision, technical problem-solving and quality control with progress reports. Managing the construction budget, hiring and overseeing subcontractors, keeping the client informed and ensuring regulatory compliance, including licenses and permits."} },
    { periodo: {es:"Sep. 2022 — Mar. 2024",en:"Sep 2022 — Mar 2024"}, puesto: "Procurement & Project Oversight Manager", empresa: "SUEZ · CDMX",
      desc: {es:"Cumplí el objetivo de reducir en 11% los costos de adquisición. Mejoré el proceso de compra de la requisición a la orden de compra e introduje nuevos métodos de compra y técnicas de negociación. Negocié con proveedores de servicios, materiales y maquinaria, revisé contratos, gestioné contratistas y coordiné compras e importaciones de equipo especializado.",
             en:"Met the target of an 11% reduction in procurement costs. Streamlined the purchasing process from requisition to purchase order and introduced new purchasing methods and negotiation techniques. Negotiated with service, materials and machinery suppliers, reviewed contracts, managed contractors and coordinated purchases and imports of specialized equipment."} },
    { periodo: {es:"Abr. 2016 — May. 2022",en:"Apr 2016 — May 2022"}, puesto: {es:"Gerente Superior de Construcción",en:"Senior Construction Manager"}, empresa: "Auri Desarrollos Habitacionales · CDMX",
      desc: {es:"Reduje 5% los costos por proyecto mediante estrategias de gestión y negociación. Optimicé la adquisición y la negociación de subcontratos de obra, mantuve el control de los presupuestos con transparencia financiera y garanticé los estándares de calidad, con una satisfacción del cliente del 90%.",
             en:"Cut costs per project by 5% through management and negotiation strategies. Optimized procurement and subcontract negotiation, kept construction budgets under control with financial transparency and upheld quality standards, reaching 90% client satisfaction."} },
    { periodo: {es:"Feb. 2014 — Mar. 2016",en:"Feb 2014 — Mar 2016"}, puesto: {es:"Subgerente de Compras, Planeación y Control de Costos",en:"Deputy Manager, Procurement, Planning & Cost Control"}, empresa: "Grupo Aldesa · CDMX",
      desc: {es:"Implementé procedimientos de tablas comparativas y métricas para reducir los tiempos de contratación. Coordiné los equipos de compras y costos por proyecto, elaboré el plan de compras de cada obra, cumplí los objetivos presupuestarios y presenté reportes trimestrales a la Dirección General.",
             en:"Implemented bid-comparison procedures and metrics to shorten contracting times. Coordinated procurement and cost teams for each project, prepared each project's purchasing plan, met budget targets and delivered quarterly reports to senior management."} },
    { periodo: {es:"Mar. 2012 — Feb. 2014",en:"Mar 2012 — Feb 2014"}, puesto: {es:"Jefe de Procuración",en:"Procurement Lead"}, empresa: "Global Infra · CDMX",
      desc: {es:"Planeación y coordinación de compras de materiales, gestión del almacén de obra y contratación de servicios; soporte en licitaciones y análisis de procesos constructivos para optimizar eficiencia y calidad.",
             en:"Planned and coordinated materials purchasing, managed the site warehouse and contracted services; supported tenders and analyzed construction processes to improve efficiency and quality."} }
  ],
  proyectos: [
    { img: "img/p6.jpg", tipo: {es:"Parque industrial",en:"Industrial park"}, titulo: "Ephesus", meta: {es:"55,000 m² · Kamia Developers Lab",en:"55,000 m² · Kamia Developers Lab"} },
    { img: "img/p2.jpg", tipo: {es:"Nave industrial",en:"Industrial warehouse"}, titulo: "Augostow", meta: {es:"13,000 m² · Kamia Developers Lab",en:"13,000 m² · Kamia Developers Lab"} },
    { img: "img/p5.jpg", tipo: {es:"Electrificación",en:"Electrical works"}, titulo: {es:"Electrificación de parque industrial",en:"Industrial park electrification"}, meta: {es:"18,000 m² · Kamia Developers Lab",en:"18,000 m² · Kamia Developers Lab"} },
    { img: "img/p1.jpg", tipo: {es:"Residencial",en:"Residential"}, titulo: "Residencial Lunah", meta: {es:"Cuernavaca, Mor. · 26 residencias de alta gama",en:"Cuernavaca, Morelos · 26 high-end homes"} },
    { img: "img/p3.jpg", tipo: {es:"Desarrollo industrial",en:"Industrial development"}, titulo: "Sensapark", meta: {es:"Kamia Developers Lab",en:"Kamia Developers Lab"} },
    { img: "img/p7.jpg", tipo: {es:"Nave industrial AAA",en:"Class A industrial building"}, titulo: {es:"Nave industrial en Poza Rica",en:"Industrial warehouse in Poza Rica"}, meta: {es:"Poza Rica, Ver. · Inicio de obra",en:"Poza Rica, Veracruz · Construction started"} }
  ],
  especialidades: [
    [{es:"Dirección de obra",en:"Construction management"},{es:"Supervisión en sitio, resolución de problemas técnicos y control de calidad de materiales y acabados.",en:"On-site supervision, technical problem-solving and quality control of materials and finishes."}],
    [{es:"Planeación y control",en:"Planning & control"},{es:"Cronogramas de obra, asignación de responsabilidades e informes de seguimiento.",en:"Construction schedules, assignment of responsibilities and progress reporting."}],
    [{es:"Control financiero y costos",en:"Financial & cost control"},{es:"Presupuestos, pronósticos y administración del presupuesto de obra con transparencia.",en:"Budgeting, forecasting and transparent management of the construction budget."}],
    [{es:"Compras y negociación",en:"Procurement & negotiation"},{es:"Negociación con proveedores y subcontratistas, revisión de contratos e importaciones.",en:"Negotiation with suppliers and subcontractors, contract review and imports."}],
    [{es:"Lean Construction y PMI",en:"Lean Construction & PMI"},{es:"Optimización de procesos y mejora continua para reducir costos y tiempos.",en:"Process optimization and continuous improvement to reduce cost and time."}],
    [{es:"Normatividad y seguridad",en:"Compliance & safety"},{es:"Licencias, permisos, cumplimiento normativo y cultura de la seguridad.",en:"Licenses, permits, regulatory compliance and safety culture."}]
  ],
  herramientas: ["Lean Construction","PMI","PMIS","Lean Six Sigma","Agile Management",{es:"Construcción 4.0",en:"Construction 4.0"},{es:"Liderazgo de equipos",en:"Team leadership"},"Microsoft Office"],
  formacion: [
    { anio: "2006–10", titulo: {es:"Ingeniería Civil",en:"B.S. in Civil Engineering"}, lugar: {es:"Universidad del Valle de México · Título universitario",en:"Universidad del Valle de México · University degree"} },
    { anio: "2022", titulo: {es:"Diplomado en Agile Management",en:"Agile Management Diploma"}, lugar: {es:"Universidad del Valle de México · Lean Six Sigma, gestión ágil de equipos y gestión ajustada de proyectos",en:"Universidad del Valle de México · Lean Six Sigma, agile team management and lean project management"} },
    { anio: "2022", titulo: {es:"Dirección y Administración de Proyectos Inmobiliarios",en:"Direction and Administration of Real Estate Projects"}, lugar: {es:"Universidad del Valle de México · Certificación",en:"Universidad del Valle de México · Certification"} },
    { anio: "2023", titulo: {es:"Factores Humanos y Organizacionales y Cultura de la Seguridad",en:"Human and Organizational Factors and Safety Culture"}, lugar: "ICSI — Institut pour une culture de sécurité industrielle" },
    { anio: "Diploma", titulo: {es:"Acreditación Internacional en Lean Construction",en:"International Accreditation in Lean Construction"}, lugar: {es:"Diploma de acreditación",en:"Accreditation diploma"} },
    { anio: "Diploma", titulo: {es:"Construcción 4.0: Transformación Digital de la Construcción",en:"Construction 4.0: Digital Transformation of Construction"}, lugar: {es:"Diploma",en:"Diploma"} },
    { anio: "2022 —", titulo: {es:"Lean Construction México",en:"Lean Construction Mexico"}, lugar: {es:"Miembro profesional activo",en:"Active professional member"} }
  ],
  contacto: {
    email: "maldonado.obras@kamia.mx",
    telefono: "",   // pendiente: se oculta mientras esté vacío
    whatsapp: "",   // 52 + 10 dígitos, sin espacios; se oculta mientras esté vacío
    linkedin: "https://www.linkedin.com/in/jose-manuel-maldonado"
  }
};
/* Textos fijos de la interfaz */
const UI = {
  es:{perfil:"Perfil",experiencia:"Experiencia",proyectos:"Proyectos",especialidades:"Especialidades",formacion:"Formación",contacto:"Contacto",
      cv:"Descargar CV (PDF)",verProy:"Ver proyectos",desliza:"Desliza",sobreT:"Sobre mí",expT:"Experiencia",proyT:"Proyectos destacados",espT:"Especialidades",
      proyNota:"Imágenes ilustrativas.",
      tools:"Metodologías y herramientas",formT:"Formación y certificaciones",contT:"Hablemos de su próximo proyecto",
      correo:"Correo",tel:"Teléfono",wa:"Enviar mensaje",li:"Ver perfil",por:"Sitio por",
      credits:"Fotografías ilustrativas: Wikimedia Commons — dominio público (CC0), CC BY 4.0, CC BY‑SA 4.0 (Dietmar Rabich) y CC BY‑SA 2.0 (Steve Fareham, geograph.org.uk).",
      title:"Ing. José Manuel Maldonado Roldán · Director de Obra · Project Management",
      desc:"Ingeniero Civil con más de 16 años en dirección de obra, planeación, control financiero y gestión de proyectos de construcción con Lean Construction y PMI."},
  en:{perfil:"About",experiencia:"Experience",proyectos:"Projects",especialidades:"Expertise",formacion:"Education",contacto:"Contact",
      cv:"Download CV (PDF)",verProy:"View projects",desliza:"Scroll",sobreT:"About me",expT:"Experience",proyT:"Selected projects",espT:"Areas of expertise",
      proyNota:"Illustrative images.",
      tools:"Methodologies & tools",formT:"Education & certifications",contT:"Let's talk about your next project",
      correo:"Email",tel:"Phone",wa:"Send a message",li:"View profile",por:"Website by",
      credits:"Illustrative photos: Wikimedia Commons — public domain (CC0), CC BY 4.0, CC BY‑SA 4.0 (Dietmar Rabich) and CC BY‑SA 2.0 (Steve Fareham, geograph.org.uk).",
      title:"José Manuel Maldonado Roldán · Construction Director · Project Management",
      desc:"Civil Engineer with 16+ years in construction management, planning, financial control and project delivery using Lean Construction and PMI."}
};
