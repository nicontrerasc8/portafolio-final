export type ProjectCategory = "Data" | "ML" | "Automation" | "Web";

export const categoryLabels: Record<ProjectCategory, string> = {
  Data: "Datos",
  ML: "IA",
  Automation: "Automatización",
  Web: "Web",
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
    slug: "excellia-ubo",
    name: "Excellia (Grupo Romero)",
    label: "Automatización UBO",
    categories: ["Data", "Automation", "Web"],
    summary:
      "Automatizamos la trazabilidad de Beneficiarios Finales para auditorías claras y sin manualidades.",
    problem:
      "Los mapas manuales eran lentos, inseguros y hacía falta trazabilidad precisa para cumplir con normas.",
    approach:
      "Creamos un motor SQL recursivo y un tablero seguro que entrega resultados listos para entrega de cumplimiento.",
    stack: ["Next.js", "Supabase", "SQL recursivo", "Seguridad a nivel de fila"],
    outcome:
      "Convertimos 3 días de análisis en segundos con trazabilidad total y contexto de seguridad.",
    featured: true,
  },
  {
    slug: "appruebo",
    name: "Ludus",
    label: "Plataforma Ludus",
    categories: ["ML", "Data", "Web"],
    summary: "Ludus mantiene la experiencia educativa alineada con la nueva URL.",
    problem: "No había visibilidad rápida de qué aprender.",
    approach: "Conectamos datos y mostramos lo esencial.",
    stack: ["Next.js", "Python", "Analytics"],
    outcome: "Los equipos reaccionan sin esperar reportes largos.",
    link: "https://www.ludus-edu.com/",
    featured: true,
  },
  {
    slug: "un-ratito-con-dios",
    name: "Un Ratito con Dios",
    label: "Producto móvil",
    categories: ["Web", "Automation"],
    summary:
      "Escalamos la entrega diaria de devocionales para una comunidad fiel sin añadir tareas nuevas.",
    problem:
      "Publicar cada día era manual e inconsistente, y el equipo no podía mantener el ritmo.",
    approach:
      "Automatizamos la cadena desde el CMS hasta la app, con reglas de publicación rígidas y monitoreo automático.",
    stack: ["React Native", "Node.js", "Firebase", "Automatización"],
    outcome:
      "1,500+ usuarios activos, entregas al 99.9% y cero trabajo manual diario.",
    link: "https://lnk.bio/unratitocondios",
    featured: true,
  },
  {
    slug: "vida-software",
    name: "Vida Software",
    label: "Sistemas retail",
    categories: ["Data", "ML", "Automation"],
    summary:
      "Ecosistema automatizado para decisiones de stock y precio con información confiable.",
    problem:
      "Gerentes pasaban días en Excel sin poder reaccionar a cambios repentinos en el mercado.",
    approach:
      "Construimos pipelines ETL en Python, modelos de pronóstico y dashboards que hablan el mismo idioma que la operación.",
    stack: ["Python", "SQL", "ETL", "Pronósticos", "Dashboards"],
    outcome:
      "Procesamos 50k+ registros mensuales y dejamos decisiones operativas en piloto automático.",
  },
  {
    slug: "goxa",
    name: "GOXA",
    label: "GOXA Studio",
    categories: ["Data", "Automation"],
    summary: "GOXA automatiza reportes sin ruido.",
    problem: "Las métricas tardaban días en llegar.",
    approach: "Ponemos dashboards listos y alertas mínimas.",
    stack: ["Next.js", "SQL"],
    outcome: "Información que se entiende en segundos.",
  },
  {
    slug: "kompass-cargo",
    name: "Kompass Cargo",
    label: "Inteligencia logística",
    categories: ["Data", "Web"],
    summary:
      "Un tablero comercial que junta precios, márgenes y alertas para equipos logísticos.",
    problem:
      "Los comerciales trabajaban a ciegas y regalaban margen porque no tenían datos claros ni consistentes.",
    approach:
      "Centralizamos precios en una suite de reportes con benchmarks sencillos y señales de acción.",
    stack: ["Next.js", "SQL", "Analytics", "Reporting"],
    outcome:
      "Estandarizamos la estrategia de precio en 30+ clientes y mejoramos la consistencia de los márgenes.",
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((project) => project.featured);

export const getAllProjects = (): Project[] => projects;

export const strengths = [
  "Pipelines auditables que dan confianza",
  "SQL recursivo que sigue reglas limpias",
  "Pronósticos de IA listos para actuar",
  "Automatizaciones que se mantienen solas",
];

export const industries = [
  "Retail y FMCG",
  "Logística y cadena de suministro",
  "Educación y tecnología educativa",
  "Cumplimiento y auditoría",
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Ingeniero de software",
    company: "Vida Software",
    period: "05/2025 - Presente",
    highlights: [
      "Lidero dashboards interactivos que alínean retail con producto digital.",
      "Automatizo pronósticos y operaciones con pipelines Python + SQL.",
      "Mantengo más de 30 módulos que mueven stock y precio sin intervención diaria.",
    ],
  },
  {
    role: "Analista de pricing y TI",
    company: "Kompass Cargo",
    period: "11/2024 - 05/2025",
    highlights: [
      "Diseñé flujos digitales que redujeron costos operativos y errores.",
      "Convertí datos dispersos en reportes claros con señales comerciales.",
      "Gestioné propuestas técnicas para más de 30 clientes logísticos.",
    ],
  },
  {
    role: "Desarrollador web y soluciones IA",
    company: "Freelance",
    period: "01/2023 - 11/2024",
    highlights: [
      "Lancé ocho experiencias web responsivas para startups que necesitaban conversión.",
      "Construí 'Trippio', un planificador de viajes IA con pipelines RAG sencillos.",
      "Desarrollé landing pages inteligentes con autenticación moderna.",
    ],
  },
];

export type IndustryTag = string;

export const getStrengths = (): string[] => strengths;

export const getIndustries = (): IndustryTag[] => industries;

export const getExperience = (): ExperienceItem[] => experience;
