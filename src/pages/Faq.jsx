import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What should I wear?",
    answer:
      "We'd love to see you in our colors of the day: brown, green, peach, and milk. Feel free to dress it up; formal/semi-formal attire is welcome.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Seats are limited, so only guests specifically named on the invitation will have a reserved spot. Reach out to us if you have questions about your invite.",
  },
  {
    question: "Are kids welcome?",
    answer:
      "As much as we love your little ones, this will be an adults-only celebration — with the exception of immediate family.",
  },
  {
    question: "Is there parking at the venue?",
    answer:
      "Yes, on-site parking is available at both the ceremony and reception venues. We'll also have ushers on hand to help direct you.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "The ceremony will begin promptly at 2pm. Please plan to arrive at least 30 minutes early to find your seat and mingle. (And please, let's leave 'African Time' at the door for this one! 😉)",
  },
  {
    question: "Will there be a gift registry?",
    answer:
      "Your presence is truly the greatest gift. If you'd like to bless us further, details will be shared closer to the date.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-6">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-xl md:text-2xl text-[#4a3226] italic">
          {question}
        </span>
        <span className="shrink-0 w-6 h-6 flex items-center justify-center text-[#7a8b64] cursor-pointer">
          {open ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-base text-[#4a3226]/70 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <div className="min-h-screen flex flex-col bg-[#efe4d2]">
      <main className="flex-1 flex flex-col items-center px-6 py-20">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            ✦ FAQ ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#4a3226]">
            All You <span className="italic shimmer-text">Need To Know</span>
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

        <div className="w-full max-w-2xl divide-y divide-[#e4e9d8]">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay={i * 150}
            >
              <FaqItem {...faq} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
