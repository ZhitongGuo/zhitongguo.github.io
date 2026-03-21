import { personal } from "@/data/resume";

export default function Hero() {
  return (
    <section className="content-wrapper pt-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        {/* Profile image */}
        <div className="shrink-0">
          <div className="rounded-2xl overflow-hidden neon-border">
            <img
              src="/profile.jpg"
              alt="Zhitong (Payton) Guo"
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>

        {/* Bio text */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 border-b border-cyan-900/50 pb-2 mb-4 glow-text">
            {personal.name}
          </h1>
          <p
            className="text-[0.94rem] leading-relaxed text-neutral-400 mb-3 [&_a]:text-cyan-400 [&_a]:hover:text-cyan-300 [&_a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: personal.bio }}
          />
          <p
            className="text-[0.94rem] leading-relaxed text-neutral-400 mb-5 [&_a]:text-cyan-400 [&_a]:hover:text-cyan-300 [&_a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: personal.bio2 }}
          />

          {/* Contact links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-mono">
            <a href={`mailto:${personal.email}`} className="link-neon">
              mail
            </a>
            <span className="text-cyan-900">{"/"}{"/"}  </span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-neon"
            >
              github
            </a>
            <span className="text-cyan-900">{"/"}{"/"}  </span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-neon"
            >
              linkedin
            </a>
            <span className="text-cyan-900">{"/"}{"/"}  </span>
            <a
              href={personal.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="link-neon"
            >
              scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
