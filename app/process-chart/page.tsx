import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Process Chart | SteelCraft Industries",
  description:
    "How SteelCraft Industries manufactures stainless steel welded tubes, from raw material through to delivery.",
};

export default function ProcessChartPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <PageHeader title="Process Chart" imageSeed="processbanner" />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-ink/70">
          Our stainless steel welded tubes are produced on purpose-built
          tube mills. Strip is slit to precise width, then continuously
          formed into a tubular shape and welded by TIG (Tungsten Inert
          Gas) welding — a fully automated, closely monitored process. The
          strip edges are heated and fused under an argon shield, without
          filler metal, while electronic controls hold the arc stable and
          correctly positioned throughout.
        </p>

        <ProcessFlow />
      </section>

      <Footer />
    </main>
  );
}
