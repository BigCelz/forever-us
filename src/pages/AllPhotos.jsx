import React from "react";
import { Link } from "react-router-dom";

const photos = [
  { src: "https://picsum.photos/seed/wedding1/800/1000", caption: "The proposal" },
  { src: "https://picsum.photos/seed/wedding2/800/1000", caption: "First trip together" },
  { src: "https://picsum.photos/seed/wedding3/800/1000", caption: "Engagement shoot" },
  { src: "https://picsum.photos/seed/wedding4/800/1000", caption: "With family" },
  { src: "https://picsum.photos/seed/wedding5/800/1000", caption: "Traditional wedding" },
  { src: "https://picsum.photos/seed/wedding6/800/1000", caption: "Reception night" },
];

export default function AllPhotos() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center py-20 px-6">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-wideish uppercase text-green-600 font-medium mb-4 mt-3">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#401d15]">
            Full Photo <span className="italic text-green-600">Album</span>
          </h1>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <figure key={i} className="rounded-lg overflow-hidden">
              <img src={p.src} alt={p.caption} className="w-full h-64 object-cover" />
              <figcaption className="mt-2 text-sm text-ink/70">{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/photobook"
            className="px-6 py-3 font-body text-sm tracking-wideish uppercase border border-ink/30 text-ink hover:bg-sage-light hover:border-sage transition-colors duration-200"
          >
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}
