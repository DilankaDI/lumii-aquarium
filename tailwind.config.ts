// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // CRITICAL: This MUST be set to 'class' for next-themes to work.
  darkMode: "class",

  // CRITICAL: This array MUST correctly point to all files where you use Tailwind classes.
  // The './src/**/*.{...}' path recursively finds everything in your src folder.
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // This is where your custom theme colors live.
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0DA3BE',
          light: '#02ABC9',
          dark: '#1A889C',
        },
        'accent': {
          DEFAULT: '#1D9AAF',
        },
        'dark-mode': {
          'primary-text': '#5ce1fb',
          'background': '#0D1A1C',
          'surface': '#102124',
          'muted-text': '#94a3b8',
        }
      }
    },
  },
  plugins: [],
};
export default config;