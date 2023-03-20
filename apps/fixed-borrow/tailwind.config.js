// eslint-disable-next-line @typescript-eslint/no-var-requires
const { gudTypeScale, rounder } = require("gud-type");

const typeScale = gudTypeScale(
  ["sm", "body", "lg", "h6", "h5", "h4", "h3", "h2", "h1"],
  {
    // make "body" the 0 index
    startingIndex: -1,
    // set the base size (size at 0) to 13
    base: 13,
    // Set the scale multiplier/ratio to 2
    multiplier: 2,
    // Make it take 5 steps to reach each multiple
    // for example, if starting at 4 with 5 steps to reach it's next multiple of
    // 2 (8), the scale would look like: 4, 4.75, 5.5, 6.25, 7, 8
    steps: 5,
    // round each font size up to the closest whole number
    round: rounder(1, "up"),
    unit: "px",
  },
);

console.log("Type scale:", typeScale);

// Split up the styles by font size and line height
const fontSize = {};
const lineHeight = {};
for (const [name, styles] of Object.entries(typeScale)) {
  fontSize[name] = styles.fontSize;
  lineHeight[name] = styles.lineHeight;
}

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
        // for use in gradients, see:
        // https://v2.tailwindcss.com/docs/gradient-color-stops
        pinkSlipBurst: { start: "#DA6DF8", middle: "#FF6881", end: "#F28ED6" },
        sunBurst: {
          start: "#E9ED73",
          end: "#FFA977",
        },
        fontSize,
        lineHeight,
      },
    },
  },
};
