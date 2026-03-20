import { research } from "@/data/resume";

export default function Research() {
  return (
    <section id="research" className="section-container">
      <h2 className="section-heading">Research</h2>
      <div className="space-y-10">
        {research.map((r) => (
          <div key={`${r.institution}-${r.period}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-neutral-900">
                {r.institution}
              </h3>
              <span className="text-sm text-neutral-400 font-mono shrink-0">
                {r.period}
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-0.5">
              {r.role} &middot; {r.advisor}
            </p>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              {r.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
