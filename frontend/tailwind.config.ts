import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17202A",
        campus: "#2563EB",
        coral: "#F97362",
        mint: "#20B486",
        paper: "#F7F4EE"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
