import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0F3D4A",
        "graphite-dark": "#082830",
        steel: "#2E7D8C",
        "steel-light": "#4FA3B2",
        copper: "#D9892B",
        "copper-light": "#EDA54B",
        canvas: "#F7F4EE",
        ink: "#1E2B30",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
