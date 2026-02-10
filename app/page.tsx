"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowRight, 
  FileSpreadsheet, 
  Mail, 
  RefreshCw, 
  AlertCircle, 
  BarChart3, 
  Users,
  Zap,
  Settings,
  Smartphone,
  Building2,
  ShoppingCart,
  CheckCircle2,
  X,
  ExternalLink,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const projects = [
  {
    id: 'excellia',
    name: 'Excellia - Grupo Romero',
    logo: '/excellia.png',
    description: 'Automatización de identificación del Beneficiario Final',
    challenge:
      'Excellia requería automatizar el proceso de identificación del Beneficiario Final, el cual implicaba análisis manual de estructuras societarias complejas, múltiples fuentes de información y alto riesgo operativo en procesos de cumplimiento regulatorio.',
    solution:
      'Lideré el desarrollo de una plataforma digital que traduce los requerimientos legales y normativos en un flujo automatizado. La solución centraliza información societaria, asegura trazabilidad completa y permite analizar estructuras complejas y relaciones indirectas entre empresas.',
    results: [
      'Reducción drástica del tiempo de análisis frente al proceso manual',
      'Reportes listos para auditorías y revisiones internas',
      'Mayor control, trazabilidad y reducción del riesgo operativo',
      'Menor dependencia de análisis manual y hojas de cálculo'
    ],
    tags: ['LegalTech', 'Compliance', 'Process Automation', 'Data Modeling']
  },

  {
    id: 'ludus',
    name: 'LUDUS',
    logo: '/ludus.png',
    description: 'Plataforma educativa gamificada',
    challenge:
      'Las instituciones educativas enfrentan baja motivación estudiantil y limitada visibilidad del progreso académico en tiempo real, con procesos pedagógicos poco adaptados al entorno digital.',
    solution:
      'Desarrollo de LUDUS, una plataforma educativa gamificada que combina contenido académico, evaluación automática y mecánicas de juego. Permite a estudiantes, docentes y líderes educativos visualizar progreso, desempeño y hábitos de aprendizaje desde dashboards centralizados.',
    results: [
      'Mejora en engagement y constancia de los estudiantes',
      'Seguimiento académico en tiempo real',
      'Base tecnológica escalable para instituciones educativas'
    ],
    link: "https://www.ludus-edu.com/",
    tags: ['EdTech', 'Gamification', 'SaaS', 'Education']
  },

  {
    id: 'un-ratito',
    name: 'Un ratito con Dios',
    logo: '/unratitocondios.png',
    description: 'Plataforma digital de acompañamiento espiritual',
    challenge:
      'La comunidad requería un espacio digital accesible para compartir reflexiones, contenidos espirituales y acompañamiento, más allá de los canales tradicionales.',
    solution:
      'Desarrollo de una plataforma digital enfocada en la difusión de contenido espiritual y reflexivo, facilitando el acceso a mensajes, recursos y espacios de conexión para la comunidad.',
    results: [
      'Mayor alcance del contenido espiritual',
      'Acceso digital constante para la comunidad',
      'Centralización de contenidos y mensajes'
    ],
      link: 'https://lnk.bio/unratitocondios',
    tags: ['Content Platform', 'Community', 'Digital Experience']
  },

  {
    id: 'goxa',
    name: 'GOXA',
    logo: '/goxa.png',
    description: 'E-commerce de productos naturales',
    challenge:
      'GOXA necesitaba digitalizar su canal de ventas y ordenar su operación comercial para mejorar la experiencia de compra y facilitar la gestión del negocio.',
    solution:
      'Desarrollé e implementé el e-commerce de GOXA, una plataforma orientada a la venta de productos naturales, optimizando el flujo de compra y sentando las bases para la operación digital del negocio.',
    results: [
      'Canal de ventas digital funcional',
      'Mejora en la experiencia de compra',
      'Base tecnológica para escalar la operación comercial'
    ],
    link: 'https://goxa.pe',
    tags: ['E-commerce', 'Digital Sales', 'Product Platform']
  },

  {
    id: 'elpez',
    name: 'El Pez Nuestro de Cada Día',
    logo: '/elpez.png',
    description: 'Landing page corporativa con contactos, posts y videos para el negocio gastronómico',
    challenge:
      'El equipo requería un canal digital completo que reuniera pedidos, contactos, posts de redes y contenido audiovisual en un solo punto para promover su propuesta de valor.',
    solution:
      'Diseñamos una landing page 360° que integra formularios de contacto, secciones de redes sociales, galerías de videos y enlaces de pedidos, con foco en contenido multimedia y experiencia móvil.',
    results: [
      'Canal digital oficial para impulsar marca y pedidos',
      'Contenido visual y social centralizado en una sola experiencia',
      'Mayor engagement gracias a videos y enlaces directos de contacto'
    ],
    link: 'https://elpeznuestrodecadadia.vercel.app/',
    tags: ['Food Tech', 'Operations', 'Digital Transformation']
  }
];

// Modal component
function ProjectModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: typeof projects[0]; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
        >
          <X className="w-5 h-5 text-neutral-600" />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-14">
          {/* Logo and header */}
          <div className="flex items-center gap-8 mb-10 pb-10 border-b border-neutral-200">
            <div className="w-24 h-24 relative bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-neutral-200">
              <Image
                src={project.logo}
                alt={project.name}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-black text-neutral-900 mb-3 tracking-tight">
                {project.name}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 text-sm font-bold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Challenge */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              Problemática identificada
            </h3>
            <p className="text-neutral-700 leading-relaxed text-lg pl-13">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-neutral-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              Solución Implementada
            </h3>
            <p className="text-neutral-700 leading-relaxed text-lg pl-13">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              Impacto Medible
            </h3>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-4 pl-13">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-700 leading-relaxed text-lg font-medium">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          {
            project.link &&
            <div className="pt-6 border-t border-neutral-200">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-xl bg-gradient-to-r from-blue-600 px-8 py-4 via-blue-700 to-purple-700 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="inline-flex items-center gap-3 text-white">
                Visitar sitio web
              <ExternalLink className="w-5 h-5" />
              </span>
            </a>
          </div>
          
          }
        </div>
      </div>
    </div>
  );
}

// Company logo component with modal trigger
function CompanyLogo({ 
  project, 
  onClick 
}: { 
  project: typeof projects[0]; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center p-12 sm:p-14 bg-white rounded-[28px] border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer overflow-hidden min-h-[260px] w-full sm:w-[320px]"
    >
      <div className="relative w-44 h-28 flex items-center justify-center z-0">
        <Image
          src={project.logo}
          alt={project.name}
          width={130}
          height={70}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />
      
      {/* Hover overlay with text */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051829] via-[#062341] to-[#0A2E5C] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 z-10">
        <div className="text-center">
          <p className="text-white font-bold text-base mb-2">Ver caso de éxito</p>
          <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
        </div>
      </div>
    </button>
  );
}

// Animated tech grid background
function TechGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient - azul empresarial más oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#051829] via-[#062341] to-[#0A2E5C]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e5a9a20_1px,transparent_1px),linear-gradient(to_bottom,#1e5a9a20_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glowing orbs - tonos azul oscuro */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E40AF]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F2D54]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl" />
      
      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 0 100 L 50 100 L 50 50 L 150 50 L 150 150 L 200 150" 
                  stroke="#1E40AF" 
                  strokeWidth="1" 
                  fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20" />
    </div>
  );
}

// Problem item with icon
function ProblemItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start gap-5 p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50/50 border border-red-200/50 hover:border-red-300/50 hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <p className="text-neutral-800 leading-relaxed pt-2 text-lg font-medium">{text}</p>
    </div>
  );
}

// Service card component
function ServiceCard({ 
  icon: Icon, 
  title, 
  description
}: { 
  icon: any; 
  title: string; 
  description: string;
}) {
  return (
    <div className="group relative p-10 rounded-2xl bg-white border border-neutral-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-[#051829] via-[#062341] to-[#0A2E5C] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-black text-neutral-900 mb-5 tracking-tight">{title}</h3>
        <p className="text-neutral-600 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
}

// Target audience card
function AudienceCard({ 
  icon: Icon, 
  title, 
  description
}: { 
  icon: any; 
  title: string; 
  description: string;
}) {
  return (
    <div className="group relative p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 border border-white/20 mx-auto">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-black text-white mb-5 tracking-tight">{title}</h3>
        <p className="text-neutral-300 leading-relaxed text-lg">{description}</p>
      </div>
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
    <div className="min-h-screen bg-neutral-50">
      <SiteHeader />

      {/* ===================== */}
      {/* HERO */}
      {/* ===================== */}
      <section className="relative py-24 sm:py-40 overflow-hidden">
        <TechGridBackground />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-bold text-white tracking-wide">
                Transformación Digital Empresarial
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
              NCC Technology
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-100 mb-6 tracking-tight">
              Eliminamos las ineficiencias operacionales de su empresa
            </p>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/90 mb-14 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos sistemas tecnológicos a medida que optimizan procesos operativos, 
              eliminan dependencias de herramientas manuales y escalan con su crecimiento empresarial.
            </p>

            {/* Company Logos */}
            <div className="flex flex-col items-center gap-10">
              <p className="text-sm font-bold text-blue-200 uppercase tracking-widest">
                Proyectos
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
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
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent" />
      </section>

      {/* ===================== */}
      {/* PROBLEMA */}
      {/* ===================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-bold text-red-700 tracking-wide">INEFICIENCIAS OPERACIONALES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-8 tracking-tight">
                Desafíos Empresariales Frecuentes
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Identificamos y resolvemos problemas críticos que limitan el crecimiento escalable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProblemItem 
                icon={FileSpreadsheet}
                text="Dependencia crítica de hojas de cálculo para procesos core del negocio"
              />
              <ProblemItem 
                icon={Mail}
                text="Información fragmentada en múltiples canales de comunicación no integrados"
              />
              <ProblemItem 
                icon={RefreshCw}
                text="Procesos operativos con alta dependencia de recursos humanos específicos"
              />
              <ProblemItem 
                icon={AlertCircle}
                text="Inconsistencias de datos por transferencia manual y falta de validaciones sistémicas"
              />
              <ProblemItem 
                icon={BarChart3}
                text="Generación de reportes ejecutivos con demoras de horas o días"
              />
              <ProblemItem 
                icon={Clock}
                text="Equipos operativos saturados con tareas de bajo valor agregado"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* QUÉ HACEMOS */}
      {/* ===================== */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-700 tracking-wide">NUESTRA PROPUESTA DE VALOR</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-8 tracking-tight">
                Soluciones Tecnológicas Estratégicas
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6">
                No ofrecemos productos estandarizados ni soluciones genéricas de mercado.
              </p>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Iniciamos con un diagnóstico profundo de sus procesos operacionales: análisis de flujos de trabajo, 
                identificación de dependencias críticas y mapeo de puntos de fricción.
              </p>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Posteriormente, diseñamos e implementamos sistemas tecnológicos que automatizan operaciones 
                repetitivas y optimizan el flujo de información empresarial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={Zap}
                title="Automatización de Procesos"
                description="Eliminamos tareas operativas repetitivas mediante automatización inteligente y flujos de trabajo sistematizados."
              />
              <ServiceCard
                icon={Settings}
                title="Desarrollo a Medida"
                description="Creamos soluciones tecnológicas personalizadas adaptadas a la estructura operacional específica de su organización."
              />
              <ServiceCard
                icon={Smartphone}
                title="Plataformas Empresariales"
                description="Desarrollamos aplicaciones y plataformas escalables con enfoque en usabilidad, mantenibilidad y rendimiento."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PARA QUIÉN */}
      {/* ===================== */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
           
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                Organizaciones en Fase de Escalamiento
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Trabajamos con empresas establecidas preparadas para implementar transformación operacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AudienceCard
                icon={Building2}
                title="Empresas Consolidadas"
                description="Organizaciones con procesos operacionales definidos que requieren sistematización y optimización para escalar eficientemente."
              />
              <AudienceCard
                icon={ShoppingCart}
                title="Negocios Digitales"
                description="Plataformas de E-commerce y empresas tecnológicas que necesitan infraestructura operacional robusta para soportar crecimiento acelerado."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* CTA FINAL */}
      {/* ===================== */}
      <section className="py-24 sm:py-40 bg-gradient-to-br from-[#051829] via-[#062341] to-[#0A2E5C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold text-white tracking-wide">
                CONSULTORÍA INICIAL SIN COMPROMISO
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-10 leading-tight tracking-tight">
              Si identifica ineficiencias operacionales en su empresa,<br className="hidden lg:block" /> 
              existe una solución tecnológica.
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed">
              Agendemos una sesión de diagnóstico. Analizaremos sus procesos operacionales, 
              identificaremos oportunidades de optimización y determinaremos la viabilidad de implementación.
            </p>

            <a
              href="mailto:nicontrerasc8@gmail.com?subject=Consulta%20sobre%20Servicios%20NCC%20Technology"
              className="group inline-flex items-center gap-3 px-12 py-6 rounded-xl bg-white text-[#051829] font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Agendar Consultoría Estratégica
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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