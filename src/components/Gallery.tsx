interface GalleryItem {
  src: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  // Placeholder gallery items — replace with your own photos
  // Add images to /public/gallery/ and update paths here
  // { src: "/gallery/photo1.jpg", caption: "Caption, Location" },
];

export default function Gallery() {
  if (galleryItems.length === 0) {
    return (
      <section id="gallery" className="content-wrapper">
        <h2 className="section-heading">Gallery</h2>
        <p className="text-sm text-neutral-400 italic">
          Coming soon — add photos to{" "}
          <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded">
            /public/gallery/
          </code>{" "}
          and update{" "}
          <code className="text-xs bg-neutral-100 px-1.5 py-0.5 rounded">
            Gallery.tsx
          </code>
        </p>
      </section>
    );
  }

  return (
    <section id="gallery" className="content-wrapper">
      <h2 className="section-heading">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <figure key={i} className="gallery-item">
            <img src={item.src} alt={item.caption} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
