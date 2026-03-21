import { publications } from "@/data/resume";

export default function Publications() {
  return (
    <section id="publications" className="content-wrapper">
      <h2 className="section-heading">Publications</h2>
      <div className="space-y-5">
        {publications.map((pub) => (
          <div key={pub.title} className="border-l-2 border-cyan-900/50 pl-4 hover:border-cyan-500/50 transition-colors">
            <p className="text-[0.94rem] text-neutral-200 font-medium leading-snug">
              {pub.title}
            </p>
            <p
              className="text-sm text-neutral-500 mt-1 leading-relaxed [&_strong]:text-cyan-400"
              dangerouslySetInnerHTML={{ __html: pub.authors }}
            />
            <p className="text-sm text-neutral-600 mt-0.5 font-mono">
              <em className="text-purple-500/80">{pub.venue}</em>, {pub.year}
              {pub.link && (
                <>
                  {" "}
                  [
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-neon"
                  >
                    paper
                  </a>
                  ]
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
