import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-drop": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueNav: "var(--blue-nav)",
      },
    },
  },
  plugins: [],
} satisfies Config;
