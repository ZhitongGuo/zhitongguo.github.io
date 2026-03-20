import { skills } from "@/data/resume";

const categories = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "Infrastructure", items: skills.infrastructure },
  { label: "ML / AI", items: skills.ml },
  { label: "Tools", items: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-heading">Skills</h2>
      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
