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
      keyframes: {
        ez: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        ezn: "ez 0.2s ease-in 1",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
