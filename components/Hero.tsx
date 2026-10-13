import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite-dark">
      {/* Textured backdrop standing in for a facility photo — swap for a real
          plant photo in /public and reference it with next/image */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #24303C 0px, #24303C 2px, #1B242D 2px, #1B242D 64px)",
        }}
      />
      <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-graphite-dark via-graphite-dark/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-copper-light">
            Est. Manufacturing &middot; Delhi NCR
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Precision stainless steel,
            <br />
            <span className="text-copper-light">built for the long run.</span>
          </h1>
          <p className="mt-5 max-w-md text-white/70">
            Pipes and tubes engineered to ASTM, ASME and ISO tolerances —
            supplying process, architectural and infrastructure projects
            across India.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#products"
              className="bg-copper px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-copper-light"
            >
              View Product Range
            </a>
            <a
              href="#contact"
              className="border border-white/30 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:border-copper-light hover:text-copper-light"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-copper"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-copper"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full ${
              i === 0 ? "bg-copper-light" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
