"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, FileSpreadsheet, Mail, RefreshCw, AlertCircle, BarChart3, Users, Zap, Settings, Smartphone, Building2, ShoppingCart, CheckCircle2, X, ExternalLink, TrendingUp, Shield, Clock } from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const projects = [
  {
    id: 'excellia',
    name: 'Excellia – Grupo Romero',
    logo: '/excellia.png',
    description: 'Automatización de la determinación del Beneficiario Final',
    challenge:
      'El área legal de Excellia realizaba la determinación del Beneficiario Final mediante análisis manual de estructuras societarias complejas, múltiples fuentes de información y cálculos extensos en Excel, lo que implicaba alto riesgo operativo y largos tiempos de trabajo.',
    solution:
      'Desarrollo de un sistema web a medida que automatiza completamente la determinación del Beneficiario Final, traduce los requerimientos normativos en un flujo digital y centraliza la información con trazabilidad e historial completo.',
    results: [
      'Reducción significativa del tiempo de análisis frente al proceso manual',
      'Eliminación de cálculos manuales y disminución del riesgo de error',
      'Reportes listos para auditorías y revisiones internas',
      'Mayor control, trazabilidad e histórico de declaraciones'
    ],
    tags: ['LegalTech', 'Compliance', 'Automatización de Procesos', 'Data Modeling']
  },
  {
    id: 'ludus',
    name: 'LUDUS',
    logo: '/ludus.png',
    description: 'Plataforma educativa gamificada',
    challenge:
      'Las instituciones educativas enfrentaban baja motivación estudiantil y poca visibilidad del progreso académico en tiempo real, con procesos pedagógicos poco adaptados al entorno digital.',
    solution:
      'Desarrollo de LUDUS, una plataforma educativa gamificada que combina contenido académico, evaluación automática y mecánicas de juego, permitiendo a estudiantes, docentes y líderes educativos monitorear el desempeño desde dashboards centralizados.',
    results: [
      'Mejora en el engagement y la constancia de los estudiantes',
      'Seguimiento académico en tiempo real',
      'Base tecnológica escalable para instituciones educativas'
    ],
    link: 'https://www.ludus-edu.com/',
    tags: ['EdTech', 'Gamificación', 'SaaS', 'Educación']
  },
  {
    id: 'un-ratito',
    name: 'Un Ratito con Dios',
    logo: '/unratitocondios.png',
    description: 'Plataforma digital de acompañamiento espiritual',
    challenge:
      'La comunidad necesitaba un espacio digital accesible para compartir reflexiones, contenidos espirituales y acompañamiento más allá de los canales tradicionales.',
    solution:
      'Desarrollo de una plataforma digital enfocada en la difusión de contenido espiritual y reflexivo, facilitando el acceso a mensajes, recursos y espacios de conexión para la comunidad.',
    results: [
      'Mayor alcance del contenido espiritual',
      'Acceso digital constante para la comunidad',
      'Centralización de contenidos y mensajes'
    ],
    link: 'https://lnk.bio/unratitocondios',
    tags: ['Plataforma de Contenidos', 'Comunidad', 'Experiencia Digital']
  },
  {
    id: 'goxa',
    name: 'GOXA',
    logo: '/goxa.png',
    description: 'E-commerce de productos naturales',
    challenge:
      'GOXA necesitaba digitalizar su canal de ventas y ordenar su operación comercial para mejorar la experiencia de compra y facilitar la gestión diaria del negocio.',
    solution:
      'Diseño e implementación del e-commerce de GOXA, una plataforma orientada a la venta de productos naturales que optimiza el flujo de compra y sienta las bases para una operación digital escalable.',
    results: [
      'Canal de ventas digital operativo',
      'Mejora en la experiencia de compra del cliente',
      'Base tecnológica para escalar la operación comercial'
    ],
    link: 'https://goxa.pe',
    tags: ['E-commerce', 'Ventas Digitales', 'Plataforma de Producto']
  },
  {
    id: 'elpez',
    name: 'El Pez Nuestro de Cada Día',
    logo: '/elpez.png',
    description: 'Landing page corporativa con contactos, publicaciones y videos',
    challenge:
      'El negocio requería un canal digital que centralizara pedidos, contactos, publicaciones en redes sociales y contenido audiovisual en un solo punto.',
    solution:
      'Diseño de una landing page integral que reúne formularios de contacto, enlaces de pedidos, secciones sociales y galerías de video, con foco en contenido visual y experiencia móvil.',
    results: [
      'Canal digital oficial para impulsar marca y pedidos',
      'Contenido visual y social centralizado en una sola experiencia',
      'Mayor engagement gracias a videos y accesos directos'
    ],
    link: 'https://elpeznuestrodecadadia.vercel.app/',
    tags: ['Gastronomía', 'Operaciones', 'Presencia Digital']
  }
];

// Modal component
function ProjectModal({ project, isOpen, onClose }: { project: typeof projects[0]; isOpen: boolean; onClose: () => void; }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-slate-300" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Logo and header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-20 h-20 rounded-xl bg-white p-3 flex-shrink-0 shadow-lg">
              <Image
                src={project.logo}
                alt={project.name}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display tracking-tight">
                {project.name}
              </h2>
              <p className="text-lg text-slate-300 font-body leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium font-body border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Challenge */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-display">
              <AlertCircle className="w-6 h-6 text-amber-400" />
              El Problema
            </h3>
            <p className="text-slate-300 leading-relaxed font-body text-base">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-display">
              <Zap className="w-6 h-6 text-blue-400" />
              La Solución
            </h3>
            <p className="text-slate-300 leading-relaxed font-body text-base">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-display">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              Los Resultados
            </h3>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300 font-body text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold font-body shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Visitar sitio web
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Company logo component with modal trigger
function CompanyLogo({ project, onClick }: { project: typeof projects[0]; onClick: () => void; }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-6 min-h-[120px] sm:min-h-[140px]"
      aria-label={`Ver caso de éxito de ${project.name}`}
    >
      <Image
        src={project.logo}
        alt={project.name}
        width={160}
        height={160}
        className="w-full h-full object-contain relative z-0"
      />
      
      {/* Hover overlay with text */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
        <p className="text-white font-bold text-sm mb-1 font-display">
          Ver caso completo
        </p>
        <p className="text-slate-300 text-xs line-clamp-2 font-body">
          {project.description}
        </p>
      </div>
    </button>
  );
}

// Animated tech grid background
function TechGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - azul empresarial más oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Glowing orbs - tonos azul oscuro */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 100 L50 100 L50 50 L150 50 L150 150 L200 150" stroke="rgb(59 130 246)" strokeWidth="1" fill="none" />
            <circle cx="50" cy="100" r="3" fill="rgb(59 130 246)" />
            <circle cx="50" cy="50" r="3" fill="rgb(59 130 246)" />
            <circle cx="150" cy="50" r="3" fill="rgb(59 130 246)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}

// Problem item with icon
function ProblemItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all hover:bg-slate-800/60 group">
      <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
        <Icon className="w-6 h-6 text-red-400" />
      </div>
      <p className="text-slate-300 leading-relaxed flex-1 font-body text-base">
        {text}
      </p>
    </div>
  );
}

// Service card component
function ServiceCard({ icon: Icon, title, description }: { icon: any; title: string; description: string; }) {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/5 group">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-6 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
          <Icon className="w-16 h-16 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 font-display">
          {title}
        </h3>
        <p className="text-slate-300 leading-relaxed font-body text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

// Target audience card
function AudienceCard({ icon: Icon, title, description }: { icon: any; title: string; description: string; }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 shadow-2xl shadow-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-500/30">
      <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
      <div className="flex items-center justify-center">
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-900/30">
          <Icon className="h-8 w-8 text-white" />
          <span className="absolute inset-0 rounded-2xl border border-white/20" />
        </div>
      </div>
      <h3 className="relative z-10 mt-6 text-xl font-bold text-white font-display">
        {title}
      </h3>
      <p className="relative z-10 mt-3 text-slate-300 leading-relaxed font-body text-base">
        {description}
      </p>
    
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .font-display {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .font-body {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      <SiteHeader />

      {/* ===================== */}
      {/* HERO */}
      {/* ===================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <TechGridBackground />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center px-4 sm:px-0">
          <h1 className="text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display sm:text-6xl md:text-7xl lg:text-8xl">
            NCC Technology
          </h1>
          
          <p className="text-3xl font-bold text-slate-300 mb-8 leading-tight tracking-tight font-display sm:text-4xl md:text-5xl">
            Automatizamos lo que <br />hoy te quita tiempo
          </p>
          
          <p className="text-base text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed font-body sm:text-lg md:text-xl">
            Creamos sistemas a medida que eliminan el trabajo manual repetitivo, 
            reducen errores y te permiten enfocarte en lo que realmente importa.
          </p>

          {/* Company Logos */}
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-10 font-body">
              Proyectos exitosos
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {projects.map((project) => (
                <CompanyLogo
                  key={project.id}
                  project={project}
                  onClick={() => openProjectModal(project)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* ===================== */}
      {/* CASO EXCELLIA */}
      {/* ===================== */}
      <section className="relative py-20 px-4 sm:px-6 lg:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-sm font-semibold tracking-wide uppercase font-body mb-6">
              Caso de éxito
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
              Excellia - Grupo Romero
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body leading-relaxed">
              De 1 semana de trabajo manual a 1 hora automatizada
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-12">
            {/* Antes */}
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-red-500/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-4">
                  <div className="text-4xl">😔</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display italic">Antes</h3>
              </div>
              <ul className="space-y-3 text-slate-300 font-body">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>1 semana analizando estructuras societarias manualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Cálculos en Excel sin forma de automatizarlos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Alto riesgo de errores (Excel con 4k filas)</span>
                </li>
              </ul>
            </div>

            {/* Solución */}
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-8 border border-blue-500/30 md:scale-105 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-4">
                  <Zap className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display italic">Solución</h3>
              </div>
              <ul className="space-y-3 text-slate-200 font-body">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Sistema web que ingresa datos fácilmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Cálculos automáticos sin errores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Historial completo y búsquedas instantáneas</span>
                </li>
              </ul>
            </div>

            {/* Después */}
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-emerald-500/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/10 rounded-full mb-4">
                  <div className="text-4xl">😊</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display italic">Después</h3>
              </div>
              <ul className="space-y-3 text-slate-300 font-body">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span><strong className="text-white">1 hora</strong> para empresas grandes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>El área legal enfoca su tiempo en tareas de valor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Reportes listos para auditorías</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center inline-flex w-full justify-center">
            <button
              onClick={() => openProjectModal(projects[0])}
              className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-white font-semibold font-body shadow-lg transition-all transform hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Ver caso completo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PROBLEMA */}
      {/* ===================== */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-300 text-sm font-semibold tracking-wide uppercase font-body mb-6">
              ¿Te suena familiar?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
              Problemas que encontramos <br />en el día a día
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body leading-relaxed">
              Si te identificas con alguno de estos puntos, podemos ayudarte
            </p>
          </div>

         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <ProblemItem
    icon={FileSpreadsheet}
    text="Tu equipo depende de Excel para procesos críticos que deberían estar automatizados"
  />
  <ProblemItem
    icon={RefreshCw}
    text="Pierdes horas en tareas manuales repetitivas que podrían hacerse automáticamente"
  />
  <ProblemItem
    icon={AlertCircle}
    text="Los cálculos manuales generan errores que te cuestan tiempo y dinero"
  />
  <ProblemItem
    icon={Clock}
    text="Procesos que deberían tomar minutos les toman días a tu equipo"
  />
  <ProblemItem
    icon={Mail}
    text="Usas correos y WhatsApp para coordinar cuando necesitas un sistema centralizado"
  />
  <ProblemItem
    icon={BarChart3}
    text="No tienes visibilidad en tiempo real de lo que pasa en tu operación"
  />
  <ProblemItem
    icon={Settings}
    text="Los ERP o software estándar no se adaptan a tu forma de trabajar"
  />
  <ProblemItem
    icon={Shield}
    text="Te falta trazabilidad y documentación para auditorías o cumplimiento normativo"
  />
</div>
        </div>
      </section>

      {/* ===================== */}
      {/* QUÉ HACEMOS */}
      {/* ===================== */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-semibold tracking-wide uppercase font-body mb-6">
              Cómo trabajamos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
              Nuestra forma de resolver <br />tus problemas
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-16 space-y-6 px-2 sm:px-0">
            <p className="text-lg text-slate-300 leading-relaxed font-body">
              <strong className="text-white font-semibold">No vendemos software estándar.</strong> Cada empresa es diferente y merece una solución que realmente funcione para ella.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed font-body">
              Primero conversamos contigo para entender cómo trabajan hoy: qué tareas toman más tiempo, 
              dónde se pierden datos, qué frustra a tu equipo.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed font-body">
              Después creamos un sistema a tu medida que automatiza lo repetitivo, centraliza la información 
              y hace que tu equipo pueda trabajar más rápido y con menos errores.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ServiceCard
              icon={BarChart3}
              title="1. Entendemos tu negocio"
              description="Hablamos contigo para identificar exactamente qué te está frenando y dónde hay oportunidades de mejora."
            />
            <ServiceCard
              icon={Settings}
              title="2. Creamos tu solución"
              description="Diseñamos y desarrollamos un sistema que se adapta a tu forma de trabajar, no al revés."
            />
            <ServiceCard
              icon={TrendingUp}
              title="3. Crece contigo"
              description="Tu sistema evoluciona junto con tu negocio. Sin límites ni sorpresas."
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PARA QUIÉN */}
      {/* ===================== */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
              ¿Es esto para ti?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-body leading-relaxed">
              Trabajamos con empresas que ya están funcionando y quieren optimizar su operación
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <AudienceCard
              icon={Building2}
              title="Empresas establecidas"
              description="Ya tienes clientes y operaciones, pero sabes que podrías ser más eficiente con la tecnología adecuada."
            />
            <AudienceCard
              icon={Users}
              title="Equipos creciendo"
              description="Tu equipo está creciendo y los procesos manuales ya no dan abasto. Necesitas escalar sin complicarte."
            />
            <AudienceCard
              icon={Shield}
              title="Empresas reguladas"
              description="Necesitas tener todo documentado, trazable y listo para auditorías sin que sea un dolor de cabeza."
            />
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* CTA FINAL */}
      {/* ===================== */}
      <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-0">
          <span className="inline-block px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-semibold tracking-wide uppercase font-body mb-8">
            Primera conversación sin costo
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight font-display">
            Conversemos sobre lo que <br />necesita tu empresa
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed font-body">
            Agenda una llamada sin compromiso. Te escuchamos, identificamos oportunidades 
            y te decimos con honestidad si podemos ayudarte.
          </p>
          
          <Link
            href="#contacto"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-5 text-lg font-bold text-white transition-all shadow-2xl hover:bg-blue-700 hover:shadow-blue-500/25 transform hover:-translate-y-1 sm:w-auto font-body"
          >
            Agendar conversación
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <SiteFooter />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
