import { AppConfig } from "src/appconfig/AppConfig";
export const sepoliaAppConfig: AppConfig = {
  chainId: 11155111,
  tags: [
    {
      id: "yieldSource",
      description: "A hyperdrive market's yield source",
    },
    {
      id: "erc4626",
      description: "A vault standard for yield sources",
    },
    {
      id: "steth",
      description:
        "The stETH yield source, which conforms to no ERC standard, and must be treated as a special case",
    },
  ],
  tokens: [],
  hyperdrives: [],
  protocols: {
    maker: {
      name: "Maker",
      iconUrl: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=024",
    },
    lido: {
      name: "Lido",
      iconUrl: "https://cryptologos.cc/logos/lido-dao-ldo-logo.png?v=029",
    },
  },
};
