import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-heading">Education</h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.school}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-neutral-900">{edu.school}</h3>
              <span className="text-sm text-neutral-400 font-mono shrink-0">
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-neutral-600 mt-1">{edu.degree}</p>
            {edu.details && (
              <p className="text-sm text-neutral-400 mt-0.5">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
