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
        "base-300": "#161A29",
        "base-400": "#1E263C",
        "base-500": "#171D2E",
        "hyper-pink": "#F4B1FF",
        "hyper-green": "#61E4A3",
        "off-white": "#F0F0F0",
        "giga-blue-100": "#99A1D3",
        "giga-blue-200": "#7680B8",
        "giga-blue-300": "#425079",
        "blue-stroke": "#343F64",
        "text-bright": "#ADB7EB",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
