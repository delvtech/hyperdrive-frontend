/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Akira: ["Akira", "sans-serif"],
        Quantico: ["Quantico"],
      },
      colors: {
        "bg-base": "#171B2C",
        "bg-base-200": "#0E111B",
        "hyper-pink": "#F4B1FF",
        "hyper-green": "#61E4A3",
        "off-white": "#F0F0F0",
        "giga-blue-100": "99A1D3",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
