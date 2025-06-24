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
      },
      fontFamily: {
        prosto: ['"Prosto One"', "cursive"],
        evolventa: ['"Evolventa"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
