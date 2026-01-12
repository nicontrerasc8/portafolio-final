import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },

];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="font-[var(--font-space)] text-lg uppercase tracking-[0.2em] text-white"
        >
          NC
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
