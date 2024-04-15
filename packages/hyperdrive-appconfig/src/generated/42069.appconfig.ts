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
    {
      id: "steth",
      description:
        "The stETH yield source, which conforms to no ERC standard, and must be treated as a special case",
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
    {
      address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      decimals: 18,
      name: "Liquid staked Ether 2.0",
      symbol: "stETH",
      iconUrl: "https://cryptologos.cc/logos/steth-steth-logo.png?v=029",
      tags: ["yieldSource", "steth"],
      extensions: {
        shortName: "Lido stETH",
        protocol: "lido",
      },
    },
    {
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      tags: [],
      extensions: {},
      iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
    },
  ],
  hyperdrives: [
    {
      address: "0x6557CCf6405BB61ac8a7cF231bE8e954C2c01A1b",
      name: "365d DAI-Maker DSR",
      decimals: 18,
      baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      sharesToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        vaultSharesToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
        linkerFactory: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
        linkerCodeHash:
          "0x04f5e793aa939acd876ec5abe78a78653fcde948ab4bbb1eb9fd5643edfdd659",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 31536000n,
        checkpointDuration: 86400n,
        timeStretch: 44463125629060298n,
        governance: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        feeCollector: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        sweepCollector: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        fees: {
          curve: 10000000000000000n,
          flat: 500000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x6b70e6811aabEFE93b83014a1F4D97f0A1c4B958",
      name: "365d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      depositOptions: {
        isBaseTokenDepositEnabled: false,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
        linkerFactory: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
        linkerCodeHash:
          "0x04f5e793aa939acd876ec5abe78a78653fcde948ab4bbb1eb9fd5643edfdd659",
        initialVaultSharePrice: 1000000029965753424n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 31536000n,
        checkpointDuration: 86400n,
        timeStretch: 31124187940342208n,
        governance: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        feeCollector: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
        sweepCollector: "0x6043bF4ec8834F918242BaCA0F1F3805F2a2988D",
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
