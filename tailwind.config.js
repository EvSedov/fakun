/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E", // Основной темный фон
        secondary: "#72C95E", // Яркий зеленый акцент
        light: "#FFFFFF", // Белый
        gray: {
          dark: "#333333",
          medium: "#4F4F4F",
          light: "#828282",
        },
        overlay: "#181A20CC", // Overlay для hero section по Figma
      },
      fontFamily: {
        prosto: ['"Prosto One"', "cursive"],
        evolventa: ['"Evolventa"', "sans-serif"],
      },
      boxShadow: {
        hero: "0 8px 32px 0 rgba(24,26,32,0.24)", // Тень для hero section по Figma
      },
      dropShadow: {
        hero: "0 2px 8px rgba(0,0,0,0.32)", // Тень для текста hero section
      },
    },
  },
  plugins: [],
};
