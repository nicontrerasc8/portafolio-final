export default function SiteFooter() {
  return (
    <footer className="border-t border-cyan-200/10 bg-[#050b22] py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 text-sm text-[#9fb4d9] md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <p>© 2026 C8 Tech. Decisiones claras, resultados reales.</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/51949161510"
            className="text-[#9fb4d9] hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: +51 949 161 510
          </a>
          <a
            href="https://www.linkedin.com/in/nicolascontrerascastellanoo/"
            className="text-[#9fb4d9] hover:text-cyan-100"
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
