/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}", "index.html"],
  theme: {
    colors: {
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
      // Used for secondary buttons and their states
      purple: {
        100: "#DBCCFF",
        DEFAULT: "#AB87FF",
        800: "#7033FF",
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
    fontSize: {
      // body texts
      p1: ["18px", { lineHeight: "22px" }],
      p2: ["16px", { lineHeight: "20px" }],
      p3: ["14px", { lineHeight: "16px" }],
      p4: ["12px", { lineHeight: "14px" }],
      // Headings
      h1: ["64px", { lineHeight: "77px" }],
      h2: ["40px", { lineHeight: "48px" }],
      h3: ["32px", { lineHeight: "38px" }],
      h4: ["24px", { lineHeight: "30px" }],
      h5: ["20px", { lineHeight: "24px" }],
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-debug-screens")],
  daisyui: {
    prefix: "daisy-",
    themes: [
      {
        hyperdrive: {
          primary: "#BAFF29", // lime DEFAULT
          "primary-content": "#10191D", // Neutral-900

          accent: "#9BF3F0", // teal DEFAULT
          "accent-content": "#10191D", // Neutral-900

          "base-100": "#10191D", // Neutral-900
          "base-200": "#1A272D", // Neutral-800
          "base-content": "#EFF4F6", // Neutral-50

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
