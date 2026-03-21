import { publications } from "@/data/resume";

export default function Publications() {
  return (
    <section id="publications" className="content-wrapper">
      <h2 className="section-heading">Publications</h2>
      <div className="space-y-5">
        {publications.map((pub) => (
          <div key={pub.title}>
            <p className="text-[0.94rem] text-neutral-900 font-medium leading-snug">
              {pub.title}
            </p>
            <p
              className="text-sm text-neutral-500 mt-1 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: pub.authors }}
            />
            <p className="text-sm text-neutral-500 mt-0.5">
              <em>{pub.venue}</em>, {pub.year}.
              {pub.link && (
                <>
                  {" "}
                  [
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-blue"
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
