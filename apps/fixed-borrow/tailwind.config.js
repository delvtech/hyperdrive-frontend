/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        midnight: "#121520",
        dawn: "#2C3144",
        dawnAccent: "#434C6D",
        inputBorder: "#3C4979",
        darkButton: "#2A325A",
        secondaryText: "#8792BB",
        lightText: "#DADEED",
        lightButton: "#576CBD",
        success: "#1AE483",
        pinkSlip: "#FF78D9",
        sun: "#EEB857",
        // for use in gradients
        pinkSlipBurst: { start: "#DA6DF8", middle: "#FF6881", end: "#F28ED6" },
        sunBurst: {
          start: "#E9ED73",
          end: "#FFA977",
        },
      },
    },
    daisyui: {
      prefix: "daisy-",
      themes: [
        {
          black: {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            ...require("daisyui/src/colors/themes")["[data-theme=black]"],
            primary: "#ff00ff", // Collateral is pink, because in fast-and-the-furious they use pink slips as collateral
            secondary: "linear-gradient(91.08deg, #E9ED73 0%, #FFA977 100%)",

            info: "#00ffff", // lighter shade of blue so outlined buttons are legible
            success: "#00ff7f", // lighter shade of green so outlined buttons are legible
          },
        },
      ],
    },
  },
};
