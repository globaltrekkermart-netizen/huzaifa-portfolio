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
        cream: {
          DEFAULT: "#F6EFE1",
          50: "#FCF8F2",
          100: "#F6EFE1",
          200: "#EFE3CD",
        },
        forest: {
          DEFAULT: "#334B35",
          dark: "#273A29",
          light: "#3F5D42",
        },
        marigold: {
          DEFAULT: "#FDAE16",
          dark: "#E69B0A",
          light: "#FED068",
        },
        coral: {
          DEFAULT: "#FD6036",
          dark: "#E6481E",
        },
        charcoal: {
          DEFAULT: "#111311",
          dark: "#0A0B0A",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Chonburi", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        pill: "0 4px 14px 0 rgba(253, 96, 54, 0.25)",
        goldPill: "0 4px 14px 0 rgba(253, 174, 22, 0.35)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.08)",
        darkCard: "0 14px 35px -5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
