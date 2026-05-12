"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

const projects = [
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

const services = [
  {
    title: "Reportes automáticos",
    description: "Deja de armar Excel a mano. Te dejamos dashboards claros.",
    icon: BarChart3,
    stat: "BI",
    glow: "from-cyan-300/30 to-[#246bff]/30",
  },
  {
    title: "Procesos automáticos",
    description: "Automatizamos correos, tareas repetitivas y flujos internos.",
    icon: Zap,
    stat: "Flow",
    glow: "from-[#246bff]/35 to-cyan-300/20",
  },
  {
    title: "Webs que venden",
    description: "Creamos tiendas y páginas simples para captar clientes.",
    icon: ShoppingCart,
    stat: "Web",
    glow: "from-cyan-200/25 to-[#246bff]/35",
  },
];

function LogoBox({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-4 flex h-40 min-w-[300px] items-center justify-center border border-cyan-200/12 bg-[#07183f]/70 px-9 py-5 shadow-xl shadow-[#06112c]/40 backdrop-blur">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={300}
          height={180}
          className="max-h-32 w-full rounded-lg object-contain brightness-110 contrast-110"
        />
      ) : (
        <span className="text-center font-display text-4xl font-black text-white">
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
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#06112c] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#06112c] to-transparent" />

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
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl border border-cyan-200/15 bg-[#07183f] p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <div className="mb-6 flex items-center gap-5 pr-10">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/12 bg-[#06112c] p-4">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.name}
                width={120}
                height={80}
                className="max-h-20 w-auto rounded-lg object-contain brightness-110 contrast-110"
              />
            ) : (
              <span className="text-center font-display text-xl font-black text-white">
                {project.name}
              </span>
            )}
          </div>

          <div>
            <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              {project.service}
            </p>
            <h2 className="font-display mt-1 text-3xl font-bold text-white">
              {project.name}
            </h2>
            <p className="font-body mt-2 text-[#c9d8f2]">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl bg-[#06112c]/70 p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Problema
            </p>
            <p className="font-body mt-2 text-lg text-white">
              {project.problem}
            </p>
          </div>

          <div className="rounded-2xl bg-[#06112c]/70 p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Solución
            </p>
            <p className="font-body mt-2 text-lg text-white">
              {project.solution}
            </p>
          </div>

          <div className="rounded-2xl bg-[#06112c]/70 p-5">
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Resultado
            </p>

            <div className="mt-3 grid gap-3">
              {project.results.map((result) => (
                <div key={result} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="font-body">{result}</span>
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
            className="font-body mt-6 inline-flex items-center gap-2 rounded-xl bg-[#246bff] px-5 py-3 font-bold text-white transition hover:bg-[#1f57d6]"
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
      className="group rounded-3xl border border-cyan-200/12 bg-[#07183f]/80 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#0a1c4d]"
    >
      <div className="mb-7 flex min-h-52 items-center justify-center">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.name}
            width={380}
            height={260}
            className="aspect-[16/9] max-h-48 w-full rounded-lg object-contain brightness-110 contrast-110 transition duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="text-center font-display text-5xl font-black text-white">
            {project.name}
          </span>
        )}
      </div>

      <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
        {project.service}
      </p>

      <h3 className="font-display mt-2 text-2xl font-bold text-white">
        {project.name}
      </h3>

      <p className="font-body mt-3 text-base leading-relaxed text-[#c9d8f2]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 font-body font-bold text-white">
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
      className="service-card group relative overflow-hidden rounded-[2rem] border border-cyan-200/12 bg-[#07183f]/80 p-8 text-center shadow-2xl shadow-[#06112c]/50"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={`absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gradient-to-br ${service.glow} blur-3xl transition duration-500 group-hover:scale-125 group-hover:opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,216,242,0.10),transparent_48%)] opacity-70" />

      <div className="relative mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-cyan-200/20 bg-[#06112c]/80 shadow-2xl shadow-[#246bff]/20 transition duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-cyan-200/40">
        <div className="absolute inset-3 rounded-[1.35rem] bg-[#246bff]/10 transition group-hover:bg-cyan-300/10" />
        <Icon className="relative h-14 w-14 text-cyan-100 drop-shadow-[0_0_18px_rgba(201,216,242,0.45)] transition duration-500 group-hover:text-white" />
      </div>

      <p className="relative mx-auto mb-4 inline-flex rounded-full border border-cyan-200/15 bg-cyan-300/10 px-4 py-1 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
        {service.stat}
      </p>

      <h3 className="relative font-display text-3xl font-black leading-tight text-white">
        {service.title}
      </h3>

      <p className="relative mx-auto mt-4 max-w-xs font-body text-lg leading-relaxed text-[#c9d8f2]">
        {service.description}
      </p>

      <div className="relative mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-200 to-[#246bff] opacity-70 transition duration-500 group-hover:w-24 group-hover:opacity-100" />
    </div>
  );
}

function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#06112c] via-[#07183f] to-[#0a1c4d]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(59 130 246 / 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59 130 246 / 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-[#246bff]/15 blur-3xl" />
      <div className="absolute bottom-[15%] right-[10%] h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-[#06112c]">
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
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
            <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-3xl border border-white/10 bg-[#06112c] shadow-2xl sm:h-40 sm:w-40">
              <Image
                src="/logo.jpeg"
                alt="C8 Tech"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>

            <p className="font-body mb-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              Automatización para empresas
            </p>

            <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Simplificamos tu operación.
            </h1>

            <p className="font-body mt-6 max-w-2xl text-xl leading-relaxed text-[#c9d8f2] md:text-2xl">
              Automatizamos reportes, procesos y sistemas para que tu equipo trabaje más rápido.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="#contacto"
                className="font-body inline-flex items-center justify-center gap-3 rounded-2xl bg-[#246bff] px-8 py-5 text-lg font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#1f57d6]"
              >
                Quiero automatizar
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#casos"
                className="font-body inline-flex items-center justify-center rounded-2xl border border-cyan-200/20 bg-white/5 px-8 py-5 text-lg font-black text-white transition hover:bg-white/10"
              >
                Ver trabajos
              </Link>
            </div>
          </div>

          <ClientCarousel />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06112c] px-4 py-24 sm:px-6">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#246bff]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-body text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              Qué hacemos
            </p>
            <h2 className="font-display mt-3 text-4xl font-black text-white md:text-5xl">
              Menos manual. Más automático.
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="bg-[#07183f] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="font-body text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
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
        className="relative overflow-hidden bg-gradient-to-br from-[#06112c] via-[#0a1c4d] to-[#06112c] px-4 py-24 sm:px-6"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#246bff] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-300 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            ¿Qué proceso quieres simplificar?
          </h2>

          <p className="font-body mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#c9d8f2]">
            Cuéntanos qué haces manualmente. Te decimos cómo automatizarlo.
          </p>

          <Link
            href="mailto:nicontrerasc8@gmail.com?subject=Quiero automatizar un proceso"
            className="font-body mt-10 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#246bff] px-8 py-5 text-lg font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#1f57d6] sm:w-auto"
          >
            Contactar ahora
            <ArrowRight className="h-5 w-5" />
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
