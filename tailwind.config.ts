import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "gray-55": "#f8f8f8",
        "gray-450": "#9a9a9e",
        "gray-505": "#7a7a7e",
        "gray-650": "#5a5a5e",
        "gray-250": "#d8d8dc",
      },
    },
  },
  plugins: [],
};

export default config;
