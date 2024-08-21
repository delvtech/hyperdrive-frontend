import { AppConfig } from "src/appconfig/AppConfig";
export const cloudchainAppConfig: AppConfig = {
  tokens: [
    {
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      chainId: 42069,
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      places: 4,
      tags: [],
      iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
    },
    {
      chainId: 42069,
      address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      decimals: 18,
      places: 4,
      name: "Liquid staked Ether 2.0",
      symbol: "stETH",
      iconUrl: "https://cryptologos.cc/logos/steth-steth-logo.png?v=029",
      tags: ["liquidStakingToken"],
    },
    {
      chainId: 42069,
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      decimals: 18,
      places: 2,
      name: "Dai Stablecoin",
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: ["stablecoin"],
    },
    {
      chainId: 42069,
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      decimals: 6,
      places: 2,
      name: "USD Coin",
      symbol: "USDC",
      iconUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=033",
      tags: ["stablecoin"],
    },
    {
      chainId: 42069,
      address: "0x35fA164735182de50811E8e2E824cFb9B6118ac2",
      decimals: 18,
      places: 4,
      name: "ether.fi ETH",
      symbol: "eETH",
      iconUrl:
        "https://assets.coingecko.com/coins/images/33049/standard/ether.fi_eETH.png?1700473063",
      tags: ["liquidStakingToken"],
    },
    {
      chainId: 42069,
      address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
      decimals: 18,
      places: 4,
      name: "Rocket Pool ETH",
      symbol: "rETH",
      iconUrl:
        "https://cryptologos.cc/logos/rocket-pool-eth-reth-logo.svg?v=031",
      tags: ["liquidStakingToken"],
    },
    {
      chainId: 42069,
      address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
      decimals: 18,
      places: 4,
      name: "Renzo Restaked ETH",
      symbol: "ezETH",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF85MDZfMTgwNikiPgo8Y2lyY2xlIGN4PSIxMjUiIGN5PSIxMjUiIHI9IjExMSIgc3Ryb2tlPSIjQTNEQTJGIiBzdHJva2Utd2lkdGg9IjgiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjUuNSA0MC41QzEyNC41MDMgNjAuNjU5OCAxMjQuMTcgODAuOTkzMSAxMjQuNSAxMDEuNUMxMjMuNTA4IDEwMS4zMjggMTIyLjg0MiAxMDEuNjYyIDEyMi41IDEwMi41QzEwNi4wNyAxMDkuNTQ3IDg5LjczNjUgMTE2Ljg4IDczLjUgMTI0LjVDNzIuODkzMyAxMjQuMzc2IDcyLjU2IDEyNC4wNDMgNzIuNSAxMjMuNUM4OS4xNTI5IDk0Ljg2MTggMTA2LjMyIDY2LjUyODUgMTI0IDM4LjVDMTI0LjcxNyAzOS4wNDQyIDEyNS4yMTcgMzkuNzEwOSAxMjUuNSA0MC41WiIgZmlsbD0iI0MxRUM2OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNS41IDQwLjVDMTQyLjMwOCA2OC4xMDMgMTU5LjE0MSA5NS43Njk2IDE3NiAxMjMuNUMxNzYuNzQgMTI0Ljc0OSAxNzYuNTczIDEyNS43NDkgMTc1LjUgMTI2LjVDMTc0LjA5MyAxMjQuMzg2IDE3Mi4wOTMgMTIyLjg4NiAxNjkuNSAxMjJDMTU0LjUwNSAxMTUuMzk0IDEzOS41MDUgMTA4Ljg5NCAxMjQuNSAxMDIuNUMxMjQuNSAxMDIuMTY3IDEyNC41IDEwMS44MzMgMTI0LjUgMTAxLjVDMTI0LjE3IDgwLjk5MzEgMTI0LjUwMyA2MC42NTk4IDEyNS41IDQwLjVaIiBmaWxsPSIjOTBDMjJBIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIyLjUgMTAyLjVDMTIyLjg0MiAxMDEuNjYyIDEyMy41MDggMTAxLjMyOCAxMjQuNSAxMDEuNUMxMjQuNSAxMDEuODMzIDEyNC41IDEwMi4xNjcgMTI0LjUgMTAyLjVDMTI0LjE3IDEyMC4zNDEgMTI0LjUwMyAxMzguMDA4IDEyNS41IDE1NS41QzEyNS4xNTggMTU2LjMzOCAxMjQuNDkyIDE1Ni42NzIgMTIzLjUgMTU2LjVDMTIzLjgzIDEzOC4zMjYgMTIzLjQ5NyAxMjAuMzI2IDEyMi41IDEwMi41WiIgZmlsbD0iI0M4RUE4MCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyMi41IDEwMi41QzEyMy40OTcgMTIwLjMyNiAxMjMuODMgMTM4LjMyNiAxMjMuNSAxNTYuNUMxMDYuNTE3IDE0Ni41MjcgODkuNTE3MSAxMzYuNTI3IDcyLjQ5OTkgMTI2LjVDNzEuMjI0IDEyNS4zODYgNzEuMjI0IDEyNC4zODYgNzIuNDk5OSAxMjMuNUM3Mi41NTk5IDEyNC4wNDMgNzIuODkzMiAxMjQuMzc2IDczLjQ5OTkgMTI0LjVDODkuNzM2NCAxMTYuODggMTA2LjA3IDEwOS41NDcgMTIyLjUgMTAyLjVaIiBmaWxsPSIjRTJGNkI5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI0LjUgMTAyLjVDMTM5LjUwNSAxMDguODk0IDE1NC41MDUgMTE1LjM5NCAxNjkuNSAxMjJDMTcyLjA5MyAxMjIuODg2IDE3NC4wOTMgMTI0LjM4NiAxNzUuNSAxMjYuNUMxNTguODE2IDEzNi4xOTQgMTQyLjE0OSAxNDUuODYxIDEyNS41IDE1NS41QzEyNC41MDMgMTM4LjAwOCAxMjQuMTcgMTIwLjM0MSAxMjQuNSAxMDIuNVoiIGZpbGw9IiNBM0RBMkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjQuNSAxNjYuNUMxMjQuNSAxODAuNSAxMjQuNSAxOTQuNSAxMjQuNSAyMDguNUMxMjMuNjcxIDIwOS4zMzIgMTIyLjgzOCAyMDguOTk5IDEyMiAyMDcuNUMxMDUuMTY1IDE4My4zOCA4OC40OTgzIDE1OS4zOCA3MiAxMzUuNUM4OS4xNDM3IDE0Ni40ODYgMTA2LjY0NCAxNTYuODE5IDEyNC41IDE2Ni41WiIgZmlsbD0iI0MxRUI2OSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNC41IDIwOC41QzEyNC41IDE5NC41IDEyNC41IDE4MC41IDEyNC41IDE2Ni41QzE0MS44NzkgMTU1LjgzNSAxNTkuMjEzIDE0NS44MzUgMTc2LjUgMTM2LjVDMTU5LjQ5NyAxNjAuODIxIDE0Mi4xNjQgMTg0LjgyMSAxMjQuNSAyMDguNVoiIGZpbGw9IiM2RDhFMjEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF85MDZfMTgwNiI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
      tags: ["liquidStakingToken"],
    },
    {
      chainId: 42069,
      address: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
      decimals: 18,
      places: 2,
      name: "Savings Dai",
      symbol: "sDAI",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: [],
    },
  ],
  registries: {
    "42069": "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  },
  hyperdrives: [
    {
      chainId: 42069,
      initializationBlock: 20180623n,
      address: "0xd7e470043241C10970953Bd8374ee6238e77D735",
      version: "v1.0.13",
      name: "182d Lido stETH",
      decimals: 18,
      yieldSource: "lidoSteth",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1170940610997357293n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 35000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 15653294255762199n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      address: "0x324395D5d835F84a02A75Aa26814f6fD22F25698",
      version: "v1.0.13",
      name: "182d Maker DSR",
      initializationBlock: 20180617n,
      decimals: 18,
      yieldSource: "makerDsr",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        vaultSharesToken: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1092163633178658798n,
        minimumShareReserves: 10000000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 50000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 22441807975912219n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      address: "0xca5dB9Bb25D09A9bF3b22360Be3763b5f2d13589",
      version: "v1.0.15",
      name: "182d Rocket Pool ETH",
      initializationBlock: 20322429n,
      decimals: 18,
      yieldSource: "reth",
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
        vaultSharesToken: "0xae78736Cd615f374D3085123A210448E74Fc6393",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1111258406335533485n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 35000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 15653294255762199n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      initializationBlock: 20484838n,
      address: "0xd41225855A5c5Ba1C672CcF4d72D1822a5686d30",
      version: "v1.0.17",
      name: "182d Morpho sUSDe/DAI",
      decimals: 18,
      yieldSource: "morphoSusdeDai",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: false,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        vaultSharesToken: "0x0000000000000000000000000000000000000000",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1055055116864n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 75000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 45400439402649528n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      initializationBlock: 20528971n,
      address: "0xA29A771683b4857bBd16e1e4f27D5B6bfF53209B",
      version: "v1.0.17",
      name: "182d Morpho USDe/DAI",
      decimals: 18,
      yieldSource: "morphoUsdeDai",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: false,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        vaultSharesToken: "0x0000000000000000000000000000000000000000",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1060641913781n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 75000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 45400439402649528n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      address: "0x4c3054e51b46BE3191be9A05e73D73F1a2147854",
      version: "v1.0.15",
      name: "182d Renzo ezETH",
      initializationBlock: 20322421n,
      decimals: 18,
      yieldSource: "ezEth",
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
        vaultSharesToken: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1014620098840430772n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 100000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 45400439402649528n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      initializationBlock: 20578798n,
      address: "0x8C66f5b401638093312161081eaA6cE70267d002",
      version: "v1.0.17",
      name: "182d Morpho wstETH/USDC",
      decimals: 6,
      yieldSource: "morphoWstethUsdc",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: false,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: false,
      },
      poolConfig: {
        baseToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        vaultSharesToken: "0x0000000000000000000000000000000000000000",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1042652580253n,
        minimumShareReserves: 1000000n,
        minimumTransactionAmount: 1000000n,
        circuitBreakerDelta: 75000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 33858811063379973n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
    {
      chainId: 42069,
      address: "0xA0A6dDE952d9E9c30Ac9Ce0Deca92953de89a0E3",
      version: "v1.0.17",
      name: "182d Ether.fi Staked ETH",
      initializationBlock: 20578805n,
      decimals: 18,
      yieldSource: "eEth",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        vaultSharesToken: "0x35fA164735182de50811E8e2E824cFb9B6118ac2",
        linkerFactory: "0x08B40647714aC1E5742633fC2D83C20D61a199D2",
        linkerCodeHash:
          "0x4d63914b6a33d8813a5654ae2dc977f37e398817df2519d374573ab851f9cb38",
        initialVaultSharePrice: 1046117284216384893n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 100000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 45400439402649528n,
        governance: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x0000000000000000000000000000000000000000",
        checkpointRewarder: "0x0000000000000000000000000000000000000000",
        fees: {
          curve: 10000000000000000n,
          flat: 250000000000000n,
          governanceLP: 150000000000000000n,
          governanceZombie: 30000000000000000n,
        },
      },
    },
  ],
  protocols: {
    etherFi: {
      id: "etherFi",
      name: "Ether.fi",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUxLjMwMzggMjguODM0TDQ5LjM2MjUgMjEuMjY2NkM0OS4zMDY5IDIxLjA0NDEgNDkuMTI3NiAyMC44NzEgNDguOTA1IDIwLjgxNTNMNDEuNDA1NyAxOC45NjY3QzQxLjM1MDEgMTguOTU0NCA0MS4yODgyIDE4Ljk0ODIgNDEuMjMyNiAxOC45NDgyQzQxLjA1MzMgMTguOTI5NyA0MC44Njc4IDE4Ljk4NTMgNDAuNzMxOCAxOS4xMjEzTDI4LjA3NjMgMzEuNzc2OUwyNi40MDA4IDI1LjIzNThDMjYuMzQ1MiAyNS4wMTMyIDI2LjE2NTkgMjQuODQwMSAyNS45NDMzIDI0Ljc4NDVMMTkuNTAxMiAyMy4xOTU2TDMyLjE1MDUgMTAuNTQ2MkMzMi4yMjQ3IDEwLjQ3MiAzMi4yNjggMTAuMzc5MyAzMi4yOTg5IDEwLjI4NjVDMzIuMzU0NSAxMC4xNjI5IDMyLjM3MzEgMTAuMDIwNyAzMi4zMzYgOS44ODQ3TDMwLjM5NDcgMi4zMTczMUMzMC4zMzkxIDIuMDk0NzQgMzAuMTU5OCAxLjkyMTYzIDI5LjkzNzIgMS44NjU5OUwyMi40Mzc4IDAuMDE3NDMyMkMyMi4yODk1IC0wLjAxOTY2NzggMjIuMTQxMSAwLjAwNTA2MjE4IDIyLjAxMTMgMC4wNjY4OTIySDIyLjAwNTFDMjEuOTY4IDAuMDg1NDQyMiAyMS45MzcxIDAuMTEwMTczIDIxLjkgMC4xMzQ5MDNDMjEuODY5MSAwLjE1OTYzMyAyMS44MjU4IDAuMTcxOTkyIDIxLjgwMTEgMC4yMDI5MDJMMC4yMTE3NTUgMjEuNzc5OEMwLjIxMTc1NSAyMS43Nzk4IDAuMTc0NjU3IDIxLjg0MTYgMC4xNDk5NTcgMjEuODcyNUMwLjAxMzk1NjggMjIuMDMzMyAtMC4wMzU1NDMyIDIyLjI0MzUgMC4wMjYzNTY4IDIyLjQ0NzVMMi4xMjIxNiAyOS43NjE0QzIuMTgzOTYgMjkuOTcxNiAyLjM0NDc2IDMwLjEzMjMgMi41NDg3NiAzMC4xODhMOS41NzIwNiAzMi4yMDM0TDExLjU4NzYgMzkuMjIwNkMxMS42NDk0IDM5LjQzMDggMTEuODEwMiAzOS41OTE1IDEyLjAxNDIgMzkuNjQ3MkwxOS4wNjIyIDQxLjY2ODhMMjEuMDgzOSA0OC43MTY5QzIxLjE0NTcgNDguOTI3MSAyMS4zMDY1IDQ5LjA4NzggMjEuNTEwNSA0OS4xNDM1TDI4Ljg1NTMgNTEuMjUxN0MyOC45MTA5IDUxLjI3MDIgMjguOTcyNyA1MS4yNzY0IDI5LjAyODQgNTEuMjc2NEMyOS4wNDA3IDUxLjI3NjQgMjkuMDUzMSA1MS4yNzAyIDI5LjA3MTYgNTEuMjcwMkMyOS4wNzE2IDUxLjI3MDIgMjkuMDc3OCA1MS4yNzAyIDI5LjA4NCA1MS4yNzAyQzI5LjI0NDggNTEuMjcwMiAyOS40MDU1IDUxLjIwODQgMjkuNTI5MiA1MS4wODQ4TDUxLjEyNDYgMjkuNDg5M0M1MS4xOTg3IDI5LjQxNTEgNTEuMjQyIDI5LjMyMjQgNTEuMjcyOSAyOS4yMjk3QzUxLjMyODYgMjkuMTA2IDUxLjM0NzEgMjguOTYzOCA1MS4zMSAyOC44Mjc4TDUxLjMwMzggMjguODM0Wk00MS42MjIxIDM3LjIyMzZMNDAuMDQ1NiAzMS4wNzIxTDQzLjUzODcgMjcuNTg1MUw0OS41NDE4IDI5LjMxTDQxLjYyODMgMzcuMjI5OEw0MS42MjIxIDM3LjIyMzZaTTI5LjM3NDYgNDkuNDcxMUwyNy43OTgxIDQzLjMxOTZMMzQuMTE2NiAzNy4wMDExTDQwLjExOTcgMzguNzI2TDI5LjM3NDYgNDkuNDcxMVpNMzQuMjQ2NCAzNS4xMDNMMzIuNzM3OSAyOS44NDc5TDM4LjE1OTkgMzEuMTgzM0wzNC4yNDY0IDM1LjA5NjlWMzUuMTAzWk0zOS4wMTkzIDMyLjA5ODNMNDAuNDA0MSAzNy40OTU3TDM1LjEzMDUgMzUuOTgwOUwzOS4wMTkzIDMyLjA5MjJWMzIuMDk4M1pNMzkuMTk4NSAzMC4xNTA5TDMzLjA1MzIgMjguNjM2Mkw0MC45NDgyIDIwLjc0MTFMNDIuNjU0NiAyNi42OTQ5TDM5LjE5ODUgMzAuMTUwOVpNMzEuNTI2MSAzMC4xNTdMMzMuMjMyNSAzNi4xMTA4TDI2Ljk0NDkgNDIuMzk4NEwyMC43OTk1IDQwLjg4MzdMMzEuNTI2MSAzMC4xNTdaTTQ4LjI0MzUgMjEuOTI4Mkw0OS44MjAxIDI4LjA3OTdMNDMuODYwMSAyNi4zNjcyTDQyLjE1MzggMjAuNDI1OEw0OC4yNDM1IDIxLjkyODJaTTE5Ljg3MjEgMzkuOTY4NkwxOC4yOTU2IDMzLjgxNzFMMjAuNTcwNyAzMS41NDE5TDI2LjU3MzkgMzMuMjY2OEwxOS44NzIxIDM5Ljk2ODZaTTIwLjcwMDYgMjkuNjQzOUwxOS4xOTIgMjQuMzg4OEwyNC42MTQxIDI1LjcyNDJMMjAuNzAwNiAyOS42Mzc3VjI5LjY0MzlaTTI2Ljg1ODMgMzIuMDQyN0wyMS41ODQ3IDMwLjUyOEwyNS40NzM0IDI2LjYzOTJMMjYuODU4MyAzMi4wMzY1VjMyLjA0MjdaTTE5LjY5MjggMzAuNjU3OEwxNy40NDg2IDMyLjkwMjFMMTEuMzAzMiAzMS4zODc0TDE3Ljk4NjUgMjQuNzA0MUwxOS42OTI4IDMwLjY1NzhaTTEyLjYyMDEgMTEuMTM5N0wxNC4zMjY0IDE3LjA5MzVMNy45ODMxNiAyMy40MzY3TDEuODM3NzUgMjEuOTIyTDEyLjYyMDEgMTEuMTM5N1pNMjEuOTg2NSAxLjc3MzI1TDIzLjY5MjkgNy43MjdMMjAuMjkyNSAxMS4xMjc0TDE0LjE0NzEgOS42MTI2TDIxLjk4NjUgMS43NzMyNVpNMjIuNzE2MSAxOC4yMDAxTDIxLjEzOTUgMTIuMDU0N0wyNC41NzcgOC42MTczTDMwLjU4MDIgMTAuMzM2TDIyLjcxNjEgMTguMjAwMVpNMTUuMzQwNCAxNi4wODU3TDEzLjgzMTggMTAuODMwNkwxOS4yNTM5IDEyLjE2NkwxNS4zNDA0IDE2LjA3OTVWMTYuMDg1N1pNMjAuMTEzMiAxMy4wODFMMjEuNDk4MSAxOC40NzgzTDE2LjIzMDYgMTYuOTYzNkwyMC4xMTk0IDEzLjA3NDhMMjAuMTEzMiAxMy4wODFaTTE1LjIxNjcgMTcuOTc3NUwyMS4yMTk5IDE5LjY5NjNMMTAuNDE5MSAzMC40OTcxTDguODQyNTYgMjQuMzUxN0wxNS4yMTY3IDE3Ljk3NzVaTTI5LjI4MTkgMi45NzI2NkwzMC44NTg0IDkuMTI0MkwyNC44OTg1IDcuNDExN0wyMy4xOTIxIDEuNDcwMzFMMjkuMjgxOSAyLjk3MjY2Wk0xLjUyODY2IDIzLjEzOTlMNi45NTA2NSAyNC40NzUzTDMuMDM3MTYgMjguMzg4OUwxLjUyODY2IDIzLjEzMzdWMjMuMTM5OVpNMy45MjEyNSAyOS4yNzkxTDcuODEwMDYgMjUuMzkwM0w5LjE5NDk1IDMwLjc4NzdMMy45Mjc0NiAyOS4yNzNMMy45MjEyNSAyOS4yNzkxWk0xMi42OTQzIDM4LjU0NjdMMTAuOTg3OSAzMi42MDUzTDE3LjA3NzYgMzQuMTA3N0wxOC42NTQyIDQwLjI1OTJMMTIuNjk0MyAzOC41NDY3Wk0yMC40OTA0IDQyLjEwMTZMMjUuOTEyNCA0My40MzdMMjEuOTk4OSA0Ny4zNTA1TDIwLjQ5MDQgNDIuMDk1NFY0Mi4xMDE2Wk0yMi44ODMgNDguMjQwOEwyNi43NzE4IDQ0LjM1MkwyOC4xNTY2IDQ5Ljc0OTNMMjIuODgzIDQ4LjIzNDZWNDguMjQwOFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl85NjBfMjAxMikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl85NjBfMjAxMiIgeDE9IjMuNTU2NTYiIHkxPSIzMy42ODcyIiB4Mj0iNDguMDAyNCIgeTI9IjE3LjUwNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI5QkNGQSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDMiIHN0b3AtY29sb3I9IiM2NDY0RTQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjQ1QUZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
    },
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
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk4IiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDI5OCAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yOTcuMDk5IDE2Mi4xMTFDMjk3LjA5OSAxNjIuMzQ1IDI5Ny4wMjEgMTYyLjY1NiAyOTcuMDIxIDE2Mi44OUMyOTAuNTUyIDIzNC4wNDggMjMzLjk2OSAyODkuNTM5IDE2NS4wNzIgMjk2LjcxQzE2NC42MDUgMjk2Ljc4OCAxNjQuMTM3IDI5Ni43ODggMTYzLjY3IDI5Ni44NjZMMjk3LjA5OSAxNjIuMTExWiIgZmlsbD0iI0M0RkY2MSIvPgo8cGF0aCBkPSJNMjE0LjE3MyAxNS4wNDJDMjEwLjQzMiAxMy4yNDk0IDIwNi42MTMgMTEuNTM0OCAyMDIuNzE2IDEwLjA1NEMxOTUuMTU2IDcuMDkyMzcgMTg3LjIwNyA0Ljc1NDIxIDE3OS4xMDEgMy4xMTc1MkMxNjkuMzU5IDEuMDkxMTMgMTU5LjIyNyAwIDE0OC44NjEgMEMxNDMuODczIDAgMTM4Ljk2MyAwLjIzMzgzMyAxMzQuMDUzIDAuNzAxNDZDOTkuNzYwNSA0LjA1Mjc5IDY4Ljk3NSAxOS4wOTQ4IDQ1LjUxNTcgNDEuNjk2OEw0NS40Mzc3IDQxLjc3NDdDNDMuODc5IDQzLjMzMzUgNDIuMzIwMiA0NC44OTIzIDQwLjc2MTUgNDYuNDUxTDQwLjY4MzUgNDYuNTI4OUMxOC4zMTU0IDcwLjE0NDEgMy41ODUxMSAxMDEuMTYzIDAuNTQ1NTI3IDEzNS41MzRDMC4xNTU4MzggMTM5Ljg5OSAwIDE0NC4zNDEgMCAxNDguNzgzQzAgMTU5LjkyOSAxLjI0NzAxIDE3MC43NjIgMy41MDcyMSAxODEuMTI4QzUuMjIxODQgMTg4Ljk5OSA3LjYzNzkgMTk2LjcxNSAxMC41OTk1IDIwNC4wNDFDMTIuMjM2MiAyMDguMDk0IDE0LjAyODggMjEyLjA2OSAxNS45NzczIDIxNS45NjZDMTkuNDA2NSAyMjIuNjY5IDIzLjMwMzQgMjI5LjEzNyAyNy42NjggMjM1LjIxN0w1Mi4xNDA0IDIxMC41MUwyMDkuNjUzIDUxLjQzOUwyMzQuMTI1IDI2LjczMjdDMjI3LjgxMiAyMi4zNjgyIDIyMS4xODggMTguNDcxMyAyMTQuMTczIDE1LjA0MlpNMzcuNjQ0IDE3Ni44NDFDMzcuNDEwMSAxNzUuODI4IDM3LjE3NjMgMTc0LjgxNSAzNi45NDI1IDE3My44MDJWMTczLjcyNEMzNS4xNDk5IDE2NS42MTggMzQuMjE0NyAxNTcuMjAxIDM0LjIxNDcgMTQ4Ljc4M0MzNC4yMTQ3IDExOS4zMjMgNDUuMjAzOSA5MS41NzcxIDY1LjMxMTkgNzAuM0w2NS4zODk4IDcwLjIyMjFMNjkuNDQyNyA2Ni4wOTEzTDY5LjUyMDYgNjYuMDEzNEM5MC45NTM1IDQ1LjM1OTkgMTE5LjA4OSAzNC4wNTg5IDE0OC45MzkgMzQuMDU4OUMxNTYuODExIDM0LjA1ODkgMTY0LjY4MyAzNC44MzgzIDE3Mi4zMjEgMzYuMzk3QzE3My40OSAzNi42MzA4IDE3NC42NTkgMzYuOTQyNiAxNzUuOTA2IDM3LjE3NjRMMzcuNjQ0IDE3Ni44NDFaIiBmaWxsPSIjQzRGRjYxIi8+CjxwYXRoIGQ9Ik05Ny41MDAzIDI4OC41MjZDOTMuODM3MiAyODcuMjAxIDkwLjI1MiAyODUuNjQyIDg2LjY2NjkgMjg0LjA4NEM3OS4zNDA3IDI4MC43MzIgNzIuMzI2MyAyNzYuNzU4IDY1LjYyMzcgMjcyLjIzN0wyNzEuMzggNjQuMzc2N0MyNzUuODIyIDcwLjc2NzYgMjc5Ljc5NyA3Ny42MjYxIDI4My4xNDggODQuNzE4NUMyODQuOTQxIDg4LjM4MTYgMjg2LjUgOTIuMjAwNSAyODcuOTgxIDk2LjAxOTVMOTcuNTAwMyAyODguNTI2WiIgZmlsbD0iI0M0RkY2MSIvPgo8L3N2Zz4K",
    },
  },
  yieldSources: {
    eEth: {
      id: "eEth",
      shortName: "Ether.fi Staked ETH",
      protocol: "etherFi",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 1,
    },
    makerDsr: {
      id: "makerDsr",
      shortName: "Maker DSR",
      protocol: "maker",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 1,
    },
    lidoSteth: {
      id: "lidoSteth",
      shortName: "Lido stETH",
      protocol: "lido",
      isSharesPeggedToBase: true,
      historicalRatePeriod: 1,
    },
    morphoSusdeDai: {
      id: "morphoSusdeDai",
      shortName: "Morpho sUSDe/DAI",
      protocol: "morpho",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 1,
    },
    morphoUsdeDai: {
      id: "morphoUsdeDai",
      shortName: "Morpho USDe/DAI",
      protocol: "morpho",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 1,
    },
    morphoWstethUsdc: {
      id: "morphoWstethUsdc",
      shortName: "Morpho wstETH/USDC",
      protocol: "morpho",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 1,
    },
    reth: {
      id: "reth",
      shortName: "Rocket Pool ETH",
      protocol: "rocketPool",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 1,
    },
    ezEth: {
      id: "ezEth",
      shortName: "Renzo ezETH",
      protocol: "renzo",
      isSharesPeggedToBase: false,
      historicalRatePeriod: 14,
    },
  },
  chains: {
    "1": {
      id: 1,
      name: "Mainnet",
      iconUrl:
        "data:image/png;base64,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",
    },
    "42069": {
      id: 42069,
      name: "Cloudchain",
      iconUrl:
        "data:image/png;base64,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",
    },
    "11155111": {
      id: 11155111,
      name: "Sepolia",
      iconUrl:
        "data:image/png;base64,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",
    },
  },
};
