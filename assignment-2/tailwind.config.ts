import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-drop': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blueNav: 'var(--blue-nav)',
        content: 'var(--content)',
        label: 'var(--label)',
        chipBg: 'var(--chip-bg)',
        chipBgActive: 'var(--chip-bg-active)',
        chipText: 'var(--chip-text)',
        chipTextActive: 'var(--chip-text-active)',
        cardDescription: 'var(--card-desc)',
        cardTime: 'var(--card-time)',
      },
    },
  },
  plugins: [],
} satisfies Config;
