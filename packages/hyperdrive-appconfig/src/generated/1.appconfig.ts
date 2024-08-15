import { AppConfig } from "src/appconfig/AppConfig";
export const mainnetAppConfig: AppConfig = {
  chainId: 1,
  tokens: [
    {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      decimals: 18,
      places: 2,
      name: "Dai Stablecoin",
      symbol: "DAI",
      iconUrl:
        "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=029",
      tags: ["stablecoin"],
      extensions: {},
    },
    {
      address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
      decimals: 18,
      places: 4,
      name: "Liquid staked Ether 2.0",
      symbol: "stETH",
      iconUrl: "https://cryptologos.cc/logos/steth-steth-logo.png?v=029",
      tags: ["liquidStakingToken"],
      extensions: {},
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
      address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
      decimals: 18,
      places: 4,
      name: "Renzo Restaked ETH",
      symbol: "ezETH",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMiIgdmlld0JveD0iMCAwIDIwMCAyMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTk4LjM2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyKSIgZmlsbD0iIzA4MEIxQiIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZF83N180MykiPgo8cGF0aCBkPSJNMTAwLjExMSA0NC4xMjA0TDk5LjM0ODMgNDYuNzEzMUw5OS4zNDgzIDEyMS45NDFMMTAwLjExMSAxMjIuNzAyTDEzNC45NzggMTAyLjA2MUwxMDAuMTExIDQ0LjEyMDRaIiBmaWxsPSIjNkI2QjZCIi8+CjxwYXRoIGQ9Ik0xMDAuMTExIDQ0LjEyMDRMNjUuMjQxNyAxMDIuMDYxTDEwMC4xMTEgMTIyLjcwMkwxMDAuMTExIDg2LjE4ODlMMTAwLjExMSA0NC4xMjA0WiIgZmlsbD0iI0EyQTJBMiIvPgo8cGF0aCBkPSJNMTAwLjExMSAxMjkuMzE0TDk5LjY4MDkgMTI5LjgzOEw5OS42ODA5IDE1Ni42MzZMMTAwLjExMSAxNTcuODkyTDEzNSAxMDguNjgzTDEwMC4xMTEgMTI5LjMxNFoiIGZpbGw9IiM0RjRFNEUiLz4KPHBhdGggZD0iTTEwMC4xMTEgMTU3Ljg5MkwxMDAuMTExIDEyOS4zMTRMNjUuMjQxNyAxMDguNjgzTDEwMC4xMTEgMTU3Ljg5MloiIGZpbGw9IiNBMkEyQTIiLz4KPHBhdGggZD0iTTEwMC4xMTEgMTIyLjcwMkwxMzQuOTc4IDEwMi4wNjFMMTAwLjExMSA4Ni4xODg5TDEwMC4xMTEgMTIyLjcwMloiIGZpbGw9IiM3OTc5NzkiLz4KPHBhdGggZD0iTTY1LjI0MTcgMTAyLjA2MUwxMDAuMTExIDEyMi43MDJMMTAwLjExMSA4Ni4xODg5TDY1LjI0MTcgMTAyLjA2MVoiIGZpbGw9IiNENEQ0RDQiLz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiPgo8cGF0aCBkPSJNMTAwLjExIDQ0LjEyMDRMOTkuMzQ4MyA0Ni43MTMxTDk5LjM0ODMgMTIxLjk0MUwxMDAuMTEgMTIyLjcwMkwxMzQuOTc4IDEwMi4wNjFMMTAwLjExIDQ0LjEyMDRaIiBmaWxsPSIjQUNFNzMwIi8+CjxwYXRoIGQ9Ik0xMDAuMTEgNDQuMTIwNEw2NS4yNDE3IDEwMi4wNjFMMTAwLjExIDEyMi43MDJMMTAwLjExIDg2LjE4ODlMMTAwLjExIDQ0LjEyMDRaIiBmaWxsPSIjQUNFNzMwIi8+CjxwYXRoIGQ9Ik0xMDAuMTExIDEyOS4zMTRMOTkuNjgwOSAxMjkuODM4TDk5LjY4MDkgMTU2LjYzNkwxMDAuMTExIDE1Ny44OTJMMTM1IDEwOC42ODNMMTAwLjExMSAxMjkuMzE0WiIgZmlsbD0iI0FDRTczMCIvPgo8cGF0aCBkPSJNMTAwLjExMSAxNTcuODkyTDEwMC4xMTEgMTI5LjMxNEw2NS4yNDE3IDEwOC42ODNMMTAwLjExMSAxNTcuODkyWiIgZmlsbD0iI0FDRTczMCIvPgo8cGF0aCBkPSJNMTAwLjExIDEyMi43MDJMMTM0Ljk3OCAxMDIuMDYxTDEwMC4xMSA4Ni4xODg5TDEwMC4xMSAxMjIuNzAyWiIgZmlsbD0iI0FDRTczMCIvPgo8cGF0aCBkPSJNNjUuMjQxNyAxMDIuMDYxTDEwMC4xMSAxMjIuNzAyTDEwMC4xMSA4Ni4xODg5TDY1LjI0MTcgMTAyLjA2MVoiIGZpbGw9IiNBQ0U3MzAiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkXzc3XzQzIiB4PSIyMS4yMTMxIiB5PSIwLjA5MTgwMDciIHdpZHRoPSIxNTcuODE1IiBoZWlnaHQ9IjIwMS44MjgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldC8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjY3MjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuNjc0NTEgMCAwIDAgMCAwLjkwNTg4MiAwIDAgMCAwIDAuMTg4MjM1IDAgMCAwIDAuNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Xzc3XzQzIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyMi4wMTQzIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjY3NDUxIDAgMCAwIDAgMC45MDU4ODIgMCAwIDAgMCAwLjE4ODIzNSAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183N180MyIgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3dfNzdfNDMiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QyX2Ryb3BTaGFkb3dfNzdfNDMiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==",
      tags: ["liquidStakingToken"],
      extensions: {},
    },
    {
      address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
      decimals: 18,
      places: 4,
      name: "Rocket Pool ETH",
      symbol: "rETH",
      iconUrl:
        "https://cryptologos.cc/logos/rocket-pool-eth-reth-logo.svg?v=031",
      tags: ["liquidStakingToken"],
      extensions: {},
    },
    {
      address: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
      decimals: 18,
      places: 2,
      name: "Savings Dai",
      symbol: "sDAI",
      iconUrl: "https://etherscan.io/token/images/Badgedai_32.svg",
      tags: [],
      extensions: {},
    },
  ],
  registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  hyperdrives: [
    {
      address: "0xd7e470043241C10970953Bd8374ee6238e77D735",
      version: "v1.0.13",
      name: "182d Lido stETH",
      decimals: 18,
      yieldSource: "lidoSteth",
      sharesToken: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
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
      address: "0x324395D5d835F84a02A75Aa26814f6fD22F25698",
      version: "v1.0.13",
      name: "182d Maker DSR",
      decimals: 18,
      yieldSource: "makerDsr",
      sharesToken: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
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
      address: "0xca5dB9Bb25D09A9bF3b22360Be3763b5f2d13589",
      version: "v1.0.15",
      name: "182d Rocket Pool ETH",
      decimals: 18,
      yieldSource: "reth",
      sharesToken: "0xae78736Cd615f374D3085123A210448E74Fc6393",
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
      address: "0xd41225855A5c5Ba1C672CcF4d72D1822a5686d30",
      version: "v1.0.17",
      name: "182d Morpho sUSDe/DAI",
      decimals: 18,
      yieldSource: "morphoSusdeDai",
      sharesToken: "0x0000000000000000000000000000000000000000",
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
      address: "0xA29A771683b4857bBd16e1e4f27D5B6bfF53209B",
      version: "v1.0.17",
      name: "182d Morpho USDe/DAI",
      decimals: 18,
      yieldSource: "morphoUsdeDai",
      sharesToken: "0x0000000000000000000000000000000000000000",
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
      address: "0x4c3054e51b46BE3191be9A05e73D73F1a2147854",
      version: "v1.0.15",
      name: "182d Renzo ezETH",
      decimals: 18,
      yieldSource: "ezEth",
      sharesToken: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
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
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk4IiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDI5OCAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yOTcuMDk5IDE2Mi4xMTFDMjk3LjA5OSAxNjIuMzQ1IDI5Ny4wMjEgMTYyLjY1NiAyOTcuMDIxIDE2Mi44OUMyOTAuNTUyIDIzNC4wNDggMjMzLjk2OSAyODkuNTM5IDE2NS4wNzIgMjk2LjcxQzE2NC42MDUgMjk2Ljc4OCAxNjQuMTM3IDI5Ni43ODggMTYzLjY3IDI5Ni44NjZMMjk3LjA5OSAxNjIuMTExWiIgZmlsbD0iI0M0RkY2MSIvPgo8cGF0aCBkPSJNMjE0LjE3MyAxNS4wNDJDMjEwLjQzMiAxMy4yNDk0IDIwNi42MTMgMTEuNTM0OCAyMDIuNzE2IDEwLjA1NEMxOTUuMTU2IDcuMDkyMzcgMTg3LjIwNyA0Ljc1NDIxIDE3OS4xMDEgMy4xMTc1MkMxNjkuMzU5IDEuMDkxMTMgMTU5LjIyNyAwIDE0OC44NjEgMEMxNDMuODczIDAgMTM4Ljk2MyAwLjIzMzgzMyAxMzQuMDUzIDAuNzAxNDZDOTkuNzYwNSA0LjA1Mjc5IDY4Ljk3NSAxOS4wOTQ4IDQ1LjUxNTcgNDEuNjk2OEw0NS40Mzc3IDQxLjc3NDdDNDMuODc5IDQzLjMzMzUgNDIuMzIwMiA0NC44OTIzIDQwLjc2MTUgNDYuNDUxTDQwLjY4MzUgNDYuNTI4OUMxOC4zMTU0IDcwLjE0NDEgMy41ODUxMSAxMDEuMTYzIDAuNTQ1NTI3IDEzNS41MzRDMC4xNTU4MzggMTM5Ljg5OSAwIDE0NC4zNDEgMCAxNDguNzgzQzAgMTU5LjkyOSAxLjI0NzAxIDE3MC43NjIgMy41MDcyMSAxODEuMTI4QzUuMjIxODQgMTg4Ljk5OSA3LjYzNzkgMTk2LjcxNSAxMC41OTk1IDIwNC4wNDFDMTIuMjM2MiAyMDguMDk0IDE0LjAyODggMjEyLjA2OSAxNS45NzczIDIxNS45NjZDMTkuNDA2NSAyMjIuNjY5IDIzLjMwMzQgMjI5LjEzNyAyNy42NjggMjM1LjIxN0w1Mi4xNDA0IDIxMC41MUwyMDkuNjUzIDUxLjQzOUwyMzQuMTI1IDI2LjczMjdDMjI3LjgxMiAyMi4zNjgyIDIyMS4xODggMTguNDcxMyAyMTQuMTczIDE1LjA0MlpNMzcuNjQ0IDE3Ni44NDFDMzcuNDEwMSAxNzUuODI4IDM3LjE3NjMgMTc0LjgxNSAzNi45NDI1IDE3My44MDJWMTczLjcyNEMzNS4xNDk5IDE2NS42MTggMzQuMjE0NyAxNTcuMjAxIDM0LjIxNDcgMTQ4Ljc4M0MzNC4yMTQ3IDExOS4zMjMgNDUuMjAzOSA5MS41NzcxIDY1LjMxMTkgNzAuM0w2NS4zODk4IDcwLjIyMjFMNjkuNDQyNyA2Ni4wOTEzTDY5LjUyMDYgNjYuMDEzNEM5MC45NTM1IDQ1LjM1OTkgMTE5LjA4OSAzNC4wNTg5IDE0OC45MzkgMzQuMDU4OUMxNTYuODExIDM0LjA1ODkgMTY0LjY4MyAzNC44MzgzIDE3Mi4zMjEgMzYuMzk3QzE3My40OSAzNi42MzA4IDE3NC42NTkgMzYuOTQyNiAxNzUuOTA2IDM3LjE3NjRMMzcuNjQ0IDE3Ni44NDFaIiBmaWxsPSIjQzRGRjYxIi8+CjxwYXRoIGQ9Ik05Ny41MDAzIDI4OC41MjZDOTMuODM3MiAyODcuMjAxIDkwLjI1MiAyODUuNjQyIDg2LjY2NjkgMjg0LjA4NEM3OS4zNDA3IDI4MC43MzIgNzIuMzI2MyAyNzYuNzU4IDY1LjYyMzcgMjcyLjIzN0wyNzEuMzggNjQuMzc2N0MyNzUuODIyIDcwLjc2NzYgMjc5Ljc5NyA3Ny42MjYxIDI4My4xNDggODQuNzE4NUMyODQuOTQxIDg4LjM4MTYgMjg2LjUgOTIuMjAwNSAyODcuOTgxIDk2LjAxOTVMOTcuNTAwMyAyODguNTI2WiIgZmlsbD0iI0M0RkY2MSIvPgo8L3N2Zz4K",
    },
  },
  yieldSources: {
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
      historicalRatePeriod: 7,
    },
  },
};
