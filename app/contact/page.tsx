import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contacto | C8 Tech",
  description:
    "Conversemos sobre soluciones de datos sencillas, automatizaciones y entregas web rápidas.",
};

const copy = {
  kicker: "Contacto",
  title: "¿Listos para lanzar tu producto de datos?",
  description:
    "Trabajamos con equipos que necesitan claridad, velocidad y automatizaciones que se mantienen solas. Comparte tu reto y trazaremos el camino completo.",
  whatsapp: "WhatsApp: +51 949 161 510",
  linkLabel: "LinkedIn",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-16 md:px-10 lg:px-12">
        <Reveal>
          <div className="glass rounded-3xl p-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
              {copy.kicker}
            </p>
            <h1 className="section-title mt-4 text-4xl font-semibold text-white">
              {copy.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/51949161510?text=Hola%2C%20quiero%20conversar%20sobre%20una%20solucion%20digital"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#35f2c6]"
              >
                {copy.whatsapp}
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                {copy.linkLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
