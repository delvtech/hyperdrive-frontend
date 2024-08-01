import { darkTheme, type Theme } from "@rainbow-me/rainbowkit";

const darkThemePresets = darkTheme();
export const customRainbowTheme: Theme = {
  ...darkThemePresets,
  fonts: {
    body: "Inter",
  },
  radii: {
    ...darkThemePresets.radii,
    connectButton: "100px",
    actionButton: "100px",
  },
  colors: {
    ...darkThemePresets.colors,
    connectButtonBackground: "#202F36", // gray-700
    modalBackground: "#202F36", // gray-700
    modalBorder: "#202F36", // gray-700
    modalText: "#EFF4F6", // gray-100
    accentColor: "#15FFAB", // teal-DEFAULT
    accentColorForeground: "#202F36", // gray-700
  },
};
