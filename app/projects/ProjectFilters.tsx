"use client";

import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import {
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "../lib/content";

type Props = {
  projects: Project[];
};

const filters: (ProjectCategory | "All")[] = [
  "All",
  "Sightflow",
  "AI",
  "Ecommerce",
];

const copy = {
  all: "Todo el portafolio",
  problem: "Problema",
  approach: "Enfoque",
  outcome: "Resultado",
  liveProduct: "Ver producto en vivo",
  caseDetails: "Puedo compartir más detalles a solicitud",
};

export default function ProjectFilters({ projects }: Props) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.categories.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              active === filter
                ? "border-indigo-500 bg-indigo-500/10 text-indigo-700"
                : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            {filter === "All" ? copy.all : categoryLabels[filter]}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <article className="glass flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 text-slate-600 shadow-xl">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>{project.label}</span>
                <span>
                  {project.categories
                    .map((category) => categoryLabels[category])
                    .join(" / ")}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  {project.summary}
                </p>
              </div>
              <div className="grid gap-3 text-sm text-slate-500">
                <p>
                  <span className="text-slate-900">{copy.problem}:</span>{" "}
                  {project.problem}
                </p>
                <p>
                  <span className="text-slate-900">{copy.approach}:</span>{" "}
                  {project.approach}
                </p>
                <p>
                  <span className="text-slate-900">{copy.outcome}:</span>{" "}
                  {project.outcome}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-slate-500">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-1 text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-2 text-sm font-semibold text-blue-600">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {copy.liveProduct}
                  </a>
                ) : (
                  <span className="text-slate-600">{copy.caseDetails}</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
