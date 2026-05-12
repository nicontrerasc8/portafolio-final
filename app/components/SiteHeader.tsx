"use client";
import Image from "next/image";
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
          ? "border-cyan-200/20 bg-[#06112c]/95 shadow-sm backdrop-blur-lg"
          : "border-cyan-300/10 bg-[#06112c]/85 shadow-lg backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-6 py-4 transition-all duration-300 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-cyan-200/20 bg-[#06112c] shadow-lg shadow-blue-950/40 sm:h-14 sm:w-14">
            <Image
              src="/logo.jpeg"
              alt="C8 Tech"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <span
            className={`font-[var(--font-space)] text-lg font-black tracking-[0.2em] transition-colors ${
              isScrolled
                ? "text-white hover:text-cyan-200"
                : "text-white hover:text-cyan-200"
            }`}
          >
            <span className="inline sm:hidden">C8</span>
          
          </span>
        </Link>

        <a
          href="mailto:nicontrerasc8@gmail.com?subject=Consulta%20sobre%20Servicios%20C8%20Tech"
          className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
            isScrolled
              ? "bg-white text-[#06112c] hover:bg-cyan-100"
              : "bg-white text-[#06112c] hover:bg-cyan-100"
          }`}
        >
          Agendar Consultoria
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </header>
  );
}
