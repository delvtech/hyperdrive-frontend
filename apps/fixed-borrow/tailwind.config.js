/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "daisy-",
    themes: [
      {
        black: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
          primary: "#ff00ff", // Collateral is pink, because in fast-and-the-furious they use pink slips as collateral
          secondary: "#ffff00", // Debt is yellow

          info: "#0080ff", // lighter shade of blue so outlined buttons are legible
          success: "#00ff7f", // lighter shade of green so outlined buttons are legible
        },
      },
    ],
  },
};
