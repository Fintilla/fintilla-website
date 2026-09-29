import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Lavender canvas surfaces
        canvas: {
          DEFAULT: "#F4F1FA",
          soft:    "#F8F6FC",
          muted:   "#EEEBF5",
        },
        // Brand
        fintilla: {
          green:  "#00A878",
          cyan:   "#20B8D8",
          purple: "#57466F",
          purpleLight: "#8B7AAD",
        },
        // Typography
        ink: {
          DEFAULT:   "#17161C",
          secondary: "#686572",
          muted:     "#8A8793",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body:    ["Plus Jakarta Sans", "Inter", "sans-serif"],
        sans:    ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
        serif:   ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        card:   "0 1px 3px rgba(87,70,111,0.06), 0 4px 16px rgba(87,70,111,0.05)",
        "card-hover": "0 4px 24px rgba(87,70,111,0.12), 0 1px 4px rgba(87,70,111,0.08)",
        panel:  "0 2px 8px rgba(87,70,111,0.08), 0 12px 40px rgba(87,70,111,0.08)",
      },
      borderColor: {
        lavender: "rgba(87, 70, 111, 0.12)",
        "lavender-strong": "rgba(87, 70, 111, 0.22)",
        "lavender-subtle": "rgba(87, 70, 111, 0.07)",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "fade-up":   "fadeInUp 0.6s ease forwards",
      },
      backgroundImage: {
        "gradient-trust":    "linear-gradient(135deg, #00A878 0%, #20B8D8 100%)",
        "gradient-lavender": "linear-gradient(135deg, #57466F 0%, #8B7AAD 50%, #20B8D8 100%)",
        "gradient-green":    "linear-gradient(135deg, #00A878 0%, #20B8D8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
