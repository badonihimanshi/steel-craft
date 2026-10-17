import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecStrip from "@/components/SpecStrip";
import ProductApplications from "@/components/ProductApplications";
import ProductsPreview from "@/components/ProductsPreview";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <SpecStrip />
      <ProductsPreview />
      <ProductApplications />
      <FounderSection />
      <Footer />
    </main>
  );
}
