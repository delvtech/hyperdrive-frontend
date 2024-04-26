import { AppConfig } from "src/appconfig/AppConfig";
export const sepoliaAppConfig: AppConfig = {
  chainId: 11155111,
  tags: [
    {
      id: "yieldSource",
      description: "A hyperdrive market's yield source",
    },
  ],
  tokens: [
    {
      address: "0x6977eC5fae3862D3471f0f5B6Dcc64cDF5Cfd959",
      decimals: 18,
      places: 4,
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
      places: 4,
      tags: [],
      extensions: {},
      iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
    },
    {
      address: "0x6977eC5fae3862D3471f0f5B6Dcc64cDF5Cfd959",
      decimals: 18,
      places: 4,
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
      places: 4,
      tags: [],
      extensions: {},
      iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
    },
    {
      address: "0x3A2031f3FAb5AA2b5c47c02fcD9f26072977834c",
      decimals: 18,
      places: 2,
      name: "Hyperdrive DAI",
      symbol: "mmHyDAI",
      iconUrl:
        "https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png?1696528764",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "MetaMorpho",
        protocol: "morpho",
      },
    },
    {
      address: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
      decimals: 18,
      places: 2,
      name: "DAI",
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: [],
      extensions: {},
    },
    {
      address: "0xECa45b0391E81c311F1b390808a3BA3214d35eAA",
      decimals: 18,
      places: 2,
      name: "sDAI",
      symbol: "SDAI",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "Maker DSR",
        protocol: "maker",
      },
    },
    {
      address: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
      decimals: 18,
      places: 2,
      name: "DAI",
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: [],
      extensions: {},
    },
    {
      address: "0xECa45b0391E81c311F1b390808a3BA3214d35eAA",
      decimals: 18,
      places: 2,
      name: "sDAI",
      symbol: "SDAI",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "Maker DSR",
        protocol: "maker",
      },
    },
    {
      address: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
      decimals: 18,
      places: 2,
      name: "DAI",
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: [],
      extensions: {},
    },
  ],
  hyperdrives: [
    {
      address: "0xff33bd6d7ED4119c99C310F3e5f0Fa467796Ee23",
      name: "14d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x6977eC5fae3862D3471f0f5B6Dcc64cDF5Cfd959",
      depositOptions: {
        isBaseTokenDepositEnabled: false,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0x6977eC5fae3862D3471f0f5B6Dcc64cDF5Cfd959",
        linkerFactory: "0x13b0AcFA6B77C0464Ce26Ff80da7758b8e1f526E",
        linkerCodeHash:
          "0xbce832c0ea372ef949945c6a4846b1439b728e08890b93c2aa99e2e3c50ece34",
        initialVaultSharePrice: 1000001145357686453n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 1209600n,
        checkpointDuration: 86400n,
        timeStretch: 1746050381163618n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 19178082191780n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x4E38fd41c03ff11b3426efaE53138b86116797b8",
      name: "30d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x6977eC5fae3862D3471f0f5B6Dcc64cDF5Cfd959",
      depositOptions: {
        isBaseTokenDepositEnabled: false,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0x6977eC5fae3862D3471f0f5B6Dcc64cDF5Cfd959",
        linkerFactory: "0x13b0AcFA6B77C0464Ce26Ff80da7758b8e1f526E",
        linkerCodeHash:
          "0xbce832c0ea372ef949945c6a4846b1439b728e08890b93c2aa99e2e3c50ece34",
        initialVaultSharePrice: 1000001797945915675n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 3737448720271234n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41095890410958n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x392839dA0dACAC790bd825C81ce2c5E264D793a8",
      name: "14d DAI-Maker DSR",
      decimals: 18,
      baseToken: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
      sharesToken: "0xECa45b0391E81c311F1b390808a3BA3214d35eAA",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
        vaultSharesToken: "0xECa45b0391E81c311F1b390808a3BA3214d35eAA",
        linkerFactory: "0x13b0AcFA6B77C0464Ce26Ff80da7758b8e1f526E",
        linkerCodeHash:
          "0xbce832c0ea372ef949945c6a4846b1439b728e08890b93c2aa99e2e3c50ece34",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 1209600n,
        checkpointDuration: 86400n,
        timeStretch: 1746050381163618n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 19178082191780n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0xb932F8085399C228b16A9F7FC3219d47FfA2810d",
      name: "30d DAI-Maker DSR",
      decimals: 18,
      baseToken: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
      sharesToken: "0xECa45b0391E81c311F1b390808a3BA3214d35eAA",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
        vaultSharesToken: "0xECa45b0391E81c311F1b390808a3BA3214d35eAA",
        linkerFactory: "0x13b0AcFA6B77C0464Ce26Ff80da7758b8e1f526E",
        linkerCodeHash:
          "0xbce832c0ea372ef949945c6a4846b1439b728e08890b93c2aa99e2e3c50ece34",
        initialVaultSharePrice: 1000001335616438356n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 3737448720271234n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41095890410958n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x0436b07823dA988484b70309b0d1b509eadD2173",
      name: "30d DAI-MetaMorpho",
      decimals: 18,
      baseToken: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
      sharesToken: "0x3A2031f3FAb5AA2b5c47c02fcD9f26072977834c",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: false,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0x552ceaDf3B47609897279F42D3B3309B604896f3",
        vaultSharesToken: "0x3A2031f3FAb5AA2b5c47c02fcD9f26072977834c",
        linkerFactory: "0x13b0AcFA6B77C0464Ce26Ff80da7758b8e1f526E",
        linkerCodeHash:
          "0xbce832c0ea372ef949945c6a4846b1439b728e08890b93c2aa99e2e3c50ece34",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 2448235777361875n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41095890410958n,
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
    morpho: {
      name: "Morpho",
      iconUrl:
        "https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png?1696528764",
    },
    rocketPool: {
      name: "Rocket Pool",
      iconUrl:
        "https://assets.coingecko.com/coins/images/2090/large/rocket_pool_%28RPL%29.png?1696503058",
    },
  },
};
