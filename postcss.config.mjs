// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;

// postcss.config.mjs
const config = {
  plugins: {
    tailwindcss: {}, // <-- Use this for v3
    autoprefixer: {},
  },
};
export default config;