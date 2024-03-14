/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}", "index.html"],
  theme: {
    colors: {
      aquamarine: {
        100: "#E8FFF7",
        DEFAULT: "#15FFAB",
        600: "#11cc89",
      },
      skyBlue: {
        100: "#95ECFF",
        DEFAULT: "#14D0F9",
        800: "#00A7CC",
      },
      eggplant: {
        100: "#F3E9ED",
        DEFAULT: "#753F53",
        600: "#462632",
      },

      // Used for primary buttons, links, tabs and states
      lime: {
        100: "#DFFF99",
        DEFAULT: "#BAFF29",
        800: "#8BCC00",
      },
      // Used for interactive text and components such as tabs, tags and
      // sliders
      teal: {
        100: "#E8FCFC",
        DEFAULT: "#9BF3F0",
        800: "#49E9E4",
        900: "#16B6B1",
      },

      gray: {
        50: "#EFF4F6",
        100: "#BDD2DB",
        400: "#9CBBC9",
        600: "#243942",
        700: "#202F36",
        800: "#1A272D",
        900: "#10191D",
      },
    },
    fontFamily: {
      chakraPetch: ["Chakra Petch"],
      inter: ["Inter"],
      dmMono: ["DM Mono"],
    },
    fontSize: {
      // body texts
      lg: ["18px", { lineHeight: "22px" }],
      md: ["16px", { lineHeight: "20px" }],

      // design doc says `sm` should have 16px lineHeight, but it looks too
      // squeezed when there are 2 lines of text, so we are intentionally
      // deviating by a few pixels to make running text look better
      sm: ["14px", { lineHeight: "18px" }],

      xs: ["12px", { lineHeight: "14px" }],
      "2xs": ["10px", { lineHeight: "12px" }],
      // Headings
      h1: ["64px", { lineHeight: "77px" }],
      h2: ["40px", { lineHeight: "48px" }],
      h3: ["32px", { lineHeight: "38px" }],
      h4: ["24px", { lineHeight: "30px" }],
      h5: ["20px", { lineHeight: "28px" }],
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-debug-screens")],
  daisyui: {
    prefix: "daisy-",
    themes: [
      {
        hyperdrive: {
          primary: "#15FFAB", // Aquamarine DEFAULT
          "primary-content": "#10191D", // Neutral-900

          accent: "#14D0F9", // teal DEFAULT
          "accent-content": "#10191D", // Neutral-900

          neutral: "#1A272D", // Neutral-800
          "neutral-content": "#9CBBC9", // Neutral-800

          "base-100": "#10191D", // Gray-900
          "base-200": "#1A272D", // Gray-800
          "base-content": "#EFF4F6", // Gray-50

          error: "#FF5757",
          success: "#36D399",

          "--tab-radius": "0.4rem",
          "--rounded-box": "2rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.4rem",
          "--rounded-badge": "0.4rem",
        },
      },
    ],
  },
};
