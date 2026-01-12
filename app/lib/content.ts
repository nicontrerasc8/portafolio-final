export type ProjectCategory = "Data" | "ML" | "Automation" | "Web";

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

export const featuredProjects: Project[] = [
  {
    slug: "excellia-ubo",
    name: "Excellia (Grupo Romero)",
    label: "UBO Automation",
    categories: ["Data", "Automation", "Web"],
    summary:
      "A graph-centric compliance platform that maps Ultimate Beneficial Owners for audits.",
    problem:
      "Manual mapping of ownership chains was slow and error-prone, creating audit risks for complex corporate structures.",
    approach:
      "Built a recursive SQL engine to traverse ownership graphs instantly, wrapped in a secure Next.js dashboard for compliance teams.",
    stack: ["Next.js", "Supabase", "Recursive SQL", "RLS"],
    outcome:
      "Reduced a 3-day manual audit process to seconds, ensuring 100% data lineage and security context.",
    featured: true,
  },
  {
    slug: "appruebo",
    name: "Appruebo",
    label: "Learning Analytics",
    categories: ["ML", "Data", "Web"],
    summary:
      "Educational platform predicting student performance with real-time ML feedback.",
    problem:
      "Both students and institutions lacked visibility into learning gaps until it was too late to intervene.",
    approach:
      "Developed an ML pipeline that analyzes quiz performance to forecast outcomes and suggest personalized study paths.",
    stack: ["Next.js", "Python", "ML Pipelines", "Analytics"],
    outcome:
      "Empowered students with data-driven study habits and gave admins a live view of cohort health.",
    link: "https://appruebo.vercel.app/",
    featured: true,
  },
  {
    slug: "un-ratito-con-dios",
    name: "Un Ratito con Dios",
    label: "Mobile Product",
    categories: ["Web", "Automation"],
    summary:
      "Daily devotional app scaling content delivery to a dedicated community.",
    problem:
      "Delivering daily multimedia content manually was unscalable and prone to consistency issues.",
    approach:
      "Automated the content supply chain from CMS to end-user device, ensuring reliable daily delivery.",
    stack: ["React Native", "Node.js", "Firebase", "Automation"],
    outcome:
      "Scaled to 1,500+ active users with 99.9% delivery reliability and zero manual daily overhead.",
    link: "https://lnk.bio/unratitocondios",
    featured: true,
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    slug: "vida-software",
    name: "Vida Software",
    label: "Retail Data Systems",
    categories: ["Data", "ML", "Automation"],
    summary:
      "Automation ecosystem handling SKU-level decisions for major retail clients.",
    problem:
      "Retail managers drowned in excel sheets, struggling to forecast demand across thousands of SKU data.",
    approach:
      "Engineered Python ETL pipelines and demand forecasting models feeding into live dashboards.",
    stack: ["Python", "SQL", "ETL", "Forecasting", "Dashboards"],
    outcome:
      "Processed 50k+ monthly records, automating critical inventory and stock decisions.",
  },
  {
    slug: "kompass-cargo",
    name: "Kompass Cargo",
    label: "Logistics Intelligence",
    categories: ["Data", "Web"],
    summary:
      "Commercial pricing intelligence suite for the logistics sector.",
    problem:
      "Sales teams priced routes on intuition rather than data, leading to inconsistent margins.",
    approach:
      "Centralized pricing data into a unified reporting suite gave commercial teams clear benchmarks.",
    stack: ["Next.js", "SQL", "Analytics", "Reporting"],
    outcome:
      "Standardized pricing strategy across 30+ client portfolios, improving margin consistency.",
  },
];

export const strengths = [
  "Auditable Data Pipelines",
  "Recursive SQL Logic",
  "ML Forecasting Integration",
  "Enterprise Automation Modules",
];

export const industries = [
  "Retail & FMCG",
  "Logistics & Supply Chain",
  "Education Tech",
  "Compliance & Audit",
];

export const experience = [
  {
    role: "Junior Software Engineer",
    company: "Vida Software",
    period: "05/2025 — Present",
    highlights: [
      "Building interactive web dashboards (React/Next.js) for enterprise retail & FMCG clients.",
      "Implemented a demand forecasting system combining ML pipelines with SQL/Python ETLs.",
      "Developed an internal support chatbot connected to corporate databases (RAG).",
      "Built 30+ automation modules (PHP/SQL) processing 50k+ monthly records for pricing and orders.",
    ],
  },
  {
    role: "Pricing & IT Intern",
    company: "Kompass Cargo",
    period: "11/2024 — 05/2025",
    highlights: [
      "Designed a landing page and internal digital flows to reduce operational costs.",
      "Created dynamic reporting suites for pricing decisions and efficiency tracking.",
      "Managed pricing proposals for a portfolio of 30+ logistics clients.",
    ],
  },
  {
    role: "Web Developer & AI Solutions Engineer",
    company: "Freelance",
    period: "01/2023 — 11/2024",
    highlights: [
      "Developed 8+ responsive websites for startups (Next.js, PHP, SQL).",
      "Implemented 'Trippio', an AI travel planner using RAG pipelines for personalized itineraries.",
      "Built high-conversion landing pages and intelligent forms with modern auth.",
    ],
  },
];

export const education = [
  {
    school: "University of Arizona",
    degree: "B.S. Industrial Engineering",
    period: "2021 — 2025",
    details: "Summa Cum Laude (4.0 GPA)",
  },
  {
    school: "Universidad Peruana de Ciencias Aplicadas",
    degree: "B.S. Information Systems Engineering",
    period: "2021 — 2026",
    details: "Top 10% ",
  },
];
