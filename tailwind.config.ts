import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#1F2937",
        "graphite-dark": "#14181F",
        steel: "#35607A",
        "steel-light": "#4C7C9B",
        copper: "#B8703A",
        "copper-light": "#D08A50",
        canvas: "#F5F3EF",
        ink: "#2B2F33",
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
