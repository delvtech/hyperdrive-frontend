import { AppConfig } from "src/appconfig/AppConfig";
export const localChainAppConfig: AppConfig = {
  chainId: 31337,
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
      name: "Delvnet Yield Source",
      symbol: "DELV",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "Maker DSR",
        protocol: "maker",
      },
    },
    {
      address: "0x5A17F92aAaEf087c72Bb810f314CA15E18bc3EA3",
      decimals: 18,
      name: "Base",
      symbol: "BASE",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: [],
      extensions: {},
    },
    {
      address: "0x6c0Fdf4eBa793A1e20CB9F02bD17a07a24a79af5",
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
      address: "0xC85bD20AFE9fA74435EdbB7AFF734A27cFC9759D",
      name: "7d BASE-Maker DSR",
      decimals: 18,
      baseToken: "0x5A17F92aAaEf087c72Bb810f314CA15E18bc3EA3",
      sharesToken: "0x34099867329Cb7b5883dD25B5FFE05bb00c4d143",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x5A17F92aAaEf087c72Bb810f314CA15E18bc3EA3",
        vaultSharesToken: "0x34099867329Cb7b5883dD25B5FFE05bb00c4d143",
        linkerFactory: "0x23F23Dc2456fe59a0aaF64F19c65b748967fE181",
        linkerCodeHash:
          "0x04f5e793aa939acd876ec5abe78a78653fcde948ab4bbb1eb9fd5643edfdd659",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 604800n,
        checkpointDuration: 3600n,
        timeStretch: 873443363379729n,
        governance: "0x4f1F569D5Be5315f4999CA435BA7b67F7d0B3255",
        feeCollector: "0x4f1F569D5Be5315f4999CA435BA7b67F7d0B3255",
        sweepCollector: "0x4f1F569D5Be5315f4999CA435BA7b67F7d0B3255",
        fees: {
          curve: 10000000000000000n,
          flat: 9615384615384n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x2BAa19F6bfbf98c4D94Aa61eED91A27308149651",
      name: "7d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x6c0Fdf4eBa793A1e20CB9F02bD17a07a24a79af5",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0x6c0Fdf4eBa793A1e20CB9F02bD17a07a24a79af5",
        linkerFactory: "0x23F23Dc2456fe59a0aaF64F19c65b748967fE181",
        linkerCodeHash:
          "0x04f5e793aa939acd876ec5abe78a78653fcde948ab4bbb1eb9fd5643edfdd659",
        initialVaultSharePrice: 1000000029965753424n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 604800n,
        checkpointDuration: 3600n,
        timeStretch: 607084408361253n,
        governance: "0x4f1F569D5Be5315f4999CA435BA7b67F7d0B3255",
        feeCollector: "0x4f1F569D5Be5315f4999CA435BA7b67F7d0B3255",
        sweepCollector: "0x4f1F569D5Be5315f4999CA435BA7b67F7d0B3255",
        fees: {
          curve: 10000000000000000n,
          flat: 9615384615384n,
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
