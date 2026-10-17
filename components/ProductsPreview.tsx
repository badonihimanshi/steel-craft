const products = [
  {
    name: "Seamless Pipes",
    note: "OD 6mm – 219mm, schedule 5S to 80S",
    image: "seamless-pipes",
  },
  {
    name: "Welded Tubes",
    note: "ERW & TIG welded, polished or mill finish",
    image: "welded-tubes",
  },
  {
    name: "Square & Rectangular",
    note: "Structural sections for fabrication",
    image: "steel-sections",
  },
  {
    name: "U-Bend Tubes",
    note: "Heat-exchanger grade, tight radius tolerance",
    image: "u-bend-tubes",
  },
];

export default function ProductsPreview() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-6 sm:gap-6">
        <div>
          {/* <span className="font-mono text-xs uppercase tracking-[0.3em] text-copper">
            Catalogue
          </span> */}
          <h2 className="mt-2 font-display text-2xl font-semibold text-graphite sm:text-4xl">
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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.name}
            className="group overflow-hidden rounded-xl bg-canvas shadow-sm transition-all hover:bg-graphite hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${p.image}/600/450`}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-6 h-1 w-10 bg-copper transition-colors group-hover:bg-copper-light" />
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
