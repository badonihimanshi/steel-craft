import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product Range | SteelCraft Industries",
  description:
    "Size, thickness and specification range for SteelCraft Industries' stainless steel pipes and tubes.",
};

const rows = [
  {
    material: "ERW Pipes & Tubes",
    size: "12.7mm OD to 101.6mm OD",
    thickness: "0.58mm to 4.0mm",
    spec: "ASTM A-269, A-249, A-268, A-554",
  },
  {
    material: "Welded Square Tubes",
    size: "10mm × 10mm to 80mm × 80mm",
    thickness: "0.68mm to 4.0mm",
    spec: "ASTM A-269, A-249, A-268, A-554",
  },
  {
    material: "Welded Rectangular Tubes",
    size: "10mm × 20mm to 50mm × 100mm",
    thickness: "0.80mm to 4.0mm",
    spec: "ASTM A-269, A-249, A-268, A-554",
  },
];

export default function ProductRangePage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <PageHeader title="Product Range" imageSeed="rangebanner" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-x-auto border border-ink/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-graphite text-white">
                <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                  S.No.
                </th>
                <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                  Material
                </th>
                <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                  Size
                </th>
                <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                  Thickness
                </th>
                <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                  Specification
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.material}
                  className={i % 2 === 0 ? "bg-white" : "bg-canvas"}
                >
                  <td className="px-4 py-4 align-top font-mono text-sm text-ink/60">
                    {i + 1}
                  </td>
                  <td className="px-4 py-4 align-top font-display text-sm font-medium text-graphite">
                    {row.material}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-ink/70">
                    {row.size}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-ink/70">
                    {row.thickness}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-ink/70">
                    {row.spec}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-ink/60">
          Other sizes are available on request — contact us with your
          specific requirement.
        </p>
      </section>

      <Footer />
    </main>
  );
}
