import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1561287495-a3fe1fd28504?fm=jpg&q=70&w=1600&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main
        className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-ink/55" />

        <div className="relative z-10 flex flex-col items-center">
          <p className="font-body text-xs tracking-wideish uppercase text-cream/70 mb-6">
            Together with their families
          </p>

          <h1 className="font-display text-6xl md:text-8xl text-cream leading-tight">
            Amara
            <br />
            <span className="italic text-green-600 text-6xl md:text-8xl">
              &
            </span>
            <br />
            Efe
          </h1>

          <div className="w-24 h-px bg-green-600 my-8" />

          <p className="font-display text-2xl md:text-3xl text-cream/90 italic">
            are getting married
          </p>

          <p className="font-body text-sm text-cream/70 mt-4 tracking-wideish uppercase">
            14th March, 2027 · Lagos, Nigeria
          </p>

          <div className="mt-12">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-14">
            <Link
              to="/our-story"
              className="px-8 py-3 font-body text-sm tracking-wideish uppercase bg-cream text-ink hover:bg-cream/90 transition-colors duration-200"
            >
              Read Our Story
            </Link>
            <Link
              to="/details"
              className="px-8 py-3 font-body text-sm tracking-wideish uppercase border border-cream/50 text-cream hover:bg-cream/10 hover:border-cream transition-colors duration-200"
            >
              Event Details
            </Link>
          </div>
        </div>
      </main>

      <div className="py-16 px-6 text-center">
        <p className="font-display text-xl md:text-2xl italic text-ink/80">
          Amara &amp; Efe — a decade in the making. Welcome!
        </p>
      </div>
    </div>
  );
}
