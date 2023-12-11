/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { gudTypeScale, rounder } = require("gud-type");
const typeScale = gudTypeScale(
  ["xs", "sm", "body", "lg", "h6", "h5", "h4", "h3", "h2", "h1"],
  {
    // make "body" the 0 index
    startingIndex: -2,
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
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"], // for headers
      },
      colors: {
        "base-300": "#212140",
        "hyper-blue-400": "#425079",
      },
    },
    fontSize: {
      xs: typeScale.xs.fontSize,
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
  plugins: [require("daisyui"), require("tailwindcss-debug-screens")],
  daisyui: {
    themes: [
      {
        lofi: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["lofi"],
          // Tone down the pure black
          neutral: "#333333",
          primary: "#333333",
          secondary: "#333333",
          accent: "#333333",

          error: "#f40000",
          success: "#019d60",

          "--tab-radius": "0.4rem",
          "--rounded-box": "0.4rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.4rem",
          "--rounded-badge": "0.4rem",
        },
      },
    ],
    prefix: "daisy-",
  },
};
