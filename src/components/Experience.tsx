import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-heading">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.period}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-neutral-900">
                {exp.role}{" "}
                <span className="text-neutral-400 font-normal">
                  @ {exp.company}
                </span>
              </h3>
              <span className="text-sm text-neutral-400 font-mono shrink-0">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-neutral-400 mt-0.5">{exp.location}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm text-neutral-600 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-neutral-300"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
