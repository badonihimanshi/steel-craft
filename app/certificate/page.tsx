import type { Metadata } from "next";
import { Award } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Certificates | SteelCraft Industries",
  description:
    "Quality and partnership certifications held by SteelCraft Industries.",
};

export default function CertificatePage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <PageHeader title="Certificate" imageSeed="certbanner" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-ink/70">
          Scanned copies of our certifications go here — quality management
          system certificates, authorised-partner / MOU documents, and any
          material test certificates you want visitors to be able to view.
        </p>

        {/* Placeholder certificate frame — replace with a real scanned
            certificate image (see README for where to drop it in) */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-steel/30 bg-white p-16 text-center">
          <Award size={40} className="text-copper" strokeWidth={1.5} />
          <p className="font-display text-lg font-semibold text-graphite">
            Certificate placeholder
          </p>
          <p className="max-w-sm text-sm text-ink/60">
            Drop a scanned certificate (ISO 9001:2015, an authorised-dealer
            MOU, test certificates, etc.) in as an image here, one per
            card, once your client sends them over.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
