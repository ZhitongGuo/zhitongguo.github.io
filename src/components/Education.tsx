import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="content-wrapper">
      <h2 className="section-heading">Education</h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.school} className="entry-row">
            <div className="entry-header">
              <p className="font-semibold text-neutral-900">{edu.school}</p>
              <span className="entry-date">{edu.period}</span>
            </div>
            <p className="text-[0.94rem] text-neutral-600 italic">
              {edu.degree}
            </p>
            {edu.details && (
              <p className="text-sm text-neutral-400">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
