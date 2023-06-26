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
        akira: ["Akira", "sans-serif"],
        quantico: ["Quantico"],
        rubik: ["Rubik", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        "base-100": "#151427",
        "base-200": "#1A1A33",
        "base-300": "#212140",
        "base-400": "#1F1F3D",
        "base-500": "#30305a",
        "hyper-red": "#E66E65",
        "hyper-green": "#61E4A3",
        "hyper-pink": "#F4B1FF",
        "hyper-orange": "#FF9031",
        "hyper-blue-100": "#D6D5F6",
        "hyper-blue-200": "#8D96C4",
        "hyper-blue-300": "#7680B8",
        "hyper-blue-400": "#425079",
        "section-text": "#8C8CC4",
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
          "base-100": "#30305A",
        },
      },
    ],
    prefix: "daisy-",
  },
};
