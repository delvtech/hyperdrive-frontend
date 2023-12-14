// eslint-disable-next-line import/named
import { darkTheme, Theme } from "@rainbow-me/rainbowkit";

export function customRainbowTheme(): Theme {
  const darkThemePresets = darkTheme();

  return {
    ...darkThemePresets,
    colors: {
      ...darkThemePresets.colors,
      modalBackground: "#243942",
      modalBorder: "#202F36",
      modalText: "#EFF4F6",
      accentColor: "#9BF3F0",
    },
    radii: {
      ...darkThemePresets.radii,
      modal: "32px",
    },
    shadows: {
      ...darkThemePresets.shadows,
    },
  };
}
