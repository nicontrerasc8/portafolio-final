import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { getIndustries, getStrengths } from "../lib/content";
import { Brain, Database, Layers, LineChart, Factory } from "lucide-react";

function DecorativeGrid() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Sobre NCC Technology",
  description: "Perfil, fortalezas y enfoque de NCC Technology en datos y automatización.",
};

const copy = {
  kicker: "Sobre NCC Technology",
  titleLine1: "Transformamos datos y producto",
  titleLine2: "en decisiones y automatizaciones sin fricción",
  description:
    "NCC Technology une datos, automatización y entrega web para que los equipos puedan actuar con claridad hoy mismo.",
  descriptionTwo:
    "Desde pipelines hasta interfaces, trabajamos como tu equipo interno para resolver tareas reales y liberar tiempo de valor.",
  ownership: "Responsabilidad completa del problema al resultado",
  strengthsTitle: "Fortalezas clave",
  industriesTitle: "Industrias donde ya trabajamos",
};

const icons = [Brain, Database, Layers, LineChart];

export default function AboutPage() {
  const strengths = getStrengths();
  const industries = getIndustries();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-20 md:px-10 lg:px-12">
        <Reveal>
          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <DecorativeGrid />

              <p className="relative text-xs uppercase tracking-[0.35em] text-zinc-400">
                {copy.kicker}
              </p>

              <h1 className="relative mt-4 text-4xl font-semibold leading-tight text-white">
                {copy.titleLine1}
                <br />
                {copy.titleLine2}
              </h1>

              <p className="relative mt-6 max-w-xl text-sm leading-relaxed text-zinc-300">
                {copy.description}
              </p>

              <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
                {copy.descriptionTwo}
              </p>

              <div className="relative mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                <Factory className="h-4 w-4" />
                {copy.ownership}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="section-title text-xl font-semibold text-white">
                  {copy.strengthsTitle}
                </h2>

                <ul className="mt-6 space-y-4">
                  {strengths.map((item, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <Icon className="mt-0.5 h-4 w-4 text-indigo-400" />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="section-title text-xl font-semibold text-white">
                  {copy.industriesTitle}
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {industries.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
