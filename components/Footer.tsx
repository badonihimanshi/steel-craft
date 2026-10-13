export default function Footer() {
  return (
    <footer id="contact" className="bg-graphite-dark py-8 text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} SteelCraft Industries. All rights
          reserved.
        </p>
        <p className="font-mono text-xs">
          Built by{" "}
          <span className="text-white/80">Himanshi Badoni</span>{" "}
          <span className="text-white/40">(internship project)</span>
        </p>
      </div>
    </footer>
  );
}
