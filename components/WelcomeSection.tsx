export default function WelcomeSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Facility photo placeholder — replace with a real plant photo */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <img
            src="https://picsum.photos/seed/steelplant/900/700"
            alt="Manufacturing floor"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
            Welcome
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-graphite sm:text-4xl">
            SteelCraft Industries
          </h2>

          <div className="mt-6 flex items-start gap-5">
            <p className="flex-1 text-ink/70">
              Our business philosophy is simple: be the manufacturer other
              engineers trust first. Every coil, pipe and tube that leaves
              our facility is held to ASTM, ASME and ISO tolerances, with
              conformity checks built into each stage of production — not
              bolted on at the end. Customer service has always been at the
              center of how we operate, and we work to support every client
              with flexibility, consistency and a fast turnaround on
              enquiries.
            </p>
            {/* Certification badge placeholder */}
            <div className="hidden h-24 w-24 flex-none items-center justify-center rounded-full border-2 border-dashed border-copper/40 text-center font-mono text-[10px] uppercase leading-tight text-copper sm:flex">
              ISO
              <br />
              9001
            </div>
          </div>

          <a
            href="#founder"
            className="mt-8 inline-block bg-graphite px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-steel"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
