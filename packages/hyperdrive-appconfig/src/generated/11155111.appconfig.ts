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
      address: "0xD8a5c98e985986754D608782Bb58717A0168B21d",
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
      address: "0xC587D318c555A1E550d97E361932821B925c7D32",
      decimals: 18,
      places: 4,
      name: "RocketPool ETH",
      symbol: "RETH",
      iconUrl:
        "https://cryptologos.cc/logos/rocket-pool-eth-reth-logo.svg?v=031",
      tags: ["yieldSource", "reth"],
      extensions: {
        shortName: "Rocket Pool ETH",
        protocol: "rocketPool",
      },
    },
    {
      address: "0x63E77f68fA4774A0e2Fc0a085f02150746dd8230",
      decimals: 18,
      places: 4,
      name: "Renzo ezETH",
      symbol: "ezETH",
      iconUrl:
        "https://file.notion.so/f/f/8918534a-08b2-4581-8604-0c70c8725edf/00c378ba-134a-4438-8064-a7541364b9af/ezeth_token_icon_light_background.svg?id=0ab06ed9-9568-42e1-bd75-936b076e5289&table=block&spaceId=8918534a-08b2-4581-8604-0c70c8725edf&expirationTimestamp=1715385600000&signature=ZW87EbyS8prbj3gd4vzqcBQ36PlTfRM6dKUYfsan3zM&downloadName=ezeth+token+icon+light+background.svg",
      tags: ["yieldSource", "ezeth"],
      extensions: {
        shortName: "Renzo ezETH",
        protocol: "renzo",
      },
    },
    {
      address: "0xF6e2b70278f7887eE611bd4E52DD26e9353fDD67",
      decimals: 18,
      places: 2,
      name: "Savings DAI",
      symbol: "SDAI",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: ["yieldSource", "erc4626"],
      extensions: {
        shortName: "Maker DSR",
        protocol: "maker",
      },
    },
    {
      address: "0xE10C83109537670946955404e11Ea2E1210AA8A9",
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
      address: "0xF2A8f3dcc019FD8F3EF286fe88F7efdd0c4D4b0c",
      version: "v1.0.6",
      name: "14d DAI-Maker DSR",
      decimals: 18,
      baseToken: "0xE10C83109537670946955404e11Ea2E1210AA8A9",
      sharesToken: "0xF6e2b70278f7887eE611bd4E52DD26e9353fDD67",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xE10C83109537670946955404e11Ea2E1210AA8A9",
        vaultSharesToken: "0xF6e2b70278f7887eE611bd4E52DD26e9353fDD67",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 1000000000000000000n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 1209600n,
        checkpointDuration: 86400n,
        timeStretch: 1746050381163618n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 19230769230769n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x4B86AF92Cb944B88089B2429234293B12AEBCEFA",
      version: "v1.0.6",
      name: "30d DAI-Maker DSR",
      decimals: 18,
      baseToken: "0xE10C83109537670946955404e11Ea2E1210AA8A9",
      sharesToken: "0xF6e2b70278f7887eE611bd4E52DD26e9353fDD67",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xE10C83109537670946955404e11Ea2E1210AA8A9",
        vaultSharesToken: "0xF6e2b70278f7887eE611bd4E52DD26e9353fDD67",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 1000000445205479451n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 3737448720271234n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41666666666666n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0xeD86be3F545F4F5d487DE637fdf4ceB6ab16F982",
      version: "v1.0.6",
      name: "14d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0xD8a5c98e985986754D608782Bb58717A0168B21d",
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
        vaultSharesToken: "0xD8a5c98e985986754D608782Bb58717A0168B21d",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 1000000825722983250n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 1209600n,
        checkpointDuration: 86400n,
        timeStretch: 1746050381163618n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 19230769230769n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0x36916729B314D8e3d1a450B5850268d203425a03",
      version: "v1.0.6",
      name: "30d ETH-Lido stETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0xD8a5c98e985986754D608782Bb58717A0168B21d",
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
        vaultSharesToken: "0xD8a5c98e985986754D608782Bb58717A0168B21d",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 1000000958904169000n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 3737448720271234n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41666666666666n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0xBEd9572dF3683E9d713ee8d5bFa53C0ea2706022",
      version: "v1.0.6",
      name: "14d ETH-Rocket Pool ETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0xC587D318c555A1E550d97E361932821B925c7D32",
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
        vaultSharesToken: "0xC587D318c555A1E550d97E361932821B925c7D32",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 1000000905631659050n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 1209600n,
        checkpointDuration: 86400n,
        timeStretch: 1746050381163618n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 19230769230769n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0xaE815d2229545C67c9C32744e5476D7B04E0017C",
      version: "v1.0.6",
      name: "30d ETH-Rocket Pool ETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0xC587D318c555A1E550d97E361932821B925c7D32",
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
        vaultSharesToken: "0xC587D318c555A1E550d97E361932821B925c7D32",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 1000001038812825287n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 3737448720271234n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41666666666666n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0xA955F5d36D3a8Af3739600e49376d65c4fa99412",
      version: "v1.0.6",
      name: "14d ETH-Renzo ezETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x63E77f68fA4774A0e2Fc0a085f02150746dd8230",
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
        vaultSharesToken: "0x63E77f68fA4774A0e2Fc0a085f02150746dd8230",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 199960202403963n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 1209600n,
        checkpointDuration: 86400n,
        timeStretch: 1746050381163618n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 19230769230769n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      address: "0xA2Ad31DaEbfE222dc96810898EF7FC239daAb580",
      version: "v1.0.6",
      name: "30d ETH-Renzo ezETH",
      decimals: 18,
      baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      sharesToken: "0x63E77f68fA4774A0e2Fc0a085f02150746dd8230",
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
        vaultSharesToken: "0x63E77f68fA4774A0e2Fc0a085f02150746dd8230",
        linkerFactory: "0xf039Fd46fE8d81c116Cf4bdC787B3272A4C52815",
        linkerCodeHash:
          "0x9a69ff3b9a110deacb7d941d71222642f269891c0da9fcc15ec7c63fbd216b3f",
        initialVaultSharePrice: 199960123842816n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 600000000000000000n,
        positionDuration: 2592000n,
        checkpointDuration: 86400n,
        timeStretch: 3737448720271234n,
        governance: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        feeCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        sweepCollector: "0xc187a246Ee5A4Fe4395a8f6C0f9F2AA3A5a06e9b",
        fees: {
          curve: 10000000000000000n,
          flat: 41666666666666n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
  ],
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
    morpho: {
      id: "morpho",
      name: "Morpho",
      iconUrl:
        "https://assets.coingecko.com/coins/images/29837/large/2022-official-morpho-token.png?1696528764",
    },
    rocketPool: {
      id: "rocketPool",
      name: "Rocket Pool",
      iconUrl:
        "https://assets.coingecko.com/coins/images/2090/large/rocket_pool_%28RPL%29.png?1696503058",
    },
    renzo: {
      id: "renzo",
      name: "Renzo",
      iconUrl:
        "https://file.notion.so/f/f/8918534a-08b2-4581-8604-0c70c8725edf/8104f9b0-980c-4e9e-a9a3-49f0b741d99e/renzo_logo_green_on_transparent.svg?id=9000598a-f94c-492d-8f5a-ac09e441319d&table=block&spaceId=8918534a-08b2-4581-8604-0c70c8725edf&expirationTimestamp=1715385600000&signature=jn2uDGG1CTn2NjRZ4IC8hOxp7uXEcxcl56PrQN7Ly2U&downloadName=renzo+logo+green+on+transparent.svg",
    },
  },
};
