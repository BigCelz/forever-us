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
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center px-6 py-20">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-wideish uppercase text-green-600 font-medium mb-4 mt-3">
            Schedule of Events
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#401d15]">
            Event <span className="italic text-green-600">Details</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-14 h-px bg-green-600" />
            <span className="w-2.5 h-2.5 bg-green-600 rotate-45" />
            <span className="w-14 h-px bg-green-600" />
          </div>
        </div>

        <div className="w-full max-w-4xl divide-y divide-sage-light">
          {events.map((event) => (
            <div
              key={event.title}
              className="py-10 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl text-ink italic mb-2">
                  {event.title}
                </h2>
                <p className="font-body text-sm tracking-wideish uppercase text-green-500 mb-4">
                  {event.time}
                </p>
                <p className="font-body text-base text-ink/80">{event.venue}</p>
                <p className="font-body text-sm text-ink/50">{event.address}</p>
              </div>

              <div className="w-full md:w-72 h-48 rounded-lg overflow-hidden shadow-sm border border-sage-light shrink-0">
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

        <p className="font-body text-sm text-ink/50 italic mt-16">
          Dress code: Cool tones — sage, dusty blue, ivory
        </p>
      </main>
    </div>
  );
}