import { AppConfig } from "src/appconfig/AppConfig";
export const cloudChainAppConfig: AppConfig = {
  chainId: 42069,
  tags: [
    {
      id: "yieldSource",
      description: "A hyperdrive market's yield source",
    },
    {
      id: "erc4626",
      description: "A vault standard for yield sources",
    },
  ],
  tokens: [
    {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      decimals: 18,
      name: "sDai",
      symbol: "SDAI",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "Maker DSR",
        protocol: "maker",
      },
    },
    {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      decimals: 18,
      name: "Multi Collateral DAI",
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: [],
      extensions: {},
    },
  ],
  hyperdrives: [
    {
      address: "0xE1A4313d018E3ccBf32985aBF628e756A7A6b5cf",
      name: "365d DAI-Maker DSR",
      baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      sharesToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        linkerFactory: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
        linkerCodeHash:
          "0xde3a7772963c94efbf8134b54e2a6945496d28fca24db5aac5ac291e615dbad4",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 31536000n,
        checkpointDuration: 86400n,
        timeStretch: 44463125629060298n,
        governance: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        feeCollector: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        fees: {
          curve: 10000000000000000n,
          flat: 500000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
  ],
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
