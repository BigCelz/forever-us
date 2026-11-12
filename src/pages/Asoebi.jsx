const options = [
  {
    key: "bride",
    title: "Bride's Side",
    fabric: "Emerald Aso Oke",
    swatch: "bg-[#7a8b64]",
    details: "Emerald green with gold trim. Gele and ipele to match.",
  },
  {
    key: "groom",
    title: "Groom's Side",
    fabric: "Cream Brocade",
    swatch: "bg-[#e9dfc9]",
    details: "Cream with subtle gold detailing. Cap to match.",
  },
];

export default function Asoebi() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf5ec]">
      <main className="flex-1 px-6 py-20">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-wideish uppercase text-[#7a8b64] font-medium mb-4 mt-3">
            Asoebi
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-[#4a3226]">
            Dress With <span className="italic text-[#7a8b64]">Us</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-14 h-px bg-[#7a8b64]" />
            <span className="w-2.5 h-2.5 bg-[#f2c9a9] rotate-45" />
            <span className="w-14 h-px bg-[#7a8b64]" />
          </div>

          <p className="font-body text-base leading-relaxed text-[#4a3226]/80 max-w-xl mx-auto mt-8">
            We'd love to see you in our colours. Here's what we have in mind
            for each side of the family and friends.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {options.map((item) => (
            <div key={item.key} className="border border-[#f2c9a9]/60">
              <div className={`h-56 ${item.swatch}`} />
              <div className="p-6">
                <p className="font-body text-xs tracking-wideish uppercase text-[#4a3226]/60 mb-2">
                  {item.title}
                </p>
                <h2 className="font-display text-3xl text-[#7a8b64] mb-3">
                  {item.fabric}
                </h2>
                <p className="font-body text-base leading-relaxed text-[#4a3226]/80">
                  {item.details}
                </p>
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
