import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img08 from "../assets/img08.jpeg";
import img01 from "../assets/img01.jpeg";
import AOS from "aos";

const stories = [
  {
    key: "bride",
    name: "Faith",
    label: "Her Story",
    image: img08,
    excerpt: `I never knew exactly how my love story would unfold, but I always hoped it would be something beautiful. Then came you and somewhere along the way, the ordinary became special.`,
    full: `I never knew exactly how my love story would unfold, but I always hoped it would be something beautiful. Then came you and somewhere along the way, the ordinary became special.

What started as two people getting to know each other became a friendship, a love, and a bond. We’ve shared laughter, little adventures, unexpected moments, and memories that have made our journey uniquely ours.

Now, I get to turn another page, walk towards my best friend, and make a promise that goes beyond today.

From getting to know you to marrying you, and I’m glad we got to make that Journey together.


Here’s to forever and a day❤️`,
    quote: `"From getting to know you to marrying you, and I’m glad we got to make that journey together."`,
  },
  {
    key: "groom",
    name: "Isaac",
    label: "His Story",
    image: img01,
    excerpt: `Years ago, I would catch glimpses of this incredible girl walking through our school hallways. Even though we were never in the same classes, her presence alone captivated me entirely. `,
    full: `Years ago, I would catch glimpses of this incredible girl walking through our school hallways. Even though we were never in the same classes, her presence alone captivated me entirely.

From a distance, she became my silent beautiful dream and a wish I held close to my heart. Yet, time and life eventually pulled us in different directions before I could even muster the courage to speak a single word to her.

But the universe had a far grander design. Destiny eventually brought Faith back into my world, proving that true dreams never really fade.

I finally found my voice, and we began to talk. What started as a gentle, tender spark of admiration slowly blossomed into a profound and undeniable love.

Now, my ultimate dream is our reality, and soon, we will be eternally joined as one.`,
    quote: `"What started as a gentle, tender spark of admiration slowly blossomed into a profound and undeniable love."`,
  },
];

export default function Backstory() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const goTo = (nextIndex) => {
    if (nextIndex === index) return;
    setFading(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setExpanded(false);
      setFading(false);
    }, 180);
  };

  const goLeft = () => goTo(index === 0 ? stories.length - 1 : index - 1);
  const goRight = () => goTo(index === stories.length - 1 ? 0 : index + 1);

  const current = stories[index];

  //animation to reflect on character change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const t = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col bg-[#efe4d2] overflow-x-clip">
      <main className="flex-1 px-6 py-20">
        <div className="text-center sm:mb-20 mb-8">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-2 sm:mb-4 mt-3">
            ✦ Our Story ✦
          </p>
          <h1 className="font-display text-4xl md:text-7xl text-[#4a3226]">
            The Journey to <span className="italic shimmer-text">I Do</span>
          </h1>

          <div className="flex items-center justify-center gap-4 sm:mt-8 mt-4">
            <span className="w-14 h-px bg-[#7a8b64]" />
            <span
              className="w-3 h-3 bg-[#f2c9a9] rotate-45"
              style={{ animation: "spinSlow 8s linear infinite" }}
            />
            <span className="w-14 h-px bg-[#7a8b64]" />
          </div>
        </div>

        <div
          key={current.key}
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start transition-opacity duration-200 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1600"
            src={current.image}
            alt={current.name}
            className="w-full aspect-4/5 object-cover md:sticky md:top-24"
          />

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="1600"
          >
            <h2 className="font-display text-4xl text-[#7a8b64] mb-1">
              {current.name}
            </h2>
            <p className="font-body text-xs tracking-wideish uppercase text-[#4a3226]/60 mb-6">
              {current.label}
            </p>
            <p className="font-body text-base leading-relaxed text-[#4a3226]/80 whitespace-pre-line">
              {expanded ? current.full : current.excerpt}
            </p>

            <blockquote className="border-l-2 border-[#f2c9a9] pl-6 my-8">
              <p className="font-display text-2xl italic text-[#4a3226]">
                {current.quote}
              </p>
            </blockquote>

            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="px-6 py-3 cursor-pointer font-body text-xs tracking-wideish uppercase border border-[#4a3226]/30 text-[#4a3226] hover:bg-[#f2c9a9]/40 hover:border-[#f2c9a9] transition-colors duration-200"
            >
              {expanded ? "Show Less" : "Continue Reading"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={goLeft}
            aria-label="Previous story"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-[#7a8b64] text-[#7a8b64] hover:bg-[#7a8b64] cursor-pointer hover:text-[#faf5ec] transition-colors duration-200 focus-visible:outline focus-visible:outline-[#4a3226]"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            onClick={goRight}
            aria-label="Next story"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-[#7a8b64] text-[#7a8b64] hover:bg-[#7a8b64] cursor-pointer hover:text-[#faf5ec] transition-colors duration-200 focus-visible:outline focus-visible:outline-[#4a3226]"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </main>
    </div>
  );
}
