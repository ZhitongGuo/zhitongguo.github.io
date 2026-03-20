import { competitions } from "@/data/resume";

export default function Competitions() {
  return (
    <section id="competitions" className="section-container">
      <h2 className="section-heading">Competitions</h2>
      <div className="space-y-4">
        {competitions.map((comp) => (
          <div
            key={comp.name}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
          >
            <div>
              <h3 className="font-medium text-neutral-900">{comp.name}</h3>
              <p className="text-sm text-neutral-500">{comp.result}</p>
            </div>
            <span className="text-sm text-neutral-400 font-mono">
              {comp.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
