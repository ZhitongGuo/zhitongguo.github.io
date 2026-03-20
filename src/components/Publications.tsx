import { publications } from "@/data/resume";

export default function Publications() {
  return (
    <section id="publications" className="section-container">
      <h2 className="section-heading">Publications</h2>
      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.title}>
            <h3 className="font-medium text-neutral-900 leading-snug">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <p className="text-sm text-neutral-500 mt-1">{pub.authors}</p>
            <p className="text-sm text-neutral-400 mt-0.5">
              {pub.venue}, {pub.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
