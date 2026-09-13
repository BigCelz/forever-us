export default function Footer() {
  return (
    <footer className="bg-ink text-cream text-center py-20 px-6">
      <p className="font-body text-xs tracking-wideish uppercase text-green-600 mb-6">
        #AE27
      </p>

      <h2 className="font-display text-5xl md:text-7xl">
        Amara <span className="italic text-green-600">&</span> Efe
      </h2>

      <p className="font-body text-sm tracking-wideish uppercase text-white mt-8 font-bold">
        March 2027
      </p>

      <p className="font-body text-xs tracking-wideish uppercase text-white/60 mt-16">
        Made with{" "}
        <span className="underline underline-offset-4 decoration-white text-white">
          love
        </span>
      </p>
    </footer>
  );
}
