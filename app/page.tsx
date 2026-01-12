"use client";
import Link from "next/link";
import Reveal from "./components/Reveal";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { featuredProjects } from "./lib/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <SiteHeader />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="max-w-4xl">
              {/* Status Badge */}
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    Open to opportunities
                  </span>
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={0.2}>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                  Hi, I'm Nicolás.
                  <br />
                  I build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                    tools that work
                  </span>
                  .
                </h1>
              </Reveal>

              {/* Intro */}
              <Reveal delay={0.3}>
                <div className="space-y-4 text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
                  <p>
                    I'm a systems & industrial engineer who fell in love with coding. I specialize in
                    building data systems and internal tools that actually make people's jobs easier.
                  </p>
                  <p>
                    My work is about <strong className="text-gray-900 dark:text-white">solving real problems</strong>—automating
                    the boring stuff, turning messy data into clear insights, and building interfaces
                    people don't hate using.
                  </p>
                </div>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link
                    href="#projects"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900  dark:text-gray-900 rounded-lg font-medium hover:scale-105 transition-all"
                  >
                    See my work
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </Reveal>

              {/* Skills tags */}
              <Reveal delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {["Python", "React", "SQL", "Data Pipelines", "Automation", "Next.js"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* SVG Animado al costado */}
            <Reveal delay={0.6}>
              <div className="hidden lg:block relative">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Círculos orbitales */}
                  <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                    <circle
                      cx="200"
                      cy="200"
                      r="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-blue-500/20 dark:text-blue-400/20"
                    />
                    <circle
                      cx="200"
                      cy="50"
                      r="8"
                      fill="currentColor"
                      className="text-blue-500 dark:text-blue-400"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 200 200"
                        to="360 200 200"
                        dur="20s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  <g className="animate-[spin_15s_linear_infinite_reverse]" style={{ transformOrigin: '200px 200px' }}>
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-cyan-500/20 dark:text-cyan-400/20"
                    />
                    <circle
                      cx="300"
                      cy="200"
                      r="6"
                      fill="currentColor"
                      className="text-cyan-500 dark:text-cyan-400"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 200 200"
                        to="-360 200 200"
                        dur="15s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  {/* Hexágono central */}
                  <g className="animate-pulse">
                    <polygon
                      points="200,130 245,155 245,205 200,230 155,205 155,155"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <polygon
                      points="200,145 235,165 235,195 200,215 165,195 165,165"
                      fill="currentColor"
                      className="text-blue-500/10 dark:text-blue-400/10"
                    />
                  </g>

                  {/* Puntos flotantes */}
                  <circle cx="100" cy="100" r="3" fill="currentColor" className="text-blue-400 dark:text-blue-300">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="120" r="3" fill="currentColor" className="text-cyan-400 dark:text-cyan-300">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="120;110;120" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="280" r="3" fill="currentColor" className="text-blue-500 dark:text-blue-400">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="280;270;280" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="300" r="3" fill="currentColor" className="text-cyan-500 dark:text-cyan-400">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="4.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="300;290;300" dur="4.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Líneas de conexión animadas */}
                  <line x1="200" y1="200" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-blue-500/20 dark:text-blue-400/20">
                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="200" x2="300" y2="120" stroke="currentColor" strokeWidth="1" className="text-cyan-500/20 dark:text-cyan-400/20">
                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="200" x2="80" y2="280" stroke="currentColor" strokeWidth="1" className="text-blue-500/20 dark:text-blue-400/20">
                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.5s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: `
          linear-gradient(to right, #000 1px, transparent 1px),
          linear-gradient(to bottom, #000 1px, transparent 1px)
        `,
              backgroundSize: '4rem 4rem'
            }}
          ></div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Header mejorado */}
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Featured Work
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Here's some of the work I've done. Most of it involves taking manual processes
                and turning them into automated systems.
              </p>
            </div>
          </Reveal>

          {/* Projects list mejorado */}
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.1 * index}>
                <Link href={`/projects/${project.slug}`}>
                  <article className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Efecto de brillo al hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative grid lg:grid-cols-3 gap-8">
                      {/* Left: Title & tags */}
                      <div className="space-y-4">
                        {/* Número del proyecto */}
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 font-bold text-sm border border-blue-500/20">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.categories.slice(0, 2).map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-800/50"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                              {cat}
                            </span>
                          ))}
                        </div>

                        {/* Título */}
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                            {project.name}
                            <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {project.label}
                          </p>
                        </div>
                      </div>

                      {/* Right: Content mejorado */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Descripción */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                          {project.summary}
                        </p>

                        {/* Problem & Result con iconos */}
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Problem */}
                          <div className="relative p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 dark:bg-red-400/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide block mb-1">
                                  Problem
                                </span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                  {project.problem}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Result */}
                          <div className="relative p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center">
                                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide block mb-1">
                                  Result
                                </span>
                                <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                                  {project.outcome}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* View details mejorado */}
                        <div className="pt-2">
                          <div className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                            <span>View case study</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Indicador de hover */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Ver más mejorado */}
          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span>View all projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </Reveal>

    
        </div>
      </section>

      {/* ABOUT/APPROACH SECTION */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  How I work
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"></div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-12">
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                  I come from a systems & industrial engineering background, which means I think a lot about
                  <strong className="text-gray-900 dark:text-white"> processes, efficiency, and systems</strong>.
                  When I build something, I'm thinking about how it fits into the bigger picture.
                </p>

                {/* Grid de principios con iconos */}
                <div className="grid md:grid-cols-2 gap-6 py-8">
                  {/* Card 1: Usefulness */}
                  <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          I focus on usefulness
                          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          The best tool is one people actually use. I design with the end user in mind,
                          whether that's a warehouse manager or a data analyst.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Scale */}
                  <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          I build for scale
                          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          What works for 100 records should work for 100,000. I think about performance
                          and maintainability from day one.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Clarity */}
                  <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          I value clarity
                          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Clean code, clear documentation, simple interfaces. Complexity should be
                          hidden from users, not from the codebase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Automation */}
                  <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          I automate relentlessly
                          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          If something takes more than 5 minutes and happens more than once a week,
                          it should probably be automated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to action final */}
                <div className="relative bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 dark:from-blue-400/10 dark:via-cyan-400/10 dark:to-blue-400/10 p-8 rounded-2xl border border-blue-500/20 dark:border-blue-400/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-gray-900 dark:text-white font-semibold mb-2">
                        Currently interested in:
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Building internal tools and data platforms that help companies make better decisions faster.
                        If you're working on something in this space, I'd love to hear about it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS - más honestos */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl">
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  50k+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Records processed monthly across systems I've built
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  1,500+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Active users on tools I've developed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  30+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Custom modules built for automation
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Top 10%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Academic ranking in engineering program
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>



      <SiteFooter />
    </div>
  );
}