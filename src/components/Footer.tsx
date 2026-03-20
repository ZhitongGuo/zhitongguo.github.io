export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-6 py-12 border-t border-neutral-200">
      <p className="text-sm text-neutral-400 text-center">
        &copy; {new Date().getFullYear()} Zhitong Guo
      </p>
    </footer>
  );
}
