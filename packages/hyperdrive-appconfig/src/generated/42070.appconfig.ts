import { AppConfig } from "src/appconfig/AppConfig";
export const gnosisforkAppConfig: AppConfig = {
  tokens: [
    {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 1,
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      places: 4,
      tags: [],
      iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
    },
    {
      chainId: 42070,
      address: "0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6",
      decimals: 18,
      places: 4,
      name: "Wrapped liquid staked Ether 2.0 from Mainnet",
      symbol: "wstETH",
      iconUrl: "https://cryptologos.cc/logos/steth-steth-logo.png?v=029",
      tags: ["liquidStakingToken"],
    },
    {
      chainId: 42070,
      address: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
      decimals: 18,
      places: 2,
      name: "Wrapped XDAI",
      symbol: "WXDAI",
      iconUrl: "https://docs.gnosischain.com/img/tokens/xdai.png",
      tags: ["stablecoin"],
    },
    {
      chainId: 42070,
      address: "0xaf204776c7245bF4147c2612BF6e5972Ee483701",
      decimals: 18,
      places: 2,
      name: "Savings xDAI",
      symbol: "sDAI",
      iconUrl:
        "https://coin-images.coingecko.com/coins/images/32066/large/sDAI_Logo_%281%29.png",
      tags: [],
    },
  ],
  registries: {
    "42070": "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
  },
  hyperdrives: [
    {
      chainId: 42070,
      kind: "ChainlinkHyperdrive",
      initializationBlock: 35730229n,
      address: "0xceBcC0eEcAf6da7dDA589dD2BEe0da01E4d94F88",
      version: "v1.0.18",
      name: "182d Lido wstETH",
      decimals: 18,
      yieldSource: "gnosisWsteth",
      baseTokenFallback: {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        chainId: 1,
      },
      depositOptions: {
        isBaseTokenDepositEnabled: false,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: false,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0x0000000000000000000000000000000000000000",
        vaultSharesToken: "0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6",
        linkerFactory: "0xD53123342FD44e3B8073a0C3D1eD5992ad26A0D8",
        linkerCodeHash:
          "0xe22fb0ea57ed2788bca42e884bbe1d15783c1871a589f7e98e941ad0478054da",
        initialVaultSharePrice: 1177202340341936637n,
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
      chainId: 42070,
      kind: "ERC4626Hyperdrive",
      address: "0xa9EFA2F818C12B8Ed401421e1F61c413F84084B1",
      version: "v1.0.18",
      name: "182d Savings xDAI",
      initializationBlock: 35730236n,
      decimals: 18,
      yieldSource: "sxDai",
      depositOptions: {
        isBaseTokenDepositEnabled: true,
        isShareTokenDepositsEnabled: true,
      },
      withdrawOptions: {
        isBaseTokenWithdrawalEnabled: true,
        isShareTokenWithdrawalEnabled: true,
      },
      poolConfig: {
        baseToken: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
        vaultSharesToken: "0xaf204776c7245bF4147c2612BF6e5972Ee483701",
        linkerFactory: "0xD53123342FD44e3B8073a0C3D1eD5992ad26A0D8",
        linkerCodeHash:
          "0xe22fb0ea57ed2788bca42e884bbe1d15783c1871a589f7e98e941ad0478054da",
        initialVaultSharePrice: 1106737440354399715n,
        minimumShareReserves: 1000000000000000n,
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
      historicalRatePeriod: 30,
    },
    makerDsr: {
      id: "makerDsr",
      shortName: "Maker DSR",
      protocol: "maker",
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
      historicalRatePeriod: 1,
    },
    morphoUsdeDai: {
      id: "morphoUsdeDai",
      shortName: "Morpho USDe/DAI",
      protocol: "morpho",
      historicalRatePeriod: 1,
    },
    morphoWstethUsdc: {
      id: "morphoWstethUsdc",
      shortName: "Morpho wstETH/USDC",
      protocol: "morpho",
      historicalRatePeriod: 1,
    },
    reth: {
      id: "reth",
      shortName: "Rocket Pool ETH",
      protocol: "rocketPool",
      historicalRatePeriod: 1,
    },
    ezEth: {
      id: "ezEth",
      shortName: "Renzo ezETH",
      protocol: "renzo",
      historicalRatePeriod: 14,
    },
    gnosisWsteth: {
      id: "gnosisWsteth",
      shortName: "Lido wstETH",
      protocol: "lido",
      historicalRatePeriod: 1,
    },
    sxDai: {
      id: "sxDai",
      shortName: "Savings xDAI",
      protocol: "maker",
      historicalRatePeriod: 1,
    },
  },
  chains: {
    "1": {
      id: 1,
      name: "Mainnet",
      dailyAverageBlocks: 7172n,
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMqADAAQAAAABAAAAMgAAAAB1y6+rAAAFjUlEQVRYCaVZW28TRxT2em3HGEqcBERERQEVEWipCKiRKrUSaaU+8xeo1If+gfBUCfWHtK88IcEbFaIg1KhURU3SCnEppiE32a7jmMR2fNlLv9nxzo53x7Mzy8qyz56Zc86353x7ZnZtfHOjmkp2uDBzU4bhWeObnAeHi6F0WBkMx0iw1Dq42EAywAQPnJ76I0O+EhA1D11YNDeaQTz0WpZKsIyUlk8xaJoxRUcxsAxyoYbLyiGOqKH1yxkDTwYLSXIJLXxXGtFjp7ryCoyCRaBoJenz2fz509lYOGyC71x8zUJYmBqTZOadCkeK6avzhdmzuVxGz9ALJEAmhKXrOnV1/uCRopnLGhdnciHECqeCcGFY8pILYyBVqCAd+uh0dnrKFE6TKKNBh2GRggtSKvGIoevXivyEi2e1E+aFHYo7DEuQTj6iQEaeUD5+ANnS4v7ANlgwiIKDpb9EUKbzmKiciPu4y4KEcbCG8UaDRTWU6VF9Mu5jbWeufFiJUsWYztwxIRn3mbkPSz9VIaYzj0xIwH3PlpSSwNLPVCrKdIaGCcm4T/lFYOlmahTTGSAmJOA+7WF+EZknBWEU06OmybgPP2nuroy6FWj4ni4YjqiScN9NpYNeEfEoVAiZXmvYKy+6v//VrdTsqJUu99H0M1rE+vqzA3xPtyx3s2ptVGzLJlfX6bnPV/urW9ap45mpYjrj7yYo95/9248iFmqw98wIB4RKlA+w6FAIED+fgsvnjOJ76ZPHM/kx0iTB/dK61bNUa6MBizK9sedUtq3ajkMzxAPiZYArb9v4IFUU3NyF3OJyl58jkVVhnZjOfPxhDgQCLIm76BAFh0y/fywDiDiNzolqVGEdPpheXNo/VEjSUBC11nCq9W6zrXpJqrCelnpvtvq4p86c0NiwszTstpxG03FUqcVvbJgPkYAiNvfdxZXurfst9YuGJ0Kyul3fI5gOFYI9gihIoFMtyn7HvX5tHBQBuFu/tBeXO7HgAARogAnIJg9jYz2m2LqRU3P2yoJK62p3XHy+/3Ziqmiula3Nqr1etrCaHp0ItqZvtix2vahateEAEJ6FLp8f+2I2/+x1v1xX45brmpeuLHDbL+ZWIJRrdiFvfPnpgcvnxgCxtGFt/WeX1vuT4ya9FSgsQKnu2M0O2Zdg9/zVXB43IHrp3yXldpo2zEvzCwIII1SvN6y5C/mjRRPIsLdZet5tNAm+VttBmZC/2ltnp+nYTurYlIkMzZzMmqaBcj/6swul+mHovt8C93/4boIF+HW5c+dha7vhYLOA1g9eo2p4WsQKzeaQu2Rf+SYkBPSy5RoxbwRYAAi7TQcV/OTM4Knrg+kMMgdH/6z1+aoxk5WXvbWKUgulJqg91kRSxOjTI3MqFFDKmVM5tmYX8mmgRE3zWQNdDVVjVvW3zqOlDjtVEbx3RMp9K+Txp9t7yBmvBMrJ8aF2A0o9eLLPz4mVmUfmiGlibckEbLBu3m3Kp6J8OpQizlieGSw0L6aUhxuMoqPee9weNfXVev/VRtDGRk3j9XxiGCzcALyenz9SvvOwjTU4Oozy/fG0F9VLNbjtgiOA5en0kIFeP97eDZz50oMnHfUd38BoeKkJwcJbSd+32u+L1X6olKBUfVeQQok/8ip0OG4IlvYzI4LdvNvCFp5GRfmWX+qXbzhVcBWGJbkmyRDtF72++/Nveh1h1Pti1W2gBBOG0C+wBG1WLM2OQCvHc30QRwbLWwfkeILRe4/18gQ+0YYeuOAkWRH9ig+zkTN+B1GGCW5lsPyo9E8D/+zdfv13a4LC8Y5VYJElHTbePxq8rZ7s5Rw9Uyn3SrBofA6ckmtqhanYOJEvch6TJGqCbxnl2SRe4HlK8uclko82gAxGAwRdaIfWFd7ZSPl/Ad8oNMb3hysAAAAASUVORK5CYII=",
    },
    "100": {
      id: 100,
      name: "Gnosis",
      earliestBlock: 35732205n,
      dailyAverageBlocks: 16605n,
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0OTlfNzU1KSI+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNDgwMjEgNC45NTkwMUMxMS41NzQyIC0wLjg0OTg5OCAyMS4yMjQ5IC0wLjYyMTgxNyAyNy4wMzM4IDUuNDcyMTlDMjcuNDExNSA1Ljg3MTMzIDI3Ljc3NSA2LjI4NDczIDI4LjEwMjkgNi43MTk1MUwxNi4wMDA0IDE4LjgyOTFMMy44OTc5MSA2LjcxOTUxQzQuMjMyOSA2LjI4NDczIDQuNTg5MjggNS44NzEzMyA0Ljk2NzAzIDUuNDcyMTlDNS4xMzA5NyA1LjMwMTEzIDUuMzAyMDMgNS4xMzAwNyA1LjQ4MDIxIDQuOTU5MDFaTTI1LjM4MDIgNi42MjY4NUMyMi44ODU2IDQuMTE3OTcgMTkuNTY0MSAyLjc0MjM2IDE2LjAwMDQgMi43NDIzNkMxMi40MzY3IDIuNzQyMzYgOS4xMTUyNCA0LjExNzk3IDYuNjIwNjEgNi42MjY4NUwxNi4wMDA0IDE2LjAwNjZMMjUuMzgwMiA2LjYyNjg1Wk0yOS4wNTEgOC4wOTUxM0wyNi41OTIgMTAuNTU0MUMyOC41NzM0IDEyLjkyNzYgMjguMjU5OCAxNi40NjI4IDI1Ljg4NjQgMTguNDQ0M0MyMy44MDUxIDIwLjE4MzQgMjAuNzgzMSAyMC4xODM0IDE4LjcwMTggMTguNDQ0M0wxNi4wMDA1IDIxLjE0NTZMMTMuMzA2MyAxOC40NTE0QzEwLjkzMjkgMjAuNDMyOCA3LjM5NzY0IDIwLjExOTIgNS40MTYxOSAxNy43NDU4QzMuNjc3MDggMTUuNjY0NSAzLjY3NzA4IDEyLjY0MjUgNS40MTYxOSAxMC41NjEyTDQuMTU0NjIgOS4yOTk2OEwyLjk1NzIxIDguMDk1MTNDMS41MTAzMiAxMC40NzU3IDAuNzQ3NjgxIDEzLjIxMjcgMC43NDc2ODEgMTUuOTk5NUMwLjc0NzY4MSAyNC40MjQyIDcuNTc1ODIgMzEuMjUyNCAxNi4wMDA1IDMxLjI1MjRDMjQuNDI1MiAzMS4yNTI0IDMxLjI1MzQgMjQuNDI0MiAzMS4yNTM0IDE1Ljk5OTVDMzEuMjYwNSAxMy4yMTI3IDMwLjQ5MDcgMTAuNDc1NyAyOS4wNTEgOC4wOTUxM1pNMjUuNDIzMiAxMS43MjNDMjUuOTU3OCAxMi40MTQ0IDI2LjI1IDEzLjI2OTcgMjYuMjUgMTQuMTQ2NEMyNi4yNSAxNS4wMjMxIDI1Ljk1NzggMTUuODc4NCAyNS40MjMyIDE2LjU2OTdDMjQuMDgzMyAxOC4zMDE3IDIxLjU5NTggMTguNjIyNSAxOS44NjM4IDE3LjI4MjVMMjUuNDIzMiAxMS43MjNaTTEyLjEzNzQgMTcuMjg5NkMxMS40NDYgMTcuODI0MiAxMC41OTA3IDE4LjExNjQgOS43MTQwMyAxOC4xMTY0QzguODM3MzUgMTguMTE2NCA3Ljk4OTE4IDE3LjgyNDIgNy4yOTA2OCAxNy4yOTY3QzUuNTU4NyAxNS45NTY4IDUuMjM3OTYgMTMuNDYyMSA2LjU3NzkzIDExLjczMDJMMTIuMTM3NCAxNy4yODk2WiIgZmlsbD0iIzNFNjk1NyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0OTlfNzU1Ij4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    },
    "42069": {
      id: 42069,
      name: "Cloudchain",
      dailyAverageBlocks: 7172n,
      iconUrl:
        "data:image/png;base64,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",
    },
    "42070": {
      id: 42070,
      name: "Gnosis Fork",
      dailyAverageBlocks: 16605n,
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0OTlfNzU1KSI+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNDgwMjEgNC45NTkwMUMxMS41NzQyIC0wLjg0OTg5OCAyMS4yMjQ5IC0wLjYyMTgxNyAyNy4wMzM4IDUuNDcyMTlDMjcuNDExNSA1Ljg3MTMzIDI3Ljc3NSA2LjI4NDczIDI4LjEwMjkgNi43MTk1MUwxNi4wMDA0IDE4LjgyOTFMMy44OTc5MSA2LjcxOTUxQzQuMjMyOSA2LjI4NDczIDQuNTg5MjggNS44NzEzMyA0Ljk2NzAzIDUuNDcyMTlDNS4xMzA5NyA1LjMwMTEzIDUuMzAyMDMgNS4xMzAwNyA1LjQ4MDIxIDQuOTU5MDFaTTI1LjM4MDIgNi42MjY4NUMyMi44ODU2IDQuMTE3OTcgMTkuNTY0MSAyLjc0MjM2IDE2LjAwMDQgMi43NDIzNkMxMi40MzY3IDIuNzQyMzYgOS4xMTUyNCA0LjExNzk3IDYuNjIwNjEgNi42MjY4NUwxNi4wMDA0IDE2LjAwNjZMMjUuMzgwMiA2LjYyNjg1Wk0yOS4wNTEgOC4wOTUxM0wyNi41OTIgMTAuNTU0MUMyOC41NzM0IDEyLjkyNzYgMjguMjU5OCAxNi40NjI4IDI1Ljg4NjQgMTguNDQ0M0MyMy44MDUxIDIwLjE4MzQgMjAuNzgzMSAyMC4xODM0IDE4LjcwMTggMTguNDQ0M0wxNi4wMDA1IDIxLjE0NTZMMTMuMzA2MyAxOC40NTE0QzEwLjkzMjkgMjAuNDMyOCA3LjM5NzY0IDIwLjExOTIgNS40MTYxOSAxNy43NDU4QzMuNjc3MDggMTUuNjY0NSAzLjY3NzA4IDEyLjY0MjUgNS40MTYxOSAxMC41NjEyTDQuMTU0NjIgOS4yOTk2OEwyLjk1NzIxIDguMDk1MTNDMS41MTAzMiAxMC40NzU3IDAuNzQ3NjgxIDEzLjIxMjcgMC43NDc2ODEgMTUuOTk5NUMwLjc0NzY4MSAyNC40MjQyIDcuNTc1ODIgMzEuMjUyNCAxNi4wMDA1IDMxLjI1MjRDMjQuNDI1MiAzMS4yNTI0IDMxLjI1MzQgMjQuNDI0MiAzMS4yNTM0IDE1Ljk5OTVDMzEuMjYwNSAxMy4yMTI3IDMwLjQ5MDcgMTAuNDc1NyAyOS4wNTEgOC4wOTUxM1pNMjUuNDIzMiAxMS43MjNDMjUuOTU3OCAxMi40MTQ0IDI2LjI1IDEzLjI2OTcgMjYuMjUgMTQuMTQ2NEMyNi4yNSAxNS4wMjMxIDI1Ljk1NzggMTUuODc4NCAyNS40MjMyIDE2LjU2OTdDMjQuMDgzMyAxOC4zMDE3IDIxLjU5NTggMTguNjIyNSAxOS44NjM4IDE3LjI4MjVMMjUuNDIzMiAxMS43MjNaTTEyLjEzNzQgMTcuMjg5NkMxMS40NDYgMTcuODI0MiAxMC41OTA3IDE4LjExNjQgOS43MTQwMyAxOC4xMTY0QzguODM3MzUgMTguMTE2NCA3Ljk4OTE4IDE3LjgyNDIgNy4yOTA2OCAxNy4yOTY3QzUuNTU4NyAxNS45NTY4IDUuMjM3OTYgMTMuNDYyMSA2LjU3NzkzIDExLjczMDJMMTIuMTM3NCAxNy4yODk2WiIgZmlsbD0iIzNFNjk1NyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0OTlfNzU1Ij4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    },
    "11155111": {
      id: 11155111,
      name: "Sepolia",
      dailyAverageBlocks: 7172n,
      iconUrl:
        "data:image/png;base64,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",
    },
  },
};
