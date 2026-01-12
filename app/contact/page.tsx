import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about data systems, automation, and product delivery.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10 lg:px-12">
        <Reveal>
          <div className="glass rounded-3xl p-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              Contact
            </p>
            <h1 className="section-title mt-4 text-4xl font-semibold text-white">
              Ready to ship your data product?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300">
              I partner with teams who need secure, scalable data systems and
              web delivery. Share your goals and I will map the path from data
              ingestion to decision-ready output.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@nicolascontreras.dev"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#35f2c6]"
              >
                hello@nicolascontreras.dev
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
