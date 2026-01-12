import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import Reveal from "../components/Reveal";
import ProjectFilters from "./ProjectFilters";
import { allProjects } from "../lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies across enterprise data systems, ML forecasting, automation modules, and product delivery.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Portfolio
            </p>
            <h1 className="section-title text-4xl font-semibold text-white">
              Data + product systems with real-world impact.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-300">
              Each project ships with clear ownership, technical depth, and a
              measurable outcome. Filter by focus area to explore.
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <ProjectFilters projects={allProjects} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
