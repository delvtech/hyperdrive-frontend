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
      address: "0x34099867329Cb7b5883dD25B5FFE05bb00c4d143",
      decimals: 18,
      name: "sDai",
      symbol: "SDAI",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMGM3NzAiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3aXRjaC1jYW1lcmEiPjxwYXRoIGQ9Ik0xMSAxOUg0YTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDUiLz48cGF0aCBkPSJNMTMgNWg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48cGF0aCBkPSJtMTggMjItMy0zIDMtMyIvPjxwYXRoIGQ9Im02IDIgMyAzLTMgMyIvPjwvc3ZnPg==",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "Maker DSR",
        protocol: "maker",
      },
    },
    {
      address: "0x5A17F92aAaEf087c72Bb810f314CA15E18bc3EA3",
      decimals: 18,
      name: "Multi Collateral DAI",
      symbol: "DAI",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMGM3NzAiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3aXRjaC1jYW1lcmEiPjxwYXRoIGQ9Ik0xMSAxOUg0YTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDUiLz48cGF0aCBkPSJNMTMgNWg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48cGF0aCBkPSJtMTggMjItMy0zIDMtMyIvPjxwYXRoIGQ9Im02IDIgMyAzLTMgMyIvPjwvc3ZnPg==",
      tags: [],
      extensions: {},
    },
    {
      address: "0x23F23Dc2456fe59a0aaF64F19c65b748967fE181",
      decimals: 18,
      name: "Liquid staked Ether 2.0",
      symbol: "stETH",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMGM3NzAiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3aXRjaC1jYW1lcmEiPjxwYXRoIGQ9Ik0xMSAxOUg0YTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDUiLz48cGF0aCBkPSJNMTMgNWg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48cGF0aCBkPSJtMTggMjItMy0zIDMtMyIvPjxwYXRoIGQ9Im02IDIgMyAzLTMgMyIvPjwvc3ZnPg==",
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
      address: "0xb6f9efceeba5cb43507d54cba55e79aba53087da",
      name: "365d DAI-Maker DSR",
      decimals: 18,
      baseToken: "0x5A17F92aAaEf087c72Bb810f314CA15E18bc3EA3",
      sharesToken: "0x34099867329Cb7b5883dD25B5FFE05bb00c4d143",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x5A17F92aAaEf087c72Bb810f314CA15E18bc3EA3",
        linkerFactory: "0x8d4928532f2DD0E2f31F447d7902197E54DB2302",
        linkerCodeHash:
          "0x667d4fd5e9caf594f2719acb9a7e4aa728f4c384e906a974032be6aa1fc2df66",
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
    {
      address: "0xd2e6f95f2c217b5902ee8b8139c52e53bfaede7d",
      name: "365d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x23F23Dc2456fe59a0aaF64F19c65b748967fE181",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        linkerFactory: "0x8d4928532f2DD0E2f31F447d7902197E54DB2302",
        linkerCodeHash:
          "0x667d4fd5e9caf594f2719acb9a7e4aa728f4c384e906a974032be6aa1fc2df66",
        initialVaultSharePrice: 1000000029965753424n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 31536000n,
        checkpointDuration: 86400n,
        timeStretch: 31124187940342208n,
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
