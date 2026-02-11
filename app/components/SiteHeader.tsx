"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/50 bg-white/95 shadow-sm backdrop-blur-lg"
          : "border-[#0D3B66]/20 bg-gradient-to-r bg-gradient-to-br from-[#051829]  to-[#051824] shadow-lg backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-6 py-4 transition-all duration-300 sm:px-10 lg:px-12">
        <Link href="/">
          <span
            className={`font-[var(--font-space)] text-lg font-black tracking-[0.2em] transition-colors ${
              isScrolled
                ? "text-slate-900 hover:text-blue-700"
                : "text-white hover:text-blue-200"
            }`}
          >
            <span className="inline sm:hidden">NCC</span>
            <span className="hidden text-sm font-black tracking-[0.2em] sm:inline">NCC Technology</span>
          </span>
        </Link>

        <a
          href="mailto:nicontrerasc8@gmail.com?subject=Consulta%20sobre%20Servicios%20NCC%20Technology"
          className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
            isScrolled
              ? "bg-slate-200 text-slate-900 hover:bg-slate-200"
              : "bg-white text-[#0A2E5C] hover:bg-blue-50"
          }`}
        >
          Agendar Consultoria
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </header>
  );
}
