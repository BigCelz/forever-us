import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img08 from "../assets/img08.jpeg";
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
    name: "Efe",
    label: "His Story",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=70&w=900&auto=format&fit=crop",
    excerpt: `I'm from Warri, raised on jollof rivalries and my mother's
insistence that I learn to cook properly before leaving home. I noticed
Amara before she noticed me — it took me two months to work up the
nerve to say so.`,
    full: `I'm from Warri, raised on jollof rivalries and my mother's
insistence that I learn to cook properly before leaving home. I noticed
Amara before she noticed me — it took me two months to work up the
nerve to say so.

She showed up to that birthday dinner already deep in conversation
with someone else, laughing in a way that made the whole table look
over. I told myself I'd say something clever. I did not say something
clever. I said "the jollof here is actually decent," which, in
hindsight, was a risky opening line in this economy.

She humored me anyway. We ended up talking long after everyone else
had left, and I remember walking to my car thinking I'd just met
someone I couldn't afford to lose track of. So I didn't.

Every trip, every argument about whose jollof recipe was correct,
every quiet Sunday since — it all pointed here. I asked her on a
Tuesday, because Tuesdays are when good things seem to happen to us.`,
    quote: `"Some people you just know. She was one of them."`,
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
    <div className="min-h-screen flex flex-col bg-[#efe4d2]">
      <main className="flex-1 px-6 py-20">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            ✦ Our Story ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#4a3226]">
            The Journey to <span className="italic shimmer-text">I Do</span>
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
