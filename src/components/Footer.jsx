export default function Footer() {
  return (
    <footer className="bg-[#3a2a20] text-[#faf5ec] text-center py-20 px-6">
      <p className="font-body text-xs tracking-wideish uppercase text-[#f2c9a9] mb-6">
        #FI26
      </p>

      <h2 className="font-display text-5xl md:text-7xl">
        Faith <span className="italic text-[#f2c9a9]">&</span> Isaac
      </h2>

      <p className="font-body text-sm tracking-wideish uppercase text-[#faf5ec] mt-8 font-bold">
        December 2026
      </p>

      <p className="font-body text-xs tracking-wideish uppercase text-[#faf5ec]/60 mt-16">
        Made with{" "}
        <spa>
          ❤️
        </spa>{" "}
        by{" "}
        <a
          href="https://wa.me/2347083429516"
          target="_blank"
          rel="noreferrer"
          className="text-[#f2c9a9] hover:text-[#faf5ec] transition-colors duration-200 underline underline-offset-4 decoration-[#f2c9a9]"
        >
          Celz
        </a>
      </p>
    </footer>
  );
}
