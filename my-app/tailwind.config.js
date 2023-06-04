/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Merienda: ["Merienda", "cursive"],
        BodoniModa: ["Bodoni Moda", "serif"],
        ExpletusSans: ["Expletus Sans", "cursive"],
        YatraOne: ["Yatra One", "cursive"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
        HappyMonkey: ["Happy Monkey", "cursive"],
        Aladin: ["Aladin", "cursive"],
      },
    },
  },
  plugins: [],
};
