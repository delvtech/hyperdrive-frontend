/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lean: "#F4B1FF",
        "racing-green": "#D5FF90",
      },
      fontFamily: {
        Akira: ["Akira", "sans-serif"],
        Retro: ["RetroGaming", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
