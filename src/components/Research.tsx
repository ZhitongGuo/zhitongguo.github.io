import { research } from "@/data/resume";

export default function Research() {
  return (
    <section id="research" className="content-wrapper">
      <h2 className="section-heading">Research Experience</h2>
      <div className="space-y-6">
        {research.map((r) => (
          <div key={`${r.institution}-${r.period}`} className="entry-row">
            <div className="entry-header">
              <p className="font-semibold text-neutral-900">
                {r.institutionUrl ? (
                  <a
                    href={r.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-blue font-semibold"
                  >
                    {r.institution}
                  </a>
                ) : (
                  r.institution
                )}
              </p>
              <span className="entry-date">{r.period}</span>
            </div>
            <p className="text-[0.94rem] text-neutral-700 italic">{r.role}</p>
            <ul className="mt-1.5 space-y-1 list-square list-outside ml-5">
              {r.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-[0.94rem] text-neutral-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b }}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
