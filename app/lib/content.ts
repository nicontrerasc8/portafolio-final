export type ProjectCategory = "Sightflow" | "AI" | "Ecommerce";

export const categoryLabels: Record<ProjectCategory, string> = {
  Sightflow: "Sightflow",
  AI: "Consultoría de IA",
  Ecommerce: "E-commerce",
};

export type Project = {
  slug: string;
  name: string;
  label: string;
  categories: ProjectCategory[];
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    slug: "corporacion-grupo-romero",
    name: "Corporación Grupo Romero",
    label: "Sightflow",
    categories: ["Sightflow"],
    summary:
      "Automatización de BI para trazabilidad, análisis corporativo y reportes listos para revisión.",
    problem:
      "El equipo necesitaba dejar atrás análisis manuales con hojas de cálculo y consolidar información crítica.",
    approach:
      "Implementamos una solución de BI que centraliza datos, ordena reglas de cálculo y automatiza reportes.",
    stack: ["Sightflow", "BI", "Reporting", "Automatización"],
    outcome:
      "Menos trabajo manual, información trazable y reportes listos para toma de decisiones.",
    featured: true,
  },
  {
    slug: "cidelsa",
    name: "CIDELSA",
    label: "Sightflow",
    categories: ["Sightflow"],
    summary:
      "Automatización de reportes comerciales para reducir preparación manual y mejorar seguimiento.",
    problem:
      "El equipo comercial dependía de reportes manuales que tomaban tiempo y duplicaban esfuerzos.",
    approach:
      "Automatizamos el flujo de reportes comerciales con una capa de BI que consolida datos e indicadores.",
    stack: ["Sightflow", "BI", "Comercial", "Dashboards"],
    outcome:
      "Reportes comerciales automatizados, menos archivos manuales y mayor visibilidad de ventas.",
    featured: true,
  },
  {
    slug: "subway",
    name: "Subway",
    label: "Sightflow",
    categories: ["Sightflow"],
    summary:
      "Automatización de reportes comerciales para estandarizar indicadores y reducir carga operativa.",
    problem:
      "La operación requería reportes comerciales más rápidos y consistentes para el control diario.",
    approach:
      "Automatizamos reportes y tableros de BI para estandarizar indicadores comerciales.",
    stack: ["Sightflow", "BI", "Retail", "Reporting"],
    outcome:
      "Reportes más rápidos, indicadores consistentes y menor carga manual para el equipo.",
    featured: true,
  },
  {
    slug: "tmf-group",
    name: "TMF Group",
    label: "Consultoría de IA",
    categories: ["AI"],
    summary:
      "Automatización de un flujo de correos con Power Automate para reducir tareas repetitivas.",
    problem:
      "El equipo gestionaba correos y derivaciones con pasos manuales que consumían tiempo.",
    approach:
      "Diseñamos un flujo en Power Automate para ordenar entradas, disparar acciones y mejorar continuidad.",
    stack: ["Power Automate", "Procesos", "Automatización", "IA"],
    outcome:
      "Flujo de correos automatizado, menos tareas repetitivas y mayor orden operativo.",
  },
  {
    slug: "ptc",
    name: "PTC",
    label: "Consultoría de IA",
    categories: ["AI"],
    summary:
      "Automatización del flujo de creación de propuestas comerciales con Gemini.",
    problem:
      "La creación de propuestas requería recopilar información, estructurar contenido y repetir pasos.",
    approach:
      "Creamos un flujo asistido por Gemini para generar y ordenar propuestas con mayor consistencia.",
    stack: ["Gemini", "IA", "Propuestas", "Automatización"],
    outcome:
      "Menos tiempo de preparación y una estructura más consistente para el equipo comercial.",
  },
  {
    slug: "goxa",
    name: "GOXA",
    label: "E-commerce",
    categories: ["Ecommerce"],
    summary:
      "E-commerce para ordenar ventas digitales y facilitar la operación comercial.",
    problem:
      "GOXA necesitaba digitalizar su canal de ventas y mejorar la experiencia de compra.",
    approach:
      "Diseñamos e implementamos una tienda orientada a conversión, contenido claro y operación escalable.",
    stack: ["E-commerce", "Web", "Ventas digitales"],
    outcome:
      "Canal de ventas digital operativo y mejor base tecnológica para escalar.",
    link: "https://goxa.pe",
  },
  {
    slug: "el-pez-nuestro-de-cada-dia",
    name: "El Pez Nuestro de Cada Día",
    label: "E-commerce",
    categories: ["Ecommerce"],
    summary:
      "Landing comercial para centralizar pedidos, contactos, contenido social y videos.",
    problem:
      "El negocio requería un canal digital que reuniera pedidos, contactos y contenido audiovisual.",
    approach:
      "Creamos una landing page integral con enlaces de pedido, contacto, redes y galería visual.",
    stack: ["Landing page", "E-commerce", "Contenido", "Web"],
    outcome:
      "Canal digital oficial para impulsar marca, pedidos y presencia en redes.",
    link: "https://elpeznuestrodecadadia.vercel.app/",
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((project) => project.featured);

export const getAllProjects = (): Project[] => projects;

export const strengths = [
  "BI automatizado para reportes comerciales",
  "Flujos de IA y no-code para procesos internos",
  "E-commerce y canales digitales orientados a venta",
  "Automatizaciones simples que reducen trabajo manual",
];

export const industries = [
  "BI y reporting comercial",
  "Consultoría de IA",
  "E-commerce",
  "Automatización de procesos",
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Automatización de BI",
    company: "Sightflow",
    period: "Corporación Grupo Romero / CIDELSA / Subway",
    highlights: [
      "Automatización de reportes comerciales y tableros de BI.",
      "Centralización de indicadores para reducir preparación manual.",
      "Entrega de información lista para seguimiento y toma de decisiones.",
    ],
  },
  {
    role: "Consultoría de IA",
    company: "TMF Group / PTC",
    period: "Automatización de procesos",
    highlights: [
      "Automatización de un flujo de correos con Power Automate para TMF Group.",
      "Automatización del flujo de creación de propuestas con Gemini para PTC.",
      "Diseño de flujos internos para reducir tareas repetitivas.",
    ],
  },
  {
    role: "E-commerce",
    company: "GOXA / El Pez Nuestro de Cada Día",
    period: "Canales digitales",
    highlights: [
      "Implementación de e-commerce para ventas digitales.",
      "Landing comercial con pedidos, contactos y contenido centralizado.",
      "Experiencias web enfocadas en conversión y operación simple.",
    ],
  },
];

export type IndustryTag = string;

export const getStrengths = (): string[] => strengths;

export const getIndustries = (): IndustryTag[] => industries;

export const getExperience = (): ExperienceItem[] => experience;
