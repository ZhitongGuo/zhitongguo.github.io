import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="content-wrapper">
      <h2 className="section-heading">Industry Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="entry-row">
            <p className="font-semibold text-neutral-900">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-blue font-semibold"
                >
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </p>
            {exp.roles.map((role) => (
              <div key={role.period} className="mt-2">
                <div className="entry-header">
                  <p className="text-[0.94rem] text-neutral-700 italic">
                    {role.title}
                  </p>
                  <span className="entry-date">{role.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-square list-outside ml-5">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-[0.94rem] text-neutral-600 leading-relaxed"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
