export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <p>(c) 2026 Nicolas Contreras Castellano. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://appruebo.vercel.app/" className="hover:text-white">
            Appruebo
          </a>
          <a href="https://lnk.bio/unratitocondios" className="hover:text-white">
            Un Ratito con Dios
          </a>
          <a href="mailto:hello@nicolascontreras.dev" className="hover:text-white">
            hello@nicolascontreras.dev
          </a>
        </div>
      </div>
    </footer>
  );
}

