// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // We are replacing the entire theme object to add our new colors
    extend: {
      colors: {
        // Your existing brand colors remain the same
        'primary': {
          DEFAULT: '#0DA3BE',
          light: '#02ABC9',
          dark: '#1A889C',
        },
        'accent': {
          DEFAULT: '#1D9AAF',
        },

        // NEW: Professional Dark Theme Palette
        // Inspired by the reference site for a premium feel
        'dark': {
          'bg': '#111827',         // The main background (Tailwind's gray-900)
          'surface': '#1F2937',    // Card backgrounds (Tailwind's gray-800)
          'text': '#F3F4F6',        // Primary text color (Tailwind's gray-100)
          'text-muted': '#9CA3AF',  // Secondary text color (Tailwind's gray-400)
        }
      }
    },
  },
  plugins: [],
};
export default config;