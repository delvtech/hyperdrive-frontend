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
      address: "0x68BF6B6131e9c784eaB5747Ba08Cc903A679B6dE",
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
      address: "0x23d79e092ce99cff7870e57d371cfee4535a57d6",
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
        linkerFactory: "0x06E5aCdA0914B9c79eF21798629c96bFC6b6D11b",
        linkerCodeHash:
          "0xc100b08b59c34b99d6f22bd4001a5ae93f5b3d1c5dd12190a656aeae9d02c646",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 604800n,
        checkpointDuration: 3600n,
        timeStretch: 873443363379729n,
        governance: "0x0000000000000000000000000000000000000000",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 9615384615384n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x066419975a492d81e6a8e1d35a73317df647c1bb",
      name: "7d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x68BF6B6131e9c784eaB5747Ba08Cc903A679B6dE",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0x68BF6B6131e9c784eaB5747Ba08Cc903A679B6dE",
        linkerFactory: "0x06E5aCdA0914B9c79eF21798629c96bFC6b6D11b",
        linkerCodeHash:
          "0xc100b08b59c34b99d6f22bd4001a5ae93f5b3d1c5dd12190a656aeae9d02c646",
        initialVaultSharePrice: 1000000029965753424n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 604800n,
        checkpointDuration: 3600n,
        timeStretch: 607084408361253n,
        governance: "0x0000000000000000000000000000000000000000",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
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
