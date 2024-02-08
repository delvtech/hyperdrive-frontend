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
  ],
  hyperdrives: [
    {
      address: "0xd99d0111E765D245De02b8352B057AcdD4e62624",
      name: "7d BASE-Maker DSR",
      decimals: 18,
      baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      sharesToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        linkerFactory: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
        linkerCodeHash:
          "0xde3a7772963c94efbf8134b54e2a6945496d28fca24db5aac5ac291e615dbad4",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 604800n,
        checkpointDuration: 3600n,
        timeStretch: 873443363379730n,
        governance: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        feeCollector: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
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
