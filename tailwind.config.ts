import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F1F5FB",
          100: "#DCE6F4",
          200: "#B9CCE8",
          500: "#2B5BA8",
          600: "#1E4687",
          700: "#16376C",
          800: "#0F2850",
          900: "#0A1C3B",
          950: "#071329",
        },
        emerald: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        paper: "#F7F8FA",
        line: "#E2E7EF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};

export default config;
