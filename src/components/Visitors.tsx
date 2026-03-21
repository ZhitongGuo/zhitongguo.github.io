"use client";

import { useEffect, useRef } from "react";

export default function Visitors() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ClustrMaps globe widget — sign up at https://clustrmaps.com/
    // to get your own site ID. Replace the `d=...` parameter below.
    // For now this uses a placeholder; it will show "add your site" until configured.
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "clstr_globe";
    script.src =
      "//clustrmaps.com/globe.js?d=REPLACE_WITH_YOUR_CLUSTRMAPS_ID&w=180";
    containerRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="content-wrapper flex justify-center">
      <div ref={containerRef} />
    </section>
  );
}
