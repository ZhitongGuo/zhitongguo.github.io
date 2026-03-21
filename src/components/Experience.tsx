import { experiences } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="content-wrapper">
      <h2 className="section-heading">Industry Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="entry-row">
            <p className="font-semibold text-neutral-200">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-neon font-semibold"
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
                  <p className="text-[0.94rem] text-neutral-400 italic">
                    {role.title}
                  </p>
                  <span className="entry-date">{role.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-none ml-4">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-[0.94rem] text-neutral-500 leading-relaxed before:content-['▹'] before:text-cyan-700 before:mr-2"
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
