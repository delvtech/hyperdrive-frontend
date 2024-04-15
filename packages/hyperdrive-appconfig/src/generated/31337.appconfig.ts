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
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
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
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      decimals: 18,
      name: "Base",
      symbol: "BASE",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: [],
      extensions: {},
    },
    {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
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
      address: "0x6aB5F325E26955Ff082e9F6DD9ff1213e5af268A",
      name: "7d BASE-Maker DSR",
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
        linkerFactory: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
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
      address: "0x0b08d532Cb70Eb5F73794e52bA7bc24F4F8eDc51",
      name: "7d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
        linkerFactory: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
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
