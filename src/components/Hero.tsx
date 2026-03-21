import { personal } from "@/data/resume";

export default function Hero() {
  return (
    <section className="content-wrapper pt-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        {/* Profile image */}
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Zhitong (Payton) Guo"
            className="w-48 h-48 rounded-2xl object-cover"
          />
        </div>

        {/* Bio text */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-neutral-500 border-b border-neutral-200 pb-2 mb-4">
            Biography
          </h1>
          <p
            className="text-[0.94rem] leading-relaxed text-neutral-700 mb-3"
            dangerouslySetInnerHTML={{ __html: personal.bio }}
          />
          <p
            className="text-[0.94rem] leading-relaxed text-neutral-700 mb-5"
            dangerouslySetInnerHTML={{ __html: personal.bio2 }}
          />

          {/* Contact links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={`mailto:${personal.email}`} className="link-blue">
              Mail
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-blue"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-blue"
            >
              LinkedIn
            </a>
            <a
              href={personal.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="link-blue"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
