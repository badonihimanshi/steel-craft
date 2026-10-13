import type { Metadata } from "next";
import { Check } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Quality Assurance | SteelCraft Industries",
  description:
    "How SteelCraft Industries tests and controls quality across raw material, in-process and finished stainless steel pipes and tubes.",
};

const serviceCommitments = [
  "Consistent, stated quality on every order",
  "On-time delivery against the agreed schedule",
  "Responsive service at every stage, not just at handoff",
];

const testingStages = [
  "Incoming raw material inspection",
  "In-process control at each production stage",
  "Finished product testing before dispatch",
];

export default function QualityAssurancePage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <PageHeader title="Quality Assurance" imageSeed="qualitybanner" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-ink/70">
          SteelCraft Industries works toward one outcome: pipes and tubes
          that meet the specification you ordered, every time, delivered on
          the schedule we agreed to. That standard holds whether the order
          is a single test batch or a running contract.
        </p>

        <h2 className="mt-10 font-display text-xl font-semibold text-graphite">
          What we commit to
        </h2>
        <ul className="mt-4 space-y-3">
          {serviceCommitments.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink/70">
              <Check
                size={18}
                className="mt-0.5 flex-none text-copper"
                strokeWidth={2.5}
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-ink/70">
          Our quality management system is assessed against ISO 9001:2015,
          covering stainless steel pipes and tubes. Alongside that
          certification, we run an in-house testing lab and apply the same
          batch-wise checks to every order:
        </p>
        <ul className="mt-4 space-y-3">
          {testingStages.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink/70">
              <Check
                size={18}
                className="mt-0.5 flex-none text-copper"
                strokeWidth={2.5}
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 border border-ink/10 bg-white p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
            Certification
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-graphite">
            ISO 9001:2015 — Quality Management System
          </p>
          <p className="mt-1 text-sm text-ink/60">
            Placeholder — replace with your actual certificate number and a
            link to the certificate (see the Certificates page).
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
