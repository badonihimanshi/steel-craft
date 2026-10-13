const products = [
  {
    name: "Seamless Pipes",
    note: "OD 6mm – 219mm, schedule 5S to 80S",
  },
  {
    name: "Welded Tubes",
    note: "ERW & TIG welded, polished or mill finish",
  },
  {
    name: "Square & Rectangular",
    note: "Structural sections for fabrication",
  },
  {
    name: "U-Bend Tubes",
    note: "Heat-exchanger grade, tight radius tolerance",
  },
];

export default function ProductsPreview() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
            Catalogue
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-graphite sm:text-4xl">
            Our Products
          </h2>
        </div>
        <a
          href="#range"
          className="hidden font-display text-sm font-medium uppercase tracking-wide text-steel hover:text-copper sm:block"
        >
          Full product range &rarr;
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.name}
            className="group flex flex-col justify-between bg-canvas p-6 transition-colors hover:bg-graphite"
          >
            <div className="mb-8 h-1 w-10 bg-copper transition-colors group-hover:bg-copper-light" />
            <div>
              <h3 className="font-display text-lg font-semibold text-graphite group-hover:text-white">
                {p.name}
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-ink/60 group-hover:text-white/60">
                {p.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
