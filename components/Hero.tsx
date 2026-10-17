export default function Hero() {
  return (
    <section className="relative hidden overflow-hidden bg-graphite-dark md:block">
      {/* Textured backdrop standing in for a facility photo — swap for a real
          plant photo in /public and reference it with next/image */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #14505F 0px, #14505F 2px, #0C3640 2px, #0C3640 64px)",
        }}
      />
      <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-graphite-dark via-graphite-dark/70 to-transparent" />

      <div className="relative mx-auto grid min-h-[360px] max-w-7xl items-center gap-10 px-4 py-14 sm:min-h-[420px] sm:px-6 sm:py-20 lg:grid-cols-2">
        <div className="max-w-xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper-light sm:text-xs sm:tracking-[0.3em]">
            Est. Manufacturing &middot; Delhi NCR
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Precision stainless steel,
            <br />
            <span className="text-copper-light">built for the long run.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm text-white/70 sm:text-base">
            Pipes and tubes engineered to ASTM, ASME and ISO tolerances —
            supplying process, architectural and infrastructure projects
            across India.
          </p>
          {/* <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#products"
              className="bg-copper px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-copper-light sm:px-6 sm:text-sm"
            >
              View Product Range
            </a>
            <a
              href="#contact"
              className="border border-white/30 px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide text-white/90 transition-colors hover:border-copper-light hover:text-copper-light sm:px-6 sm:text-sm"
            >
              Request a Quote
            </a>
          </div> */}
        </div>

        <div className="hidden overflow-hidden rounded-2xl shadow-lg lg:block">
          <img
            src="https://picsum.photos/seed/steelplant/900/700"
            alt="Manufacturing floor"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
