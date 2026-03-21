"use client";

const navItems = [
  { label: "News", href: "#news" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-cyan-900/30">
      <nav className="max-w-3xl mx-auto px-5 py-2.5 flex items-center justify-between">
        <a
          href="#"
          className="font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors text-sm tracking-wider glow-text"
        >
          ZG://
        </a>
        <ul className="hidden sm:flex gap-5 text-sm font-mono text-neutral-500">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
