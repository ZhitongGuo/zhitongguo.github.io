"use client";

const navItems = [
  { label: "News", href: "#news" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Gallery", href: "#gallery" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
      <nav className="max-w-3xl mx-auto px-5 py-2.5 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-neutral-900 hover:text-blue-600 transition-colors text-sm"
        >
          Payton Guo
        </a>
        <ul className="hidden sm:flex gap-5 text-sm text-neutral-500">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-neutral-800 transition-colors"
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
