"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import type { Project, ProjectCategory } from "../lib/content";

type Props = {
  projects: Project[];
};

const filters: (ProjectCategory | "All")[] = [
  "All",
  "Data",
  "ML",
  "Automation",
  "Web",
];

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
                ? "border-transparent bg-white text-black"
                : "border-white/15 text-zinc-300 hover:border-white/40"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <article className="glass flex h-full flex-col gap-6 rounded-3xl p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-400">
                <span>{project.label}</span>
                <span>{project.categories.join(" / ")}</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-zinc-300">
                  {project.summary}
                </p>
              </div>
              <div className="grid gap-3 text-sm text-zinc-400">
                <p>
                  <span className="text-white">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p>
                  <span className="text-white">Approach:</span>{" "}
                  {project.approach}
                </p>
                <p>
                  <span className="text-white">Outcome:</span>{" "}
                  {project.outcome}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs text-zinc-400">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-2 text-sm font-semibold text-[#35f2c6]">
                {project.slug === "excellia-ubo" ? (
                  <Link href="/projects/excellia-ubo">Open case study </Link>
                ) : project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live product
                  </a>
                ) : (
                  <span>Case details available on request</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
