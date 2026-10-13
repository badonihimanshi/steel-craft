import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product Application | SteelCraft Industries",
  description:
    "Industries and uses our stainless steel pipes and tubes are built for, from domestic fabrication to aerospace systems.",
};

const categories = [
  {
    name: "Domestic",
    seed: "domesticuse",
    items: ["Furniture", "Fabrication", "Railings & staircases", "Interior fittings"],
  },
  {
    name: "Aerospace",
    seed: "aerospaceuse",
    items: [
      "Aerospace systems & components",
      "Hydraulic lines",
      "Engine & airframe tubing",
    ],
  },
  {
    name: "Industrial Heating",
    seed: "heatinguse",
    items: ["Heat exchangers", "Furnace components", "Boiler tubing"],
  },
  {
    name: "Oil & Gas",
    seed: "oilgasuse",
    items: ["Upstream drilling systems", "Downstream processing lines", "Offshore platform piping"],
  },
  {
    name: "Automotive",
    seed: "automotiveuse",
    items: ["Exhaust systems", "Structural tubing", "Fuel & brake lines"],
  },
  {
    name: "Chemical Processing",
    seed: "chemicaluse",
    items: ["Corrosion-resistant piping", "Reactor & vessel tubing", "Transfer lines"],
  },
];

export default function ApplicationPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <PageHeader title="Product Application" imageSeed="applicationbanner" />

      <section className="mx-auto max-w-5xl divide-y divide-ink/10 px-6 py-16">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="grid grid-cols-1 items-center gap-8 py-10 sm:grid-cols-[220px_1fr] first:pt-0"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${cat.seed}/500/400`}
                alt={cat.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-graphite">
                {cat.name}
              </h2>
              <ul className="mt-3 space-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-ink/70"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
