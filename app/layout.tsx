import type { Metadata } from "next";
import { Sora, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "SteelCraft Industries | Stainless Steel Pipes & Tubes",
  description:
    "Manufacturer of stainless steel pipes and tubes for industrial, architectural and process applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${dmSans.variable} ${plexMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
