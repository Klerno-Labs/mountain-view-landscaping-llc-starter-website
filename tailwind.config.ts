import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#143628", // Deep Forest Green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4A5D52", // Muted Sage
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E9B44C", // Muted Gold
          foreground: "#143628",
        },
        highlight: {
          DEFAULT: "#D98324", // Terracotta/Clay
          foreground: "#FFFFFF",
        },
        background: {
          DEFAULT: "#F9F7F2", // Bone/Warm White
          surface: "#FFFFFF", // Pure White
        },
        text: {
          main: "#1F2937", // Charcoal
          muted: "#6B7280", // Cool Gray
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(20, 54, 40, 0.1), 0 2px 4px -1px rgba(20, 54, 40, 0.06)",
        hover: "0 10px 15px -3px rgba(20, 54, 40, 0.15), 0 4px 6px -2px rgba(20, 54, 40, 0.1)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "section-gap": "120px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;