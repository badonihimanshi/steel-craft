import {
  Box,
  Scissors,
  Ruler,
  Sparkles,
  Search,
  PackageCheck,
  Truck,
  ArrowRight,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";

const forwardSteps = [
  { label: "Raw Material", icon: Box },
  { label: "Tube Mill", icon: Ruler },
  { label: "Cutting", icon: Scissors },
  { label: "Straightening", icon: ArrowRight },
];

const returnSteps = [
  { label: "Polish", icon: Sparkles },
  { label: "Inspection", icon: Search },
  { label: "Packing", icon: PackageCheck },
  { label: "Delivery", icon: Truck },
];

function Step({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-steel/30 bg-white text-steel">
        <Icon size={26} strokeWidth={1.75} />
      </div>
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink/70">
        {label}
      </span>
    </div>
  );
}

export default function ProcessFlow() {
  return (
    <div className="mt-12">
      {/* Forward row */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-between">
        {forwardSteps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-6">
            <Step label={step.label} Icon={step.icon} />
            {i < forwardSteps.length - 1 && (
              <ArrowRight
                size={22}
                className="hidden flex-none text-copper sm:block"
              />
            )}
          </div>
        ))}
      </div>

      {/* Turn */}
      <div className="my-6 flex justify-center sm:justify-end sm:pr-8">
        <ArrowDown size={22} className="text-copper" />
      </div>

      {/* Return row (reversed visually to suggest the loop back) */}
      <div className="flex flex-wrap-reverse items-center justify-center gap-6 sm:flex-nowrap sm:flex-row-reverse sm:justify-between">
        {returnSteps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-6">
            <Step label={step.label} Icon={step.icon} />
            {i < returnSteps.length - 1 && (
              <ArrowRight
                size={22}
                className="hidden flex-none rotate-180 text-copper sm:block"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
