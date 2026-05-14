"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  X,
  CheckCircle2,
  ExternalLink,
  BarChart3,
  Zap,
  ShoppingCart,
} from "lucide-react";
import SiteFooter from "./components/SiteFooter";

const clients = [
  {
    name: "Grupo Romero",
    logo: "/logo-gruporomero.jpg",
  },
  {
    name: "CIDELSA",
    logo: "/cidelsa.png",
  },
  {
    name: "Subway",
    logo: "/subway.png",
  },
  {
    name: "TMF Group",
    logo: "/tmf.png",
  },
  {
    name: "PTC",
    logo: "/logo-ptc.png",
  },
  {
    name: "GOXA",
    logo: "/goxa.png",
  },
  {
    name: "El Pez Nuestro",
    logo: "/elpez.png",
  },
];

const legacyProjects = [
  {
    id: "corporacion-grupo-romero",
    service: "BI",
    name: "Grupo Romero",
    logo: "/logo-gruporomero.jpg",
    description: "Automatización de reportes y análisis corporativo.",
    problem: "Demasiado trabajo manual para consolidar información.",
    solution: "Centralizamos datos y dejamos reportes listos para revisar.",
    results: [
      "Menos trabajo manual",
      "Información más ordenada",
      "Reportes más rápidos",
    ],
    tags: ["BI", "Automatización", "Reportes"],
  },
  {
    id: "cidelsa",
    service: "BI",
    name: "CIDELSA",
    logo: "/cidelsa.png",
    description: "Reportes comerciales automatizados.",
    problem: "Reportes manuales que tomaban tiempo y generaban duplicidad.",
    solution: "Automatizamos el flujo comercial en tableros de BI.",
    results: [
      "Reportes automáticos",
      "Mejor seguimiento comercial",
      "Menos uso de archivos manuales",
    ],
    tags: ["BI", "Ventas", "Dashboards"],
  },
  {
    id: "subway",
    service: "BI",
    name: "Subway",
    logo: "/subway.png",
    description: "Automatización de reportes comerciales.",
    problem: "La operación necesitaba reportes más rápidos y consistentes.",
    solution: "Estandarizamos indicadores y automatizamos reportes.",
    results: [
      "Indicadores claros",
      "Menos carga operativa",
      "Reportes más rápidos",
    ],
    tags: ["BI", "Retail", "Reportes"],
  },
  {
    id: "tmf-group",
    service: "Automatización",
    name: "TMF Group",
    logo: "/tmf.png",
    description: "Automatización de correos con Power Automate.",
    problem: "Correos y derivaciones gestionados manualmente.",
    solution: "Creamos un flujo automático para ordenar y derivar correos.",
    results: [
      "Menos tareas repetitivas",
      "Flujo más ordenado",
      "Mayor rapidez interna",
    ],
    tags: ["Power Automate", "Correos", "Procesos"],
  },
  {
    id: "ptc",
    service: "IA",
    name: "PTC",
    logo: "/logo-ptc.png",
    description: "Automatización de propuestas con IA.",
    problem: "Crear propuestas tomaba tiempo y repetía pasos.",
    solution: "Usamos IA para estructurar y acelerar propuestas.",
    results: [
      "Propuestas más rápidas",
      "Formato más consistente",
      "Menos trabajo manual",
    ],
    tags: ["IA", "Gemini", "Propuestas"],
  },
  {
    id: "goxa",
    service: "E-commerce",
    name: "GOXA",
    logo: "/goxa.png",
    description: "Tienda online de productos naturales.",
    problem: "El negocio necesitaba vender mejor por internet.",
    solution: "Creamos un e-commerce simple, rápido y escalable.",
    results: [
      "Canal digital activo",
      "Mejor experiencia de compra",
      "Base lista para crecer",
    ],
    link: "https://goxa.pe",
    tags: ["E-commerce", "Ventas", "Web"],
  },
  {
    id: "elpez",
    service: "Web",
    name: "El Pez Nuestro",
    logo: "/elpez.png",
    description: "Landing page para pedidos y contacto.",
    problem: "El negocio necesitaba una presencia digital clara.",
    solution: "Creamos una página simple para mostrar marca, pedidos y contacto.",
    results: [
      "Página oficial",
      "Accesos rápidos",
      "Mejor presencia digital",
    ],
    link: "https://elpeznuestrodecadadia.vercel.app/",
    tags: ["Landing", "Pedidos", "Web"],
  },
];

const projectUpdates: Record<string, Partial<(typeof legacyProjects)[number]>> = {
  "corporacion-grupo-romero": {
    service: "Legaltech",
    description:
      "Legaltech a medida para automatizar la determinación del beneficiario final.",
    problem:
      "El área legal tributaria determinaba beneficiarios finales manualmente en Excel, con procesos que podían tomar hasta una semana por empresa.",
    solution:
      "Desarrollamos una plataforma que digitaliza el flujo, aplica reglas de análisis y reduce tareas repetitivas dentro de un proceso tributario crítico.",
    results: [
      "Tiempo promedio reducido a 15 minutos por empresa",
      "Menor riesgo de error en un proceso sensible",
      "Más control, trazabilidad y operación legal digitalizada",
    ],
    tags: ["Legaltech", "Tributario", "Automatización"],
  },
  cidelsa: {
    service: "CRM",
    description: "CRM comercial a medida, compatible con el ERP de Cidelsa.",
    problem:
      "La actividad comercial necesitaba visualizarse de forma clara, rápida y ordenada para distintos niveles de gestión.",
    solution:
      "Creamos un CRM integrado al ERP, con carga simple de información y vistas adaptadas para directores, gerentes, jefes y ejecutivos.",
    results: [
      "Mejor visibilidad comercial por rol y equipo",
      "Seguimiento más ordenado de la gestión de ventas",
      "Toma de decisiones más ágil con información centralizada",
    ],
    tags: ["CRM", "ERP", "Ventas"],
  },
  subway: {
    service: "Dashboard",
    description:
      "Dashboard comercial y operativo para las tiendas Subway de Gastrobiz en Lima.",
    problem:
      "La operación necesitaba monitorear el desempeño de 7 sucursales desde una misma plataforma, con información ordenada y accionable.",
    solution:
      "Desarrollamos una solución de visualización y gestión que centraliza datos por tienda y facilita el seguimiento comercial diario.",
    results: [
      "Mayor control operativo por sucursal",
      "Información comercial centralizada y más fácil de revisar",
      "Mejor seguimiento del desempeño de cada tienda",
    ],
    tags: ["Dashboard", "Retail", "Sucursales"],
  },
  "tmf-group": {
    service: "Automatización",
    description:
      "Automatización inteligente de correos para derivar comunicaciones al responsable correcto.",
    problem:
      "El reenvío de correos hacia el personal de cada cuenta consumía tiempo y generaba fricción en la operación diaria.",
    solution:
      "Implementamos un flujo en Power Automate que ordena, distribuye y deriva comunicaciones de forma más eficiente.",
    results: [
      "Menos trabajo manual en la gestión de correos",
      "Mayor trazabilidad en la distribución interna",
      "Gestión operativa más rápida y ordenada",
    ],
    tags: ["Power Automate", "Correos", "Procesos"],
  },
  ptc: {
    service: "IA",
    description:
      "Automatización con IA para acelerar la creación de propuestas comerciales.",
    problem:
      "El equipo invertía tiempo en tareas repetitivas para armar, estructurar y estandarizar propuestas.",
    solution:
      "Creamos una solución con Gemini estructurado que automatiza el flujo de generación de documentos comerciales.",
    results: [
      "Propuestas comerciales listas en menos tiempo",
      "Documentos mejor organizados y estandarizados",
      "Menos trabajo manual",
    ],
    tags: ["IA", "Gemini", "Propuestas"],
  },
  goxa: {
    service: "E-commerce",
    description:
      "Ecommerce con catálogo digital y carrito conectado directamente a WhatsApp.",
    problem:
      "Goxa necesitaba mostrar más de 30 productos y convertir el interés de sus clientes en pedidos rápidos.",
    solution:
      "Diseñamos una tienda online funcional donde los usuarios exploran productos, arman su carrito y envían el pedido por WhatsApp.",
    results: [
      "Catálogo digital con más de 30 productos",
      "Proceso de compra simple conectado a WhatsApp",
      "Tienda online enfocada en vender más",
    ],
    tags: ["E-commerce", "WhatsApp", "Catálogo"],
  },
  elpez: {
    service: "Web",
    description:
      "Plataforma web de contenido y ecommerce para comunicar, informar y vender.",
    problem:
      "La marca necesitaba centralizar contenido, noticias, productos y funcionalidades digitales en una experiencia clara.",
    solution:
      "Desarrollamos una web tipo ecommerce que integra contenido y venta en una sola plataforma preparada para crecer.",
    results: [
      "Presencia digital más profesional",
      "Contenido, noticias y productos centralizados",
      "Plataforma lista para escalar nuevas funcionalidades",
    ],
    tags: ["Contenido", "E-commerce", "Web"],
  },
};

const projects = legacyProjects.map((project) => ({
  ...project,
  ...projectUpdates[project.id],
}));

const services = [
  {
    title: "Reportes automáticos",
    description: "Convierte tus datos en dashboards claros, actualizados y listos para decidir.",
    icon: BarChart3,
    stat: "BI",
    glow: "from-[#b8d8ff]/50 to-[#246bff]/20",
  },
  {
    title: "Procesos automáticos",
    description: "Automatizamos tareas repetitivas, correos y flujos internos para que tu equipo trabaje mejor.",
    icon: Zap,
    stat: "Flow",
    glow: "from-[#246bff]/20 to-[#b8d8ff]/50",
  },
  {
    title: "Ecommerce",
    description: "Creamos páginas y sistemas simples, rápidos y pensadas para convertir visitas en clientes.",
    icon: ShoppingCart,
    stat: "Web",
    glow: "from-[#dbeafe]/70 to-[#246bff]/20",
  },
];

function LogoBox({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-4 flex h-40 min-w-[300px] items-center justify-center rounded-3xl border border-white/10 bg-white px-9 py-5 shadow-2xl shadow-black/30 backdrop-blur">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={300}
          height={180}
          className="max-h-32 w-full rounded-lg object-contain "
        />
      ) : (
        <span className="text-center font-display text-4xl font-black text-slate-950">
          {name}
        </span>
      )}
    </div>
  );
}

function ClientCarousel() {
  const repeatedClients = [...clients, ...clients];

  return (
    <div className="relative mt-12 w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#07111f] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#07111f] to-transparent" />

      <div className="flex w-max animate-logoScroll">
        {repeatedClients.map((client, index) => (
          <LogoBox
            key={`${client.name}-${index}`}
            name={client.name}
            logo={client.logo}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: (typeof projects)[0];
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/45 p-2 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[calc(100dvh-1rem)] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-[1.75rem] border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-100/80 sm:max-h-[calc(100dvh-2rem)] sm:rounded-3xl sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 transition hover:bg-blue-100 sm:right-5 sm:top-5"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5 text-slate-950" />
        </button>

        <div className="mb-5 flex flex-col gap-4 pr-10 sm:mb-6 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white p-3 sm:h-24 sm:w-24 sm:p-4">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.name}
                width={120}
                height={80}
                className="max-h-16 w-auto rounded-lg object-contain sm:max-h-20"
              />
            ) : (
              <span className="text-center font-display text-base font-black text-slate-950 sm:text-xl">
                {project.name}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#246bff] sm:text-sm sm:tracking-[0.2em]">
              {project.service}
            </p>
            <h2
              id="project-modal-title"
              className="font-display mt-1 break-words text-2xl font-bold leading-tight text-slate-950 sm:text-3xl"
            >
              {project.name}
            </h2>
            <p className="font-body mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4">
          <div className="rounded-xl bg-[#f4f8ff]/90 p-4 sm:rounded-2xl sm:p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#246bff] sm:tracking-[0.2em]">
              Problema
            </p>
            <p className="font-body mt-2 text-base leading-relaxed text-slate-950 sm:text-lg">
              {project.problem}
            </p>
          </div>

          <div className="rounded-xl bg-[#f4f8ff]/90 p-4 sm:rounded-2xl sm:p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#246bff] sm:tracking-[0.2em]">
              Solución
            </p>
            <p className="font-body mt-2 text-base leading-relaxed text-slate-950 sm:text-lg">
              {project.solution}
            </p>
          </div>

          <div className="rounded-xl bg-[#f4f8ff]/90 p-4 sm:rounded-2xl sm:p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#246bff] sm:tracking-[0.2em]">
              Resultado
            </p>

            <div className="mt-3 grid gap-3">
              {project.results.map((result) => (
                <div key={result} className="flex items-start gap-3 text-slate-950">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#246bff]" />
                  <span className="font-body text-sm leading-relaxed sm:text-base">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#246bff] px-5 py-3 font-bold text-white transition hover:bg-[#1f57d6] sm:mt-6 sm:w-auto"
          >
            Ver sitio
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-3xl border border-white/10 bg-white p-6 text-left shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-[#246bff]/50 hover:bg-[#f8fbff]"
    >
      <div className="mb-7 flex min-h-52 items-center justify-center">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.name}
            width={380}
            height={260}
            className="aspect-[16/9] max-h-48 w-full rounded-lg object-contain  transition duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="text-center font-display text-5xl font-black text-slate-950">
            {project.name}
          </span>
        )}
      </div>

      <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#246bff]">
        {project.service}
      </p>

      <h3 className="font-display mt-2 text-2xl font-bold text-slate-950">
        {project.name}
      </h3>

      <p className="font-body mt-3 text-base leading-relaxed text-slate-600">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#246bff]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 font-body font-bold text-slate-950">
        Ver caso
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </button>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <div
      className="service-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-center shadow-2xl shadow-black/30"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={`absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gradient-to-br ${service.glow} blur-3xl transition duration-500 group-hover:scale-125 group-hover:opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(36,107,255,0.08),transparent_48%)] opacity-70" />

      <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-blue-100 bg-[#f4f8ff]/90 shadow-2xl shadow-blue-200/70 transition duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-[#246bff]/30">
        <div className="absolute inset-3 rounded-[1.35rem] bg-[#246bff]/10 transition group-hover:bg-[#246bff]/15" />
        <Icon className="relative h-14 w-14 text-[#246bff] drop-shadow-[0_0_18px_rgba(36,107,255,0.18)] transition duration-500 group-hover:text-[#246bff]" />
      </div>

  

      <h3 className="relative font-display text-3xl font-black leading-tight text-slate-950">
        {service.title}
      </h3>

      <p className="relative mx-auto mt-4 max-w-xs font-body text-lg leading-relaxed text-slate-600">
        {service.description}
      </p>

      <div className="relative mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-[#9cc7ff] to-[#246bff] opacity-70 transition duration-500 group-hover:w-24 group-hover:opacity-100" />
    </div>
  );
}

function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050b14] via-[#07111f] to-[#0b1f3a]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-[#246bff]/25 blur-3xl" />
      <div className="absolute bottom-[15%] right-[10%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap");

        .font-display {
          font-family: "Sora", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .font-body {
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes logoScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes serviceFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes serviceShine {
          from {
            transform: translateX(-120%) rotate(12deg);
          }
          to {
            transform: translateX(180%) rotate(12deg);
          }
        }

        .animate-logoScroll {
          animation: logoScroll 28s linear infinite;
        }

        .animate-logoScroll:hover {
          animation-play-state: paused;
        }

        .service-card {
          animation: serviceFloat 5s ease-in-out infinite;
        }

        .service-card::after {
          content: "";
          position: absolute;
          inset: -40% auto -40% 0;
          width: 90px;
          background: linear-gradient(90deg, transparent, rgba(36,107,255,0.16), transparent);
          transform: translateX(-120%) rotate(12deg);
          transition: opacity 0.3s ease;
          opacity: 0;
        }

        .service-card:hover::after {
          opacity: 1;
          animation: serviceShine 0.9s ease forwards;
        }
      `}</style>

      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <TechBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-3xl  sm:h-40 sm:w-40">
              <Image
                src="/logo.jpeg"
                alt="C8 Tech"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>

            <p className="font-body mb-5 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#b8d8ff] backdrop-blur">
              SOLUCIONES DIGITALES A MEDIDA
            </p>

            <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Impulsamos la eficiencia y el crecimiento de tu empresa con tecnología.
            </h1>

            <p className="font-body mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              Conectamos ventas, procesos y datos a través de soluciones en e-commerce, automatización y BI.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="#contacto"
                className="font-body inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-black text-[#07111f] shadow-2xl shadow-black/40 transition hover:-translate-y-1 hover:bg-[#dbeafe]"
              >
                <strong className="text-[#246bff] flex flex-row items-center gap-3">Quiero automatizar <ArrowRight className="h-5 w-5" /></strong>
                
              </Link>

              <Link
                href="#casos"
                className="font-body inline-flex items-center justify-center rounded-2xl border border-white/20 bg-[#246bff] px-8 py-5 text-lg font-black text-white backdrop-blur transition hover:-translate-y-1 "
              >
                <strong>Ver trabajos</strong>
              </Link>
            </div>
          </div>

          <ClientCarousel />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111f] px-4 py-24 sm:px-6">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#246bff]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-body text-sm font-bold uppercase tracking-[0.22em] text-[#246bff]">
              ¿Qué hacemos?
            </p>
            <h2 className="font-display mt-3 text-4xl font-black text-white md:text-5xl">
              Menos manual. Más automático. Más rentable.
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="bg-[#07111f] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="font-body text-sm font-bold uppercase tracking-[0.22em] text-[#246bff]">
                Clientes
              </p>
              <h2 className="font-display mt-3 text-4xl font-black text-white md:text-5xl">
                Trabajos realizados
              </h2>
            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden bg-gradient-to-br from-[#050b14] via-[#07111f] to-[#0b1f3a] px-4 py-24 sm:px-6"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#246bff] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            ¿Qué proceso quieres simplificar?
          </h2>

          <p className="font-body mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">
            Cuéntanos qué haces manualmente. Te decimos cómo automatizarlo.
          </p>

          <Link
            href="https://wa.me/51949161510?text=Hola%2C%20quiero%20automatizar%20un%20proceso"
            className="font-body mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-black text-[#07111f] shadow-2xl shadow-black/40 transition hover:-translate-y-1 hover:bg-[#dbeafe] sm:w-auto"
          >
            <strong className="text-[#246bff] flex flex-row items-center gap-3">
              Contactar ahora
            <ArrowRight className="h-5 w-5" />
            </strong>
          </Link>
        </div>
      </section>

      <SiteFooter />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
