"use client";

import { useEffect, useState } from "react";

/**
 * Google Maps embed (no API key) centred on downtown Indianapolis, framed to show ~25 mi each way:
 * Danville and Greenfield (~20 mi) in view, Greencastle and Knightstown (33–40 mi) out.
 * Width sets how much a zoom level shows, so narrow frames (phones) use one zoom level out.
 * Server HTML ships the desktop zoom; the map is far down the page and lazy, so a phone swaps the
 * src before the iframe ever loads.
 */
const CENTER = { lat: 39.7684, lng: -86.1581 }; // downtown Indianapolis
const src = (zoom: number) =>
  `https://www.google.com/maps/embed?origin=mfe&pb=!1m10!1m8!1m3!1d392540!2d${CENTER.lng}!3d${CENTER.lat}!3m2!1i1024!2i768!4f13.1!6i${zoom}`;

export function AreaMap({ title, className }: { title: string; className?: string }) {
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 36em)");
    const update = () => setZoom(narrow.matches ? 9 : 10);
    update();
    narrow.addEventListener("change", update);
    return () => narrow.removeEventListener("change", update);
  }, []);

  return (
    <iframe
      className={className}
      src={src(zoom)}
      title={title}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
