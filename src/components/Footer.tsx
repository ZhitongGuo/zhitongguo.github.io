export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-5 mt-16 border-t border-cyan-900/30 py-4 flex items-center justify-between text-sm font-mono text-neutral-600">
      <a href="#" className="hover:text-cyan-400 transition-colors">
        ^ top
      </a>
      <span>&copy; {new Date().getFullYear()} zhitong.guo</span>
    </footer>
  );
}
