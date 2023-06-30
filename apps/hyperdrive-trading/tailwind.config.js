/** @type {import('tailwindcss').Config} */
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
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        night: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#F4B1FF",
          secondary: "#8ABBFF",
          accent: "#D4F17E",

          success: "#61E4A3",
          warning: "#FF9031",
          error: "#E66E65",

          "base-100": "#151427",
          "base-content": "#D6D5F6",

          neutral: "#425079",
          "neutral-content": "#9aa1cb",
        },
      },
    ],
    prefix: "daisy-",
  },
};
