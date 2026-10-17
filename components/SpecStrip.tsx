const specs = [
  "ASTM A312",
  "ASTM A554",
  "ASME SA213",
  "ISO 9001:2015",
  "GRADE 304 / 304L",
  "GRADE 316 / 316L",
  "EN 10217-7",
  "JIS G3448",
];

export default function SpecStrip() {
  const row = [...specs, ...specs];
  return (
    <div className="hidden overflow-hidden border-y border-copper/30 bg-steel md:block">
      <div className="flex animate-[scroll_28s_linear_infinite] gap-10 whitespace-nowrap py-2.5">
        {row.map((spec, i) => (
          <span
            key={i}
            className="font-mono text-xs uppercase tracking-[0.2em] text-white/80"
          >
            {spec} <span className="mx-2 text-copper-light">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
