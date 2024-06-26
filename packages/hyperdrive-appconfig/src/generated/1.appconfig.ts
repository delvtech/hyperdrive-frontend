import { AppConfig } from "src/appconfig/AppConfig";
export const mainnetAppConfig: AppConfig = {
  chainId: 1,
  tags: [
    {
      id: "yieldSource",
      description: "A hyperdrive market's yield source",
    },
  ],
  tokens: [],
  hyperdrives: [],
  protocols: {
    maker: {
      id: "maker",
      name: "Maker",
      iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
    },
    lido: {
      id: "lido",
      name: "Lido",
      iconUrl: "https://cryptologos.cc/logos/lido-dao-ldo-logo.png?v=029",
    },
  },
};
