"use client";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/50">
      <nav className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-neutral-900 hover:text-accent transition-colors"
        >
          ZG
        </a>
        <ul className="flex gap-6 text-sm text-neutral-500">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-neutral-900 transition-colors"
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
