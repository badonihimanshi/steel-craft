"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const applications = [
  { name: "Aerospace", seed: "aerospace" },
  { name: "Industrial Heating", seed: "industrialheating" },
  { name: "Oil & Gas Upstream", seed: "oilgasupstream" },
  { name: "Automotive", seed: "automotive" },
  { name: "Chemical Processing", seed: "chemicalprocessing" },
  { name: "Medical Devices", seed: "medicaldevices" },
  { name: "Nuclear Power Gen.", seed: "nuclearpower" },
  { name: "Oil & Gas Downstream", seed: "oilgasdownstream" },
  { name: "Renewable Energy", seed: "renewableenergy" },
];

export default function ProductApplications() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 16 : el.clientWidth / 4;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="applications" className="bg-canvas py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-graphite sm:text-4xl">
            Product <span className="text-copper">Applications</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-copper" />
        </div>

        <div className="relative mt-8 sm:mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {applications.map((app) => (
              <div
                key={app.name}
                data-card
                className="group w-[75%] flex-none snap-start overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md sm:w-[46%] lg:w-[23.5%]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${app.seed}/500/400`}
                    alt={app.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-4 sm:p-5">
                  <h3 className="font-display text-base font-semibold text-graphite">
                    {app.name}
                  </h3>
                  <a
                    href="#contact"
                    className="mt-4 inline-block bg-copper px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-copper-light"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll applications left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/3 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-graphite shadow-md transition-colors hover:bg-copper hover:text-white sm:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Scroll applications right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/3 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-graphite shadow-md transition-colors hover:bg-copper hover:text-white sm:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
