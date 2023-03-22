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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        midnight: "#121520",
        dawn: "#293047",
        dawnAccent: "#434C6D",
        inputBg: "#191E2E",
        inputBorder: "#3C4979",
        darkButton: {
          DEFAULT: "#2A325A",
          hover: "#374681",
        },
        secondaryText: "#A4ABC6",
        lightText: "#DADEED",
        lightButton: {
          DEFAULT: "#576CBD",
          hover: "#3F5093",
        },
        success: "#1AE483",
        pinkSlip: "#FF78D9",
        sun: "#EEB857",
        // for use in gradients, see:
        // https://v2.tailwindcss.com/docs/gradient-color-stops
        pinkSlipBurst: {
          start: {
            DEFAULT: "#DA6DF8",
            hover: "#E38FFA",
          },
          end: {
            DEFAULT: "#FF6881",
            hover: "#FF8A9D",
          },
        },
        sunBurst: {
          start: {
            DEFAULT: "#E9ED73",
            hover: "#EFF297",
          },
          end: {
            DEFAULT: "#FFA977",
            hover: "#FFC29E",
          },
        },
      },
      fontSize: {
        sm: typeScale.sm.fontSize,
        body: typeScale.body.fontSize,
        lg: typeScale.lg.fontSize,
        h6: typeScale.h6.fontSize,
        h5: typeScale.h5.fontSize,
        h4: typeScale.h4.fontSize,
        h3: typeScale.h3.fontSize,
        h2: typeScale.h2.fontSize,
        h1: typeScale.h1.fontSize,
      },
      lineHeight: {
        sm: typeScale.sm.lineHeight,
        body: typeScale.body.lineHeight,
        lg: typeScale.lg.lineHeight,
        h6: typeScale.h6.lineHeight,
        h5: typeScale.h5.lineHeight,
        h4: typeScale.h4.lineHeight,
        h3: typeScale.h3.lineHeight,
        h2: typeScale.h2.lineHeight,
        h1: typeScale.h1.lineHeight,
      },
    },
  },
};
