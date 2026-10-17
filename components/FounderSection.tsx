export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-graphite-dark py-12 text-white sm:py-16 lg:py-20"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #14505F 0px, #14505F 2px, #0C3640 2px, #0C3640 64px)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-copper-light">
            About Founder
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold sm:text-4xl">
            Our Founder
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            {/* Placeholder bio — replace with your own founder's story */}
            SteelCraft Industries was started with a single idea: that a
            small workshop could hold itself to the same tolerances as a
            much larger mill. What began as a modest fabrication unit grew,
            over two decades, into a facility trusted by process and
            infrastructure clients across the region — built on the same
            insistence on quality that it opened with.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block border border-white/30 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:border-copper-light hover:text-copper-light"
          >
            Read More
          </a>
        </div>

        <div className="overflow-hidden border border-white/10 bg-white/5">
          <img
            src="https://picsum.photos/seed/founderportrait/700/560"
            alt="Founder portrait placeholder"
            className="h-64 w-full object-cover sm:h-80"
          />
          <p className="border-t border-white/10 bg-white px-4 py-3 font-display text-sm font-semibold text-graphite sm:px-5 sm:text-base">
            Founder Name{" "}
            <span className="font-body text-sm font-normal text-ink/60">
              (placeholder — update with real name &amp; title)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
