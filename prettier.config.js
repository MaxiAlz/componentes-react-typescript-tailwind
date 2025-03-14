/** @type {import('prettier').Config} */
export default {
  plugins: [require("prettier-plugin-tailwindcss")],
  // tailwindcss
  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
};
