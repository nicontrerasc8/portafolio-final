import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { experience } from "../lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Timeline of enterprise data systems, automation modules, and product delivery.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Experience
            </p>
            <h1 className="section-title text-4xl font-semibold text-white">
              Enterprise delivery with measurable outcomes.
            </h1>
          </div>
        </Reveal>
        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <div className="glass rounded-3xl p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {item.role}
                    </h2>
                    <p className="text-sm text-zinc-400">{item.company}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
