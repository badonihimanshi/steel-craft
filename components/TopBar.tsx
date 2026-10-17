import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-black/5 bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        {/* Logo mark */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-sm bg-graphite sm:h-11 sm:w-11">
            <span className="font-display text-base font-semibold tracking-wide text-copper-light sm:text-lg">
              SC
            </span>
          </div>
          <div className="min-w-0 leading-tight">
            <p className="font-display text-base font-semibold tracking-wide text-graphite sm:text-xl">
              STEELCRAFT{" "}
              <span className="text-copper">INDUSTRIES</span>
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/60 sm:text-[11px] sm:tracking-[0.2em]">
              Stainless Steel Pipes &amp; Tubes
            </p>
          </div>
        </div>

        {/* Contact + partner marks */}
        <div className="flex items-center gap-4 sm:gap-8">
          <a
            href="tel:+919354077813"
            aria-label="Call us at +91 9354077813"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/10 text-copper sm:hidden"
          >
            <Phone size={18} strokeWidth={2.5} />
          </a>
          <div className="hidden items-center gap-2 sm:flex sm:gap-3">
            <a
              href="tel:+919354077813"
              aria-label="Call us at +91 9354077813"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-copper/10 text-copper"
            >
              <Phone size={16} strokeWidth={2.5} />
            </a>
            <div className="leading-tight">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                Call us
              </p>
              <p className="font-display text-sm font-medium text-graphite">
                +91 9354077813
              </p>
            </div>
          </div>
          {/* <div className="hidden items-center gap-4 border-l border-black/10 pl-8 sm:flex">
            <span className="font-display text-sm font-semibold tracking-wide text-ink/70">
              SCI<sup className="text-[10px]">&reg;</sup>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/50">
              ISO 9001:2015 Certified
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
