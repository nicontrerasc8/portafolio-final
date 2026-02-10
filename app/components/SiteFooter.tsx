export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <p>© 2026 NCC Technology. Decisiones claras, resultados reales.</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hola@ncctechnology.com"
            className="text-slate-600 hover:text-slate-900"
          >
            nicontrerasc8@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nicolascontrerascastellanoo/"
            className="text-slate-600 hover:text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
   
        </div>
      </div>
    </footer>
  );
}
