import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecStrip from "@/components/SpecStrip";
import WelcomeSection from "@/components/WelcomeSection";
import ProductsPreview from "@/components/ProductsPreview";
import FounderSection from "@/components/FounderSection";
import DirectorMessage from "@/components/DirectorMessage";
import ProductApplications from "@/components/ProductApplications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <SpecStrip />
      <WelcomeSection />
      <ProductsPreview />
      <FounderSection />
      <DirectorMessage />
      <ProductApplications />
      <Footer />
    </main>
  );
}
