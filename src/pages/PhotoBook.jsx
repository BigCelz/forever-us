import React from "react";
import { Link } from "react-router-dom";

const photos = [
  { src: "https://picsum.photos/seed/wedding1/500/650", caption: "The proposal" },
  { src: "https://picsum.photos/seed/wedding2/500/650", caption: "First trip together" },
  { src: "https://picsum.photos/seed/wedding3/500/650", caption: "Engagement shoot" },
  { src: "https://picsum.photos/seed/wedding4/500/650", caption: "With family" },
  { src: "https://picsum.photos/seed/wedding5/500/650", caption: "Traditional wedding" },
  { src: "https://picsum.photos/seed/wedding6/500/650", caption: "Reception night" },
];

export default function PhotoBook() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center py-20">
        <div className="text-center mb-16 px-6">
          <p className="font-body text-xs tracking-wideish uppercase text-green-600 font-medium mb-4 mt-3">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#401d15]">
            Snapshots Of <span className="italic text-green-600">Forever</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-14 h-px bg-green-600" />
            <span className="w-2.5 h-2.5 bg-green-600 rotate-45" />
            <span className="w-14 h-px bg-green-600" />
          </div>
        </div>

        {/* ── Infinite Photo Scroll ── */}
        <div className="w-full overflow-hidden">
          <div className="inline-flex gap-6 photo-infinite-scroll">
            {Array(2)
              .fill(photos.slice(0, 4))
              .flat()
              .map((photo, i) => (
                <div
                  key={i}
                  className="shrink-0 w-55 md:w-75 aspect-4/5 rounded-lg overflow-hidden shadow-sm"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>
        </div>

        <Link
          to="/photobook/all"
          className="inline-block px-6 py-3 mt-4 cursor-pointer font-body text-xs tracking-wideish uppercase border border-ink/30 text-ink hover:bg-sage-light hover:border-sage transition-colors duration-200"
        >
          View Full Photobook
        </Link>
      </main>

      <style>{`
        .photo-infinite-scroll {
          animation: photo-scroll 40s linear infinite;
        }

        @keyframes photo-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
