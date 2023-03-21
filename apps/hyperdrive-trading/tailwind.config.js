/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akira: ["Akira", "sans-serif"],
        quantico: ["Quantico"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        base: "#171B2C",
        "base-200": "#0E111B",
        "hyper-pink": "#F4B1FF",
        "hyper-green": "#61E4A3",
        "off-white": "#F0F0F0",
        "giga-blue-100": "#99A1D3",
        "giga-blue-200": "#425079",
        "giga-blue-300": "#7680B8",
      },
      gridTemplateColumns: {
        "protocol-stats": "repeat(4, minmax(0, 110px))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
