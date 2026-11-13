import { Link } from "react-router-dom";
import img01 from "../assets/img01.jpeg";
import img02 from "../assets/img02.jpeg";
import img03 from "../assets/img03.jpeg";
import img04 from "../assets/img04.jpeg";
import img05 from "../assets/img05.jpeg";
import img06 from "../assets/img06.jpeg";
import img07 from "../assets/img07.jpeg";

const photos = [
  { src: img01, alt: "Photo 1" },
  { src: img02, alt: "Photo 2" },
  { src: img03, alt: "Photo 3" },
  { src: img04, alt: "Photo 4" },
  { src: img05, alt: "Photo 5" },
  { src: img06, alt: "Photo 6" },
  { src: img07, alt: "Photo 7" },
];

export default function AllPhotos() {
  return (
    <div className="min-h-screen flex flex-col bg-[#efe4d2]">
      <main className="flex-1 flex flex-col items-center py-20 px-6">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            ✦ Gallery ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#4a3226]">
            Full Photo <span className="italic shimmer-text">Album</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-14 h-px bg-[#7a8b64]" />
            <span
              className="w-3 h-3 bg-[#f2c9a9] rotate-45"
              style={{ animation: "spinSlow 8s linear infinite" }}
            />
            <span className="w-14 h-px bg-[#7a8b64]" />
          </div>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <figure key={i} className="rounded-lg overflow-hidden">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-64 object-cover rounded-lg border border-[#f2c9a9]/60"
              />
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
