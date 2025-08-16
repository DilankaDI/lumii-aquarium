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
      },
            keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },

        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        fadeOut: 'fadeOut 0.5s ease-in forwards',
        slowZoom: 'slowZoom 15s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;