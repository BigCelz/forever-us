const events = [
  {
    title: "Ceremony",
    time: "10:00 AM",
    venue: "St. Leo's Catholic Church",
    address: "12 Admiralty Way, Lekki Phase 1, Lagos",
    mapSrc:
      "https://maps.google.com/maps?q=St.%20Leo's%20Catholic%20Church%2C%2012%20Admiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    title: "Reception",
    time: "1:00 PM",
    venue: "The Palms Garden Hall",
    address: "45 Ozumba Mbadiwe Ave, Victoria Island, Lagos",
    mapSrc:
      "https://maps.google.com/maps?q=The%20Palms%20Garden%20Hall%2C%2045%20Ozumba%20Mbadiwe%20Ave%2C%20Victoria%20Island%2C%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-[#efe4d2]">
      <main className="flex-1 flex flex-col items-center px-6 py-20">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            Schedule of Events
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#4a3226]">
            Event <span className="italic text-[#7a8b64]">Details</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-14 h-px bg-[#7a8b64]" />
            <span className="w-2.5 h-2.5 bg-[#f2c9a9] rotate-45" />
            <span className="w-14 h-px bg-[#7a8b64]" />
          </div>
        </div>

        <div className="w-full max-w-4xl divide-y divide-[#e4e9d8]">
          {events.map((event) => (
            <div
              key={event.title}
              className="py-10 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl text-[#4a3226] italic mb-2">
                  {event.title}
                </h2>
                <p className="font-body text-sm tracking-wideish uppercase text-[#7a8b64] mb-4">
                  {event.time}
                </p>
                <p className="font-body text-base text-[#4a3226]/80">
                  {event.venue}
                </p>
                <p className="font-body text-sm text-[#4a3226]/60">
                  {event.address}
                </p>
              </div>

              <div className="w-full md:w-72 h-48 rounded-lg overflow-hidden shadow-sm border border-[#f2c9a9]/60 shrink-0">
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
          ))}
        </div>

        <p className="font-body text-sm text-[#4a3226]/60 italic mt-16">
          Dress code: Cool tones — sage, dusty blue, ivory
        </p>
      </main>
    </div>
  );
}