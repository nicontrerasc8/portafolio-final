"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Gauge,
  Layers3,
  LineChart,
  Mail,
  MousePointerClick,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const clients = [
  { name: "Grupo Romero", logo: "/logo-gruporomero.jpg" },
  { name: "CIDELSA", logo: "/cidelsa.png" },
  { name: "Subway", logo: "/subway.png" },
  { name: "TMF Group", logo: "/tmf.png" },
  { name: "PTC", logo: "/logo-ptc.png" },
  { name: "GOXA", logo: "/goxa.png" },
  { name: "Excellia", logo: "/excellia.png" },
  { name: "El Pez Nuestro", logo: "/elpez.png" },
];

const projects = [
  {
    id: "corporacion-grupo-romero",
    service: "Legaltech",
    name: "Grupo Romero",
    logo: "/logo-gruporomero.jpg",
    description:
      "Plataforma para automatizar la determinación del beneficiario final.",
    problem:
      "El área legal tributaria trabajaba el análisis manualmente en Excel, con procesos que podían tomar hasta una semana por empresa.",
    solution:
      "Digitalizamos el flujo, aplicamos reglas de análisis y redujimos tareas repetitivas dentro de un proceso tributario crítico.",
    results: [
      "Tiempo promedio reducido a 15 minutos por empresa",
      "Menor riesgo de error en un proceso sensible",
      "Más control, trazabilidad y operación legal digitalizada",
    ],
    tags: ["Legaltech", "Tributario", "Automatización"],
  },
  {
    id: "cidelsa",
    service: "CRM",
    name: "CIDELSA",
    logo: "/cidelsa.png",
    description: "CRM comercial a medida, compatible con el ERP de Cidelsa.",
    problem:
      "La actividad comercial necesitaba visualizarse de forma clara y ordenada para distintos niveles de gestión.",
    solution:
      "Creamos un CRM integrado al ERP, con carga simple de información y vistas adaptadas por rol.",
    results: [
      "Mejor visibilidad comercial por equipo",
      "Seguimiento más ordenado de ventas",
      "Decisiones más ágiles con información centralizada",
    ],
    tags: ["CRM", "ERP", "Ventas"],
  },
  {
    id: "subway",
    service: "Dashboard",
    name: "Subway",
    logo: "/subway.png",
    description:
      "Dashboard comercial y operativo para las tiendas Subway de Gastrobiz en Lima.",
    problem:
      "La operación necesitaba monitorear 7 sucursales desde una misma plataforma.",
    solution:
      "Desarrollamos una solución de visualización que centraliza datos por tienda y facilita el seguimiento diario.",
    results: [
      "Mayor control operativo por sucursal",
      "Información comercial centralizada",
      "Mejor seguimiento del desempeño de cada tienda",
    ],
    tags: ["Dashboard", "Retail", "Sucursales"],
  },
  {
    id: "tmf-group",
    service: "Automatización",
    name: "TMF Group",
    logo: "/tmf.png",
    description:
      "Automatización inteligente de correos para derivar comunicaciones al responsable correcto.",
    problem:
      "El reenvío de correos hacia el personal de cada cuenta consumía tiempo y generaba fricción diaria.",
    solution:
      "Implementamos un flujo en Power Automate que ordena, distribuye y deriva comunicaciones.",
    results: [
      "Menos trabajo manual en correos",
      "Mayor trazabilidad interna",
      "Gestión operativa más rápida y ordenada",
    ],
    tags: ["Power Automate", "Correos", "Procesos"],
  },
  {
    id: "ptc",
    service: "IA",
    name: "PTC",
    logo: "/logo-ptc.png",
    description:
      "Automatización con IA para acelerar la creación de propuestas comerciales.",
    problem:
      "El equipo invertía tiempo en tareas repetitivas para estructurar y estandarizar propuestas.",
    solution:
      "Creamos una solución con Gemini estructurado para automatizar el flujo de documentos comerciales.",
    results: [
      "Propuestas comerciales listas en menos tiempo",
      "Documentos mejor organizados",
      "Menos trabajo manual",
    ],
    tags: ["IA", "Gemini", "Propuestas"],
  },
  {
    id: "goxa",
    service: "E-commerce",
    name: "GOXA",
    logo: "/goxa.png",
    description:
      "E-commerce con catálogo digital y carrito conectado directamente a WhatsApp.",
    problem:
      "Goxa necesitaba mostrar más de 30 productos y convertir interés en pedidos rápidos.",
    solution:
      "Diseñamos una tienda online donde los usuarios exploran productos, arman su carrito y envían el pedido por WhatsApp.",
    results: [
      "Catálogo digital con más de 30 productos",
      "Compra simple conectada a WhatsApp",
      "Tienda enfocada en vender más",
    ],
    link: "https://goxa.pe",
    tags: ["E-commerce", "WhatsApp", "Catálogo"],
  },
];

const painPoints = [
  {
    title: "Reportes que toman horas",
    description:
      "Tu equipo consolida datos de múltiples fuentes a mano. El resultado llega tarde y nadie confía al 100% en los números.",
    icon: ClipboardList,
  },
  {
    title: "Sistemas desconectados",
    description:
      "Ventas, inventario, ERP y operaciones no conversan entre sí. Cada sistema nuevo termina creando más trabajo.",
    icon: Layers3,
  },
  {
    title: "Procesos con fricción",
    description:
      "Tareas que podrían ejecutarse en segundos dependen de correos, archivos y seguimiento manual.",
    icon: MousePointerClick,
  },
];

const services = [
  {
    title: "Reportes automáticos",
    description:
      "Dashboards claros, conectados a tus fuentes y listos para decidir sin copiar ni pegar.",
    icon: BarChart3,
    features: ["BI conectado", "Alertas automáticas", "Reportes recurrentes"],
  },
  {
    title: "Procesos automáticos",
    description:
      "Flujos que se ejecutan solos, reducen errores y liberan horas operativas cada semana.",
    icon: Zap,
    features: ["RPA", "Power Automate", "Integraciones"],
  },
  {
    title: "E-commerce",
    description:
      "Tiendas, catálogos y sistemas web integrados con ventas, pedidos y canales de atención.",
    icon: ShoppingCart,
    features: ["Catálogo digital", "WhatsApp", "Panel administrativo"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu operación y ubicamos dónde se pierde más tiempo o margen.",
    icon: Search,
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Definimos una solución exacta, sin módulos innecesarios ni licencias de más.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos en ciclos cortos, con avances visibles y feedback frecuente.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Capacitamos, medimos impacto y acompañamos la adopción del equipo.",
    icon: ShieldCheck,
  },
];

const differentiators = [
  {
    value: "-70%",
    label: "menos tiempo en tareas manuales",
  },
  {
    value: "+30",
    label: "proyectos digitales entregados",
  },
  {
    value: "15 min",
    label: "para procesos que antes tomaban días",
  },
  {
    value: "100%",
    label: "soluciones hechas a medida",
  },
];

function LogoBox({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-3 flex h-24 min-w-56 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white px-6 py-4 shadow-sm shadow-blue-100/70 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 sm:h-28 sm:min-w-64 sm:px-8">
      <Image
        src={logo}
        alt={name}
        width={260}
        height={130}
        className="max-h-16 w-auto object-contain sm:max-h-20"
      />
    </div>
  );
}

function ClientCarousel() {
  const repeatedClients = [...clients, ...clients];

  return (
    <div className="relative mt-12 overflow-hidden border-y border-blue-100 bg-white/80 py-8">
      <div className="mx-auto mb-5 max-w-7xl px-6 text-center text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
        Empresas que ya trabajan con soluciones C8
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
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
      if (event.key === "Escape") onClose();
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
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/35 p-2 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[calc(100dvh-1rem)] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-blue-100 bg-white p-5 shadow-2xl shadow-slate-900/20 sm:max-h-[calc(100dvh-2rem)] sm:rounded-3xl sm:p-7"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-blue-100 bg-white p-2 text-slate-700 transition hover:bg-blue-50"
          aria-label="Cerrar"
          type="button"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex flex-col gap-4 pr-10 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50/60 p-3">
            <Image
              src={project.logo}
              alt={project.name}
              width={120}
              height={80}
              className="max-h-14 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246bff]">
              {project.service}
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 text-3xl font-black leading-tight text-slate-950"
            >
              {project.name}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-slate-600">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ["Problema", project.problem],
            ["Solución", project.solution],
          ].map(([label, text]) => (
            <div key={label} className="rounded-2xl bg-[#f4f8ff] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246bff]">
                {label}
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-800">
                {text}
              </p>
            </div>
          ))}

          <div className="rounded-2xl bg-[#f4f8ff] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246bff]">
              Resultado
            </p>
            <div className="mt-3 grid gap-3">
              {project.results.map((result) => (
                <div key={result} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#246bff]" />
                  <span className="text-sm leading-relaxed text-slate-800 sm:text-base">
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
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#246bff] px-5 py-3 font-bold text-white transition hover:bg-[#1f57d6] sm:w-auto"
          >
            Ver sitio
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#246bff]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#246bff]" />
      {children}
    </p>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <style jsx global>{`
        @keyframes logoScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-logoScroll {
          animation: logoScroll 30s linear infinite;
        }

        .animate-logoScroll:hover {
          animation-play-state: paused;
        }

        .float-card {
          animation: floatUp 5.5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(36,107,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(36,107,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(36,107,255,0.16),transparent_62%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center text-center">
          <div className="mb-8 flex items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-xl shadow-blue-100/70">
            <Image
              src="/logo.jpeg"
              alt="C8 Tech"
              width={102}
              height={102}
              className="h-14 w-14 rounded-xl object-cover"
              priority
            />
   
          </div>

          <SectionLabel>Soluciones digitales a medida</SectionLabel>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Menos trabajo manual. Más visibilidad.{" "}
            <span className="bg-gradient-to-r from-[#246bff] to-[#00aee8] bg-clip-text text-transparent">
              Más eficiencia.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Construimos tecnología a medida para conectar datos, automatizar
            procesos y crear canales digitales que simplifican la operación de
            tu empresa.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="https://wa.me/51949161510?text=Hola%2C%20quiero%20automatizar%20un%20proceso"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#246bff] px-7 py-4 text-base font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#1f57d6]"
            >
              Agendar reunión
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#casos"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-blue-100 bg-white px-7 py-4 text-base font-black text-[#246bff] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100"
            >
              Ver casos
              <LineChart className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>

      <ClientCarousel />

      <section className="bg-[#f4f8ff] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>El problema que resolvemos</SectionLabel>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Las empresas pierden tiempo y dinero en procesos manuales.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Cada hora invertida en tareas repetitivas es una hora que tu
              equipo no usa para vender, mejorar la operación o tomar mejores
              decisiones.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {painPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm shadow-blue-100/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#246bff] via-[#1452cc] to-[#00aee8] p-8 text-center text-white shadow-xl shadow-blue-200">
            <h3 className="text-2xl font-black">
              Hay una mejor manera de operar.
            </h3>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-white/85">
              Con la tecnología correcta, lo que hoy toma 4 horas puede
              hacerse en minutos, automáticamente y con trazabilidad.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionLabel>Qué hacemos</SectionLabel>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Tres formas concretas de hacer tu operación más rentable.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="float-card rounded-3xl border border-blue-100 bg-white p-8 shadow-lg shadow-blue-100/70 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100"
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#246bff]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#246bff]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef4ff] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Un proceso claro para entregar valor desde las primeras semanas.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/80"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-black text-[#246bff]">
                      {step.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#246bff]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="casos" className="px-5 pb-24 pt-12 sm:px-8 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionLabel>Casos de éxito</SectionLabel>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                Empresas que ya operan diferente.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 lg:justify-self-end">
              Trabajamos con equipos que necesitaban eliminar trabajo manual,
              ordenar datos y convertir tecnología en impacto operativo real.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl border border-blue-100 bg-white p-6 text-left shadow-sm shadow-blue-100/80 transition hover:-translate-y-1 hover:border-[#246bff]/40 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className="mb-5 flex h-32 items-center justify-center rounded-xl bg-[#f8fbff] p-5">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={280}
                    height={140}
                    className="max-h-24 w-auto object-contain transition group-hover:scale-105"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#246bff]">
                  {project.service}
                </p>
                <h3 className="mt-2 text-xl font-black text-slate-950">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#246bff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                  Ver caso
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#246bff] via-[#1452cc] to-[#00aee8]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            <Mail className="h-4 w-4" />
            Listo para dar el salto
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Tu equipo merece trabajar en lo que realmente importa.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Cuéntanos el proceso que quieres simplificar y te mostramos cómo lo
            automatizaríamos, sin compromiso y sin tecnicismos.
          </p>
          <Link
            href="https://wa.me/51949161510?text=Hola%2C%20quiero%20automatizar%20un%20proceso"
            className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-black text-blue shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto"
          >
            <span className="text-black inline-flex w-full gap-3">
              Contactar ahora
              <ArrowRight/>
            </span>
           
          </Link>
        </div>
      </section>

      <footer className="border-t border-blue-100 bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 C8 Tech. Soluciones digitales a medida.</p>
          <div className="flex flex-wrap gap-4 font-semibold">
            <a
              href="https://wa.me/51949161510"
              className="text-[#246bff] hover:text-[#1f57d6]"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/nicolascontrerascastellanoo/"
              className="text-[#246bff] hover:text-[#1f57d6]"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
