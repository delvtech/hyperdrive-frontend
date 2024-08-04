import type { YieldSourceExtensions } from "src/index";

export const sdaiExtensions: YieldSourceExtensions = {
  shortName: "Maker DSR",
  protocol: "maker",
  isSharesPeggedToBase: false,
};

export const stethExtensions: YieldSourceExtensions = {
  shortName: "Lido stETH",
  protocol: "lido",
  isSharesPeggedToBase: true,
};

export const metaMorphoExtensions: YieldSourceExtensions = {
  shortName: "MetaMorpho",
  protocol: "morpho",
  isSharesPeggedToBase: false,
};

export const rethExtensions: YieldSourceExtensions = {
  shortName: "Rocket Pool ETH",
  protocol: "rocketPool",
  isSharesPeggedToBase: false,
};

export const ezethExtensions: YieldSourceExtensions = {
  shortName: "Renzo ezETH",
  protocol: "renzo",
  isSharesPeggedToBase: false,
};
