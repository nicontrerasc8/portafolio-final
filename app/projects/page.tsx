import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ProjectFilters from "./ProjectFilters";
import { getAllProjects } from "../lib/content";

export const metadata: Metadata = {
  title: "Proyectos | NCC Technology",
  description:
    "Casos en los que transformamos procesos manuales en automatizaciones simples y listas para operar.",
};

const copy = {
  kicker: "Portafolio",
  title: "Sistemas de datos y automatización listos para usar",
  description:
    "Filtra por foco y explorar cómo entregamos procesos operativos con claridad y velocidad.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

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
            <p className="max-w-2xl text-lg text-zinc-300">
              {copy.description}
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <ProjectFilters projects={projects} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
