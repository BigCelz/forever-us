// import React from "react";
// import { Link } from "react-router-dom";

// const photos = [
//   {
//     src: "/src/assets/img01.jpeg",
//     caption: "The proposal",
//   },
//   {
//     src: "/src/assets/img02.jpeg",
//     caption: "First trip together",
//   },
//   {
//     src: "/src/assets/img03.jpeg",
//     caption: "Engagement shoot",
//   },
// ];

// export default function PhotoBook() {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#efe4d2]">
//       <main className="flex-1 flex flex-col items-center py-20">
//         <div className="text-center mb-16 px-6">
//           <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
//             Gallery
//           </p>
//           <h1 className="font-display text-4xl md:text-6xl text-[#4a3226]">
//             Snapshots Of <span className="italic text-[#7a8b64]">Forever</span>
//           </h1>

//           <div className="flex items-center justify-center gap-4 mt-6">
//             <span className="w-14 h-px bg-[#7a8b64]" />
//             <span className="w-2.5 h-2.5 bg-[#f2c9a9] rotate-45" />
//             <span className="w-14 h-px bg-[#7a8b64]" />
//           </div>
//         </div>

//         {/* ── Infinite Photo Scroll ── */}
//         <div className="w-full overflow-hidden">
//           <div className="inline-flex gap-6 photo-infinite-scroll">
//             {Array(2)
//               .fill(photos.slice(0, 4))
//               .flat()
//               .map((photo, i) => (
//                 <div
//                   key={i}
//                   className="shrink-0 w-55 md:w-75 aspect-4/5 rounded-lg overflow-hidden shadow-sm border border-[#f2c9a9]/60"
//                 >
//                   <img
//                     src={photo.src}
//                     alt={photo.caption}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>

//         <Link
//           to="/photobook/all"
//           className="inline-block px-6 py-3 mt-4 cursor-pointer font-body text-xs tracking-wideish uppercase border border-[#4a3226]/30 text-[#4a3226] hover:bg-[#f2c9a9]/40 hover:border-[#f2c9a9] transition-colors duration-200"
//         >
//           View Full Photobook
//         </Link>
//       </main>

//       <style>{`
//         .photo-infinite-scroll {
//           animation: photo-scroll 40s linear infinite;
//         }

//         @keyframes photo-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import img01 from "../assets/img01.jpeg";
import img02 from "../assets/img02.jpeg";
import img03 from "../assets/img03.jpeg";

const photos = [
  { src: img01, caption: "The proposal" },
  { src: img02, caption: "First trip together" },
  { src: img03, caption: "Engagement shoot" },
];

export default function PhotoBook() {
  return (
    <div className="min-h-screen flex flex-col bg-[#efe4d2]">
      <main className="flex-1 flex flex-col items-center py-20">
        <div className="text-center mb-16 px-6">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#4a3226]">
            Snapshots Of <span className="italic text-[#7a8b64]">Forever</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-14 h-px bg-[#7a8b64]" />
            <span className="w-2.5 h-2.5 bg-[#f2c9a9] rotate-45" />
            <span className="w-14 h-px bg-[#7a8b64]" />
          </div>
        </div>

        {/* ── Infinite Photo Scroll ── */}
        <div className="w-full overflow-hidden">
          <div className="inline-flex gap-6 photo-infinite-scroll">
            {Array(2)
              .fill(photos)
              .flat()
              .map((photo, i) => (
                <div
                  key={i}
                  className="shrink-0 w-55 md:w-75 aspect-4/5 rounded-lg overflow-hidden shadow-sm border border-[#f2c9a9]/60"
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
          className="inline-block px-6 py-3 mt-4 cursor-pointer font-body text-xs tracking-wideish uppercase border border-[#4a3226]/30 text-[#4a3226] hover:bg-[#f2c9a9]/40 hover:border-[#f2c9a9] transition-colors duration-200"
        >
          View Full Photobook
        </Link>
      </main>

      <style>{`
        .photo-infinite-scroll {
          animation: photo-scroll 40s linear infinite;
        }

        @keyframes photo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
