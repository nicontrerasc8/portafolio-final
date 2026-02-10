import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Excellia - Automatización UBO | NCC Technology",
  description:
    "Caso de NCC Technology: automatizamos la detección de Beneficiarios Finales con SQL recursivo y cumplimiento listo para auditoría.",
};

const copy = {
  kicker: "Caso confidencial",
  title: "Excellia - Automatización UBO",
  summary:
    "Automatizamos la determinación de Beneficiarios Finales para que auditorías y cumplimiento puedan actuar en segundos.",
  tags: [
    "PostgreSQL",
    "SQL recursivo",
    "Supabase RPC",
    "Seguridad a nivel de fila",
    "Cumplimiento",
  ],
  contextTitle: "Contexto y restricciones",
  contextItems: [
    "Las estructuras tenían múltiples niveles de propiedad indirecta entre entidades legales.",
    "Necesitábamos resultados explicables y listos para auditoría en cada paso.",
    "El flujo manual basado en hojas de cálculo tardaba días y era difícil de trazar.",
    "La información sensible debía mantenerse oculta del front-end y de las herramientas de depuración.",
  ],
  problemTitle: "Problema",
  problem:
    "Determinar Beneficiarios Finales era lento e impreciso, lo que generaba riesgos de cumplimiento en cada auditoría.",
  solutionTitle: "Solución",
  solution:
    "Construimos un flujo de automatización con SQL recursivo en la base de datos y resultados filtrados con reglas de acceso sólidas.",
  decisionsTitle: "Decisiones técnicas clave",
  decisions: [
    {
      label: "SQL recursivo en la base de datos:",
      detail:
        "Entregamos resultados deterministas y auditables sin exponer jerarquías intermedias al frontend.",
    },
    {
      label: "Capa RPC segura:",
      detail: "Centralizamos la lógica y evitamos acceso directo a tablas.",
    },
    {
      label: "Salvaguardas de rendimiento:",
      detail:
        "Indexamos relaciones, limitamos profundidad y preparamos vistas de auditoría.",
    },
    {
      label: "Seguridad desde el diseño:",
      detail:
        "Row Level Security de Supabase asegura que cada usuario solo vea lo que necesita.",
    },
  ],
  outcomeTitle: "Resultados e impacto",
  outcome:
    "Pasamos de días de análisis manual a segundos con trazabilidad total, cumpliendo auditorías sin exponer datos sensibles.",
  outcomeTags: [
    "Resultados deterministas",
    "Listo para auditoría",
    "Riesgo reducido",
    "Eficiencia operativa",
  ],
  footerNote:
    "Documentación técnica y métricas adicionales disponibles a solicitud.",
};

export default function ExcelliaPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              {copy.kicker}
            </p>

            <h1 className="section-title text-4xl font-semibold text-white">
              {copy.title}
            </h1>

            <p className="max-w-3xl text-base text-zinc-300">{copy.summary}</p>

            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
              {copy.tags.map((tag) => (
                <span key={tag} className="tag px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 glass rounded-3xl p-8">
            <h2 className="section-title text-2xl font-semibold text-white">
              {copy.contextTitle}
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {copy.contextItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="section-title text-2xl font-semibold text-white">
                {copy.problemTitle}
              </h2>

              <p className="mt-4 text-sm text-zinc-300">{copy.problem}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="section-title text-2xl font-semibold text-white">
                {copy.solutionTitle}
              </h2>

              <p className="mt-4 text-sm text-zinc-300">{copy.solution}</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 glass rounded-3xl p-8">
            <h2 className="section-title text-2xl font-semibold text-white">
              {copy.decisionsTitle}
            </h2>

            <ul className="mt-4 space-y-4 text-sm text-zinc-300">
              {copy.decisions.map((decision) => (
                <li key={decision.label}>
                  <strong className="text-white">{decision.label}</strong>{" "}
                  {decision.detail}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 glass rounded-3xl p-8">
            <h2 className="section-title text-2xl font-semibold text-white">
              {copy.outcomeTitle}
            </h2>

            <p className="mt-4 text-sm text-zinc-300">{copy.outcome}</p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
              {copy.outcomeTags.map((tag) => (
                <span key={tag} className="tag px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm text-zinc-400">{copy.footerNote}</p>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
