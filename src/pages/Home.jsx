import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1561287495-a3fe1fd28504?fm=jpg&q=70&w=1600&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main
        className="relative min-h-dvh flex flex-col items-center justify-center text-center px-6 pt-28 pb-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        {/* warm brown overlay instead of neutral ink */}
        <div className="absolute inset-0 bg-[#3a2a20]/60" />

        <div className="relative z-10 flex flex-col items-center">
          <p className="font-body text-xs tracking-wideish uppercase text-[#f2c9a9] mb-4 md:mb-6">
            ✦ Together with their families ✦
          </p>

          <h1 className="font-display text-5xl md:text-7xl text-[#faf5ec] leading-none">
            Faith
            <br />
            <span className="italic text-[#f2c9a9] text-5xl md:text-7xl">
              &
            </span>
            <br />
            <span className="italic shimmer-text">Isaac</span>
          </h1>

          <div className="flex items-center justify-center gap-4 my-5 md:my-6">
            <span className="w-14 h-px bg-[#f2c9a9]" />
            <span
              className="w-3 h-3 bg-[#f2c9a9] rotate-45"
              style={{ animation: "spinSlow 8s linear infinite" }}
            />
            <span className="w-14 h-px bg-[#f2c9a9]" />
          </div>

          <p className="font-display text-xl md:text-2xl text-[#faf5ec]/90 italic">
            are getting married
          </p>

          <p className="font-body text-xs md:text-sm text-[#f2c9a9]/90 mt-3 tracking-wideish uppercase">
            18th December, 2026 · Kaduna, Nigeria
          </p>

          <div className="mt-6 md:mt-8">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10">
            <Link
              to="/our-story"
              className="px-8 py-3 font-body text-sm tracking-wideish uppercase bg-[#faf5ec] text-[#4a3226] hover:bg-[#f2c9a9] transition-colors duration-200"
            >
              Read Our Story
            </Link>
            <Link
              to="/details"
              className="px-8 py-3 font-body text-sm tracking-wideish uppercase border border-[#f2c9a9]/70 text-[#faf5ec] hover:bg-[#f2c9a9]/15 hover:border-[#f2c9a9] transition-colors duration-200"
            >
              Event Details
            </Link>
          </div>
        </div>
      </main>

      {/* soft sage green band with brown text */}
      <div className="py-16 px-6 text-center bg-[#efe4d2]! border-t border-[#7a8b64]/30">
        <p className="font-display text-xl md:text-2xl italic text-[#4a3226]">
          Faith &amp; Isaac — a decade in the making. Welcome!
        </p>
      </div>
    </div>
  );
}
