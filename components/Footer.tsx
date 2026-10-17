export default function Footer() {
  return (
    <footer id="contact" className="bg-graphite-dark py-6 text-white/60 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:items-center sm:gap-3 sm:px-6 sm:text-left">
        <p className="font-body text-[10px] sm:text-xs">
          &copy; {new Date().getFullYear()} SteelCraft Industries. All rights
          reserved.
        </p>
        <p className="font-body text-[10px] sm:text-xs">
          Built by{" "}
          <span className="text-white/80">Himanshi Badoni</span>{" "}
          <span className="text-white/40">(internship project)</span>
        </p>
      </div>
    </footer>
  );
}
