import { news } from "@/data/resume";

export default function News() {
  return (
    <section id="news" className="content-wrapper">
      <h2 className="section-heading">News</h2>
      <div className="news-scroll">
        <ul className="space-y-1.5">
          {news.map((item, i) => (
            <li key={i} className="text-[0.94rem] leading-relaxed">
              <span className="text-neutral-400 mr-2">[{item.date}]</span>
              <span
                className="text-neutral-700"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
