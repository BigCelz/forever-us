const colours = [
  { key: "brown", name: "Brown", swatch: "bg-[#4a3226]" },
  { key: "green", name: "Green", swatch: "bg-[#7a8b64]" },
  { key: "peach", name: "Peach", swatch: "bg-[#f2c9a9]" },
  { key: "milk", name: "Milk", swatch: "bg-[#faf5ec]" },
];

export default function Asoebi() {
  return (
    <div className="min-h-screen flex flex-col bg-[#efe4d2]">
      <main className="flex-1 px-6 py-20">
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-wideish uppercase text-[#6b7d55] font-medium mb-4 mt-3">
            ✦ Asoebi ✦
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-[#4a3226]">
            Dress With <span className="italic shimmer-text">Us</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-14 h-px bg-[#7a8b64]" />
            <span
              className="w-3 h-3 bg-[#f2c9a9] rotate-45"
              style={{ animation: "spinSlow 8s linear infinite" }}
            />
            <span className="w-14 h-px bg-[#7a8b64]" />
          </div>

          <p className="font-body text-base leading-relaxed text-[#4a3226]/80 max-w-xl mx-auto mt-8">
            We'd love to see you in our colours. The colours of the day are
            brown, green, peach and milk.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {colours.map((item) => (
            <div key={item.key} className="border border-[#4a3226]/15">
              <div className={`h-40 md:h-56 ${item.swatch}`} />
              <div className="p-4 text-center bg-[#faf5ec]">
                <h2 className="font-display text-2xl text-[#6b7d55]">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-[#4a3226]/70 text-center max-w-md mx-auto mt-16">
          For questions about the fabric, please reach out to the family
          contact.
        </p>
      </main>
    </div>
  );
}
