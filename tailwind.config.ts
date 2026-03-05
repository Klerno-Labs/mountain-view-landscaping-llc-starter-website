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
          DEFAULT: "#D98324", // Terracotta
          foreground: "#FFFFFF",
        },
        bone: "#F9F7F2", // Warm White Background
        charcoal: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;