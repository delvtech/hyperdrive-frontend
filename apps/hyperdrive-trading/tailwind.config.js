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
        "base-100": "#151427",
        "base-200": "#1A1A33",
        "base-300": "#212140",
        "hyper-red": "#F50A2F",
        "hyper-green": "#61E4A3",
        "hyper-pink": "#F4B1FF",
        "hyper-blue-100": "#D6D5F6",
        "hyper-blue-200": "#8D96C4",
        "hyper-blue-300": "#7680B8",
        "hyper-blue-400": "#425079",
        "section-text": "#8C8CC4",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
