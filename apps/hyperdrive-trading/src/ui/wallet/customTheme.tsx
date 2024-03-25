// eslint-disable-next-line import/named
import { darkTheme, Theme } from "@rainbow-me/rainbowkit";

export function customRainbowTheme(): Theme {
  const darkThemePresets = darkTheme();
  return {
    ...darkThemePresets,
    colors: {
      ...darkThemePresets.colors,
      modalBackground: "#202F36", // gray-700
      modalBorder: "#202F36", // gray-700
      modalText: "#EFF4F6", // gray-100
      accentColor: "#15FFAB", // teal-DEFAULT
      accentColorForeground: "#202F36", // gray-700
    },
  };
}
