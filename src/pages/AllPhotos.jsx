import React from "react";
import { Link } from "react-router-dom";

const photos = [
  { src: "/src/assets/img01.jpeg"},
  { src: "/src/assets/img02.jpeg"},
  { src: "/src/assets/img03.jpeg"},
  { src: "/src/assets/img04.jpeg"},
  { src: "/src/assets/img05.jpeg"},
  { src: "/src/assets/img06.jpeg"},
  { src: "/src/assets/img07.jpeg"},
];

export default function AllPhotos() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf5ec]">
      <main className="flex-1 flex flex-col items-center py-20 px-6">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#4a3226]">
            Full Photo <span className="italic text-[#7a8b64]">Album</span>
          </h1>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <figure key={i} className="rounded-lg overflow-hidden">
              <img
                src={p.src}
                alt={p.caption}
                className="w-full h-64 object-cover rounded-lg border border-[#f2c9a9]/60"
              />
              {/* <figcaption className="mt-2 text-sm text-[#4a3226]/70">
                {p.caption}
              </figcaption> */}
            </figure>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/photobook"
            className="px-6 py-3 font-body text-sm tracking-wideish uppercase border border-[#4a3226]/30 text-[#4a3226] hover:bg-[#f2c9a9]/40 hover:border-[#f2c9a9] transition-colors duration-200"
          >
            Back
          </Link>
        </div>
      </main>
    </div>
  );
}
