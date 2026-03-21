export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-5 mt-16 border-t border-neutral-200 py-4 flex items-center justify-between text-sm text-neutral-400">
      <a href="#" className="hover:text-neutral-600 transition-colors">
        Back to top
      </a>
      <span>&copy; {new Date().getFullYear()} Zhitong Guo</span>
    </footer>
  );
}
