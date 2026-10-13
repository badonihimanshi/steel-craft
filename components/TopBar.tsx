import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-black/5 bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-graphite">
            <span className="font-display text-lg font-semibold tracking-wide text-copper-light">
              SC
            </span>
          </div>
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold tracking-wide text-graphite">
              STEELCRAFT{" "}
              <span className="text-copper">INDUSTRIES</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
              Stainless Steel Pipes &amp; Tubes
            </p>
          </div>
        </div>

        {/* Contact + partner marks */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-copper/10 text-copper">
              <Phone size={16} strokeWidth={2.5} />
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                Call us
              </p>
              <p className="font-display text-sm font-medium text-graphite">
                +91-98XXX-XXXXX
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 border-l border-black/10 pl-8 sm:flex">
            <span className="font-display text-sm font-semibold tracking-wide text-ink/70">
              SCI<sup className="text-[10px]">&reg;</sup>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/50">
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
