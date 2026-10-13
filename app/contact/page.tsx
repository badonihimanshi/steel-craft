import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | SteelCraft Industries",
  description: "Get in touch with SteelCraft Industries.",
};

export default function ContactPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <PageHeader title="Contact Us" imageSeed="contactbanner" />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-graphite">
              Get in Touch
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="font-display text-base font-semibold text-graphite">
                  SteelCraft Industries
                </p>
                <p className="text-ink/60">Stainless Steel Pipes and Tubes</p>
              </div>

              <div className="flex items-start gap-3 text-ink/70">
                <MapPin size={18} className="mt-0.5 flex-none text-copper" />
                <span>
                  Placeholder address — Plot No. XX, Industrial Area,
                  [City], [State], India [PIN]
                </span>
              </div>

              <div className="flex items-start gap-3 text-ink/70">
                <Phone size={18} className="mt-0.5 flex-none text-copper" />
                <span>+91-98XXX-XXXXX, +91-9XXXX-XXXXX</span>
              </div>

              <div className="flex items-start gap-3 text-ink/70">
                <Mail size={18} className="mt-0.5 flex-none text-copper" />
                <span>info@steelcraftindustries.com</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-graphite">
              Location Map
            </h2>
            <div className="mt-6 aspect-[4/3] overflow-hidden border border-ink/10 sm:aspect-video">
              {/* Placeholder map — swap the q= value for the real facility
                  address once your client confirms it */}
              <iframe
                title="Facility location"
                src="https://www.google.com/maps?q=Industrial+Area,+Delhi+NCR,+India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
