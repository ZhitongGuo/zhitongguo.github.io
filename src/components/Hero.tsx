import { personal } from "@/data/resume";

export default function Hero() {
  return (
    <section className="section-container pt-32 md:pt-40 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
        {personal.name}
      </h1>
      <p className="mt-3 text-lg text-neutral-500">{personal.title}</p>
      <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">
        {personal.tagline}
      </p>
      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={`mailto:${personal.email}`}
          className="text-accent hover:text-accent-dark transition-colors"
        >
          Email
        </a>
        <span className="text-neutral-300">|</span>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dark transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-neutral-300">|</span>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dark transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
