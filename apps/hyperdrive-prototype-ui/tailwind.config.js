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
        glitch: {
          "0%": {
            transform: "none",
            opacity: "1",
          },
          "7%": {
            transform: "skew(-0.5deg, -0.9deg)",
            opacity: 0.75,
          },
          "10%": {
            transform: "none",
            opacity: 1,
          },
          "27%": {
            transform: "none",
            opacity: 1,
          },
          "30%": {
            transform: "skew(0.8deg, -0.1deg)",
            opacity: 0.75,
          },
          "35%": {
            transform: "none",
            opacity: 1,
          },
          "52%": {
            transform: "none",
            opacity: 1,
          },
          "55%": {
            transform: "skew(-1deg, 0.2deg)",
            opacity: 0.75,
          },
          "50%": {
            transform: "none",
            opacity: 1,
          },
          "72%": {
            transform: "none",
            opacity: 1,
          },
          "75%": {
            transform: "skew(0.4deg, 1deg)",
            opacity: 0.75,
          },
          "80%": {
            transform: "none",
            opacity: 1,
          },
          "100%": {
            transform: "none",
            opacity: 1,
          },
        },
      },
      animation: {
        ezn: "ez 0.2s ease-in 1",
        glitch: "glitch 2.5s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
