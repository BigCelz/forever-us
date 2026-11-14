import { PiChurchBold } from "react-icons/pi";
import { FaGlassCheers, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    title: "Ceremony",
    time: "10:00 AM",
    icon: PiChurchBold,
    venue: "Immaculate Conception Catholic Church, Sabon Tasha, Kaduna",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.7507269710213!2d7.468200299999999!3d10.4413447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d498833da12ed%3A0xdca8bda7a03adad6!2sImmaculate%20Conception%20Catholic%20Church%20Sabo.!5e0!3m2!1sen!2sng!4v1794565715310!5m2!1sen!2sng",
  },
  {
    title: "Reception",
    time: "2:00 PM",
    icon: FaGlassCheers,
    venue:
      "MAUREB EVENT CENTRE BY REFINERY JUNCTION, OPPOSITE ST. AUGUSTINE CATHOLIC CHURCH, MAHUTA, KADUNA.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4333.591959753894!2d7.496181278384739!3d10.442126138637857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d35a10b91d9ef%3A0x2b46bb28829de71b!2sMaureb%20Event%20Center!5e0!3m2!1sen!2sng!4v1794565150155!5m2!1sen!2sng",
  },
];

export default function Events() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#efe4d2] overflow-hidden">
      {/* Decorative background blobs */}
      <div className="floaty pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#f2c9a9]/40 blur-3xl" />
      <div
        className="floaty pointer-events-none absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#7a8b64]/25 blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="floaty pointer-events-none absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-[#f2c9a9]/30 blur-3xl"
        style={{ animationDelay: "4s" }}
      />

      <main className="relative flex-1 flex flex-col items-center px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            ✦ Schedule of Events ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#4a3226]">
            Event{" "}
            <span className="italic shimmer-text">Details</span>
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

        {/* Events */}
        <div className="relative w-full max-w-5xl space-y-16">
          {/* Center timeline (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#7a8b64]/50 to-transparent" />

          {events.map((event, i) => {
            const reversed = i % 2 === 1;
            const EventIcon = event.icon;
            return (
              <div key={event.title} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#efe4d2] border-2 border-[#7a8b64] items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#f2c9a9]" />
                </div>

                <div
                  className={`group flex flex-col ${
                    reversed ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8 md:gap-16`}
                >
                  {/* Info card */}
                  <div
                    className="w-full md:w-1/2"
                    data-aos={reversed ? "fade-left" : "fade-right"}
                    data-aos-duration="1600"
                  >
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-[#f2c9a9]/60 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#f2c9a9]/40">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-[#7a8b64] text-[#efe4d2] flex items-center justify-center mb-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                          <EventIcon size={26} />
                        </div>

                        <h2 className="font-display text-4xl text-[#4a3226] italic mb-3">
                          {event.title}
                        </h2>

                        <span className="inline-block font-body text-sm tracking-wideish uppercase text-[#4a3226] bg-[#f2c9a9] px-4 py-1.5 rounded-full mb-5 font-medium">
                          {event.time}
                        </span>

                        <p className="font-body text-base text-[#4a3226]/80 leading-relaxed mb-6">
                          {event.venue}
                        </p>

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            event.venue
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-body text-sm text-[#7a8b64] font-medium border-b border-[#7a8b64]/40 pb-0.5 transition-all duration-300 hover:gap-3 hover:text-[#4a3226] hover:border-[#4a3226]"
                        >
                          <FaMapMarkerAlt size={14} />
                          Get directions
                          <span aria-hidden>→</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div
                    className="w-full md:w-1/2"
                    data-aos={reversed ? "fade-right" : "fade-left"}
                    data-aos-duration="1600"
                    data-aos-delay="200"
                  >
                    <div className="relative">
                      {/* Offset peach frame */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-[#f2c9a9] transition-transform duration-500 ${
                          reversed
                            ? "translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5"
                            : "-translate-x-3 translate-y-3 group-hover:-translate-x-5 group-hover:translate-y-5"
                        }`}
                      />
                      <div className="relative h-64 rounded-3xl overflow-hidden border-4 border-[#efe4d2] shadow-md">
                        <iframe
                          title={`${event.title} map`}
                          src={event.mapSrc}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Color of the day */}
        <div className="mt-24 text-center">
          <p
            className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-5"
            data-aos="fade-up"
          >
            Color of the day
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { name: "Brown", hex: "#4a3226" },
              { name: "Green", hex: "#7a8b64" },
              { name: "Peach", hex: "#f2c9a9" },
              { name: "Milk", hex: "#fffaf0" },
            ].map((c, i) => (
              <div
                key={c.name}
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-delay={i * 150}
                className="flex flex-col items-center gap-2 group/swatch"
              >
                <span
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover/swatch:-translate-y-2 group-hover/swatch:scale-110"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="font-body text-sm italic text-[#4a3226]/70">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}