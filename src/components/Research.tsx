import { research } from "@/data/resume";

export default function Research() {
  return (
    <section id="research" className="content-wrapper">
      <h2 className="section-heading">Research Experience</h2>
      <div className="space-y-6">
        {research.map((r) => (
          <div key={`${r.institution}-${r.period}`} className="entry-row">
            <div className="entry-header">
              <p className="font-semibold text-neutral-200">
                {r.institutionUrl ? (
                  <a
                    href={r.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-neon font-semibold"
                  >
                    {r.institution}
                  </a>
                ) : (
                  r.institution
                )}
              </p>
              <span className="entry-date">{r.period}</span>
            </div>
            <p className="text-[0.94rem] text-neutral-400 italic">{r.role}</p>
            <ul className="mt-1.5 space-y-1 list-none ml-4">
              {r.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-[0.94rem] text-neutral-500 leading-relaxed before:content-['▹'] before:text-cyan-700 before:mr-2 [&_a]:text-cyan-400 [&_a]:hover:text-cyan-300 [&_a]:transition-colors"
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
