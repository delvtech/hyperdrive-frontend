import { AppConfig } from "src/appconfig/AppConfig";
export const gnosisAppConfig: AppConfig = {
  tokens: [
    {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 1,
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      places: 4,
      tags: [],
      iconUrl:
        "data:image/png;base64,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",
    },
    {
      chainId: 100,
      address: "0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6",
      decimals: 18,
      places: 4,
      name: "Wrapped liquid staked Ether 2.0 from Mainnet",
      symbol: "wstETH",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM5Ny4zODUgNTEyIDUxMiAzOTcuMzg1IDUxMiAyNTZDNTEyIDExNC42MTUgMzk3LjM4NSAwIDI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZDMCAzOTcuMzg1IDExNC42MTUgNTEyIDI1NiA1MTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUwLjk4OCAyMzcuODEyTDE0OC4xMjIgMjQyLjIwOUMxMTUuNzk2IDI5MS43OTggMTIzLjAxNiAzNTYuNzQyIDE2NS40OCAzOTguMzQ4QzE5MC40NjEgNDIyLjgyNiAyMjMuMjAyIDQzNS4wNjYgMjU1Ljk0NCA0MzUuMDY5QzI1NS45NDQgNDM1LjA2OSAyNTUuOTQ0IDQzNS4wNjkgMTUwLjk4OCAyMzcuODEyWiIgZmlsbD0iIzAwQTNGRiIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0yNTUuOTE0IDI5Ny43NjRMMTUwLjk1OCAyMzcuODEyQzI1NS45MTQgNDM1LjA2OSAyNTUuOTE0IDQzNS4wNjkgMjU1LjkxNCA0MzUuMDY5QzI1NS45MTQgMzkyLjEwOCAyNTUuOTE0IDM0Mi44OCAyNTUuOTE0IDI5Ny43NjRaIiBmaWxsPSIjMDBBM0ZGIi8+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTM2MS4wMTIgMjM3LjgxMkwzNjMuODc4IDI0Mi4yMDlDMzk2LjIwNCAyOTEuNzk4IDM4OC45ODQgMzU2Ljc0MiAzNDYuNTIgMzk4LjM0OEMzMjEuNTM5IDQyMi44MjYgMjg4Ljc5OCA0MzUuMDY2IDI1Ni4wNTYgNDM1LjA2OUMyNTYuMDU2IDQzNS4wNjkgMjU2LjA1NiA0MzUuMDY5IDM2MS4wMTIgMjM3LjgxMloiIGZpbGw9IiMwMEEzRkYiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMjU2LjA0NCAyOTcuNzY0TDM2MSAyMzcuODEyQzI1Ni4wNDUgNDM1LjA2OSAyNTYuMDQ0IDQzNS4wNjkgMjU2LjA0NCA0MzUuMDY5QzI1Ni4wNDQgMzkyLjEwOCAyNTYuMDQ0IDM0Mi44OCAyNTYuMDQ0IDI5Ny43NjRaIiBmaWxsPSIjMDBBM0ZGIi8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTI1Ni4wODMgMTYzLjgzM1YyNjcuMjMzTDM0Ni40OTEgMjE1LjU2N0wyNTYuMDgzIDE2My44MzNaIiBmaWxsPSIjMDBBM0ZGIi8+CjxwYXRoIG9wYWNpdHk9IjAuNiIgZD0iTTI1Ni4wNTYgMTYzLjgzM0wxNjUuNTgzIDIxNS41NjVMMjU2LjA1NiAyNjcuMjMzVjE2My44MzNaIiBmaWxsPSIjMDBBM0ZGIi8+CjxwYXRoIGQ9Ik0yNTYuMDU2IDc2Ljg3NUwxNjUuNTgzIDIxNS41OTlMMjU2LjA1NiAxNjMuNzIyVjc2Ljg3NVoiIGZpbGw9IiMwMEEzRkYiLz4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMjU2LjA4MyAxNjMuNzA2TDM0Ni41NiAyMTUuNTg1TDI1Ni4wODMgNzYuNzkxN1YxNjMuNzA2WiIgZmlsbD0iIzAwQTNGRiIvPgo8L3N2Zz4K",
      tags: ["liquidStakingToken"],
    },
    {
      chainId: 100,
      address: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
      decimals: 18,
      places: 2,
      name: "Wrapped XDAI",
      symbol: "WXDAI",
      iconUrl: "https://docs.gnosischain.com/img/tokens/xdai.png",
      tags: ["stablecoin"],
    },
    {
      chainId: 100,
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
    "100": "0x666fa9ef9bca174a042c4c306b23ba8ee0c59666",
  },
  hyperdrives: [
    {
      chainId: 100,
      kind: "ChainlinkHyperdrive",
      initializationBlock: 35732205n,
      initializationTimestamp: 1724956225n,
      address: "0x2f840f1575EE77adAa43415Ac5953F7Db9F8C6ba",
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
        linkerFactory: "0xe61Fb0F6A265F614ca6bF2ee83BbC463cB34dA38",
        linkerCodeHash:
          "0xe22fb0ea57ed2788bca42e884bbe1d15783c1871a589f7e98e941ad0478054da",
        initialVaultSharePrice: 1177291724015665698n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 35000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 15653294255762199n,
        governance: "0xE15e918E67C5AC555C6B133Cb91Fb64Ebf196Ea5",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
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
      chainId: 100,
      kind: "ERC4626Hyperdrive",
      address: "0xEe9BFf933aDD313C4289E98dA80fEfbF9d5Cd9Ba",
      version: "v1.0.18",
      name: "182d Savings xDAI",
      initializationBlock: 35732218n,
      initializationTimestamp: 1724956290n,
      decimals: 18,
      yieldSource: "sxdai",
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
        linkerFactory: "0xe61Fb0F6A265F614ca6bF2ee83BbC463cB34dA38",
        linkerCodeHash:
          "0xe22fb0ea57ed2788bca42e884bbe1d15783c1871a589f7e98e941ad0478054da",
        initialVaultSharePrice: 1107002572315919817n,
        minimumShareReserves: 1000000000000000n,
        minimumTransactionAmount: 1000000000000000n,
        circuitBreakerDelta: 50000000000000000n,
        positionDuration: 15724800n,
        checkpointDuration: 86400n,
        timeStretch: 22441807975912219n,
        governance: "0xE15e918E67C5AC555C6B133Cb91Fb64Ebf196Ea5",
        feeCollector: "0x0000000000000000000000000000000000000000",
        sweepCollector: "0x9eB168Ab44B7c479431681558FdF34230c969DE9",
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
    angle: {
      id: "angle",
      name: "Angle",
      iconUrl:
        "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjE1NSIgaGVpZ2h0PSIxNTUiIHZpZXdCb3g9IjAgMCAxNTUgMTU1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI3Ny4wNTg2IiBjeT0iNzcuOTY0MSIgcj0iNzciIGZpbGw9IiNGQUYxRTciLz4KPHBhdGggZD0iTTEyMi4zNzcgOTUuNzk3Nkw3Ny4xMDUzIDUwLjQxNjRMMzEuODMzNyA5NS43OTc2TDU0LjQ2OTggMTE4LjQ4OUw3Ny4xMDU2IDk1Ljc5NzlMOTkuNzQxMSAxMTguNDg4TDEyMi4zNzcgOTUuNzk3NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03Ny4xMDU1IDk1Ljc5N0w5OS43NDE0IDExOC40OTFMMTA0LjI2OCAxMDcuMjUzTDc3LjEwNTUgODAuMDI0N0w3Ny4xMDU1IDk1Ljc5N1oiIGZpbGw9IiNGQUYxRTciIHN0cm9rZT0iIzFGMjMzMyIgc3Ryb2tlLXdpZHRoPSIxLjcxMjk0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMjIuMzggOTUuNzkyNEw5OS43NDE3IDExOC40ODRMMTA0LjI2OSAxMDcuMjUzTDEzMS40MzIgODAuMDI0N0wxMjIuMzggOTUuNzkyNFoiIGZpbGw9IiMxRjIzMzMiIHN0cm9rZT0iIzFGMjMzMyIgc3Ryb2tlLXdpZHRoPSIxLjcxMjk0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03Ny4xMDYgOTUuNzk3TDU0LjQ3IDExOC40OTFMNDkuOTQzIDEwNy4yNTNMNzcuMTA2IDgwLjAyNDdMNzcuMTA2IDk1Ljc5N1oiIGZpbGw9IiMxRjIzMzMiIHN0cm9rZT0iIzFGMjMzMyIgc3Ryb2tlLXdpZHRoPSIxLjcxMjk0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMS44MzE0IDk1Ljc5MjRMNTQuNDY5OCAxMTguNDg0TDQ5Ljk0MjcgMTA3LjI1M0wyMi43Nzk4IDgwLjAyNDdMMzEuODMxNCA5NS43OTI0WiIgZmlsbD0iI0ZBRjFFNyIgc3Ryb2tlPSIjMUYyMzMzIiBzdHJva2Utd2lkdGg9IjEuNzEyOTQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzMS40MzEgODAuMDIyNkw3Ny4xMDUyIDI1LjU2NTFMMjIuNzc5MyA4MC4wMjI2TDQ5Ljk0MjYgMTA3LjI1Mkw3Ny4xMDU2IDgwLjAyMjlMMTA0LjI2OCAxMDcuMjUxTDEzMS40MzEgODAuMDIyNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xNTEwXzM1MTA4KSIgc3Ryb2tlPSIjMUYyMzMzIiBzdHJva2Utd2lkdGg9IjEuNzEyOTQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNTEwXzM1MTA4IiB4MT0iMTMxLjQzIiB5MT0iNjYuNDA3OCIgeDI9IjIyLjc3OTMiIHkyPSI2Ni40MDc4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQUYxRTciLz4KPHN0b3Agb2Zmc2V0PSIwLjI2MDIxIiBzdG9wLWNvbG9yPSIjRkRDRUFBIi8+CjxzdG9wIG9mZnNldD0iMC42MTIwMSIgc3RvcC1jb2xvcj0iI0Y0ODM3RCIvPgo8c3RvcCBvZmZzZXQ9IjAuOTk5OSIgc3RvcC1jb2xvcj0iI0I5QUFGRCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
    },
    etherFi: {
      id: "etherFi",
      name: "Ether.fi",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUxLjMwMzggMjguODM0TDQ5LjM2MjUgMjEuMjY2NkM0OS4zMDY5IDIxLjA0NDEgNDkuMTI3NiAyMC44NzEgNDguOTA1IDIwLjgxNTNMNDEuNDA1NyAxOC45NjY3QzQxLjM1MDEgMTguOTU0NCA0MS4yODgyIDE4Ljk0ODIgNDEuMjMyNiAxOC45NDgyQzQxLjA1MzMgMTguOTI5NyA0MC44Njc4IDE4Ljk4NTMgNDAuNzMxOCAxOS4xMjEzTDI4LjA3NjMgMzEuNzc2OUwyNi40MDA4IDI1LjIzNThDMjYuMzQ1MiAyNS4wMTMyIDI2LjE2NTkgMjQuODQwMSAyNS45NDMzIDI0Ljc4NDVMMTkuNTAxMiAyMy4xOTU2TDMyLjE1MDUgMTAuNTQ2MkMzMi4yMjQ3IDEwLjQ3MiAzMi4yNjggMTAuMzc5MyAzMi4yOTg5IDEwLjI4NjVDMzIuMzU0NSAxMC4xNjI5IDMyLjM3MzEgMTAuMDIwNyAzMi4zMzYgOS44ODQ3TDMwLjM5NDcgMi4zMTczMUMzMC4zMzkxIDIuMDk0NzQgMzAuMTU5OCAxLjkyMTYzIDI5LjkzNzIgMS44NjU5OUwyMi40Mzc4IDAuMDE3NDMyMkMyMi4yODk1IC0wLjAxOTY2NzggMjIuMTQxMSAwLjAwNTA2MjE4IDIyLjAxMTMgMC4wNjY4OTIySDIyLjAwNTFDMjEuOTY4IDAuMDg1NDQyMiAyMS45MzcxIDAuMTEwMTczIDIxLjkgMC4xMzQ5MDNDMjEuODY5MSAwLjE1OTYzMyAyMS44MjU4IDAuMTcxOTkyIDIxLjgwMTEgMC4yMDI5MDJMMC4yMTE3NTUgMjEuNzc5OEMwLjIxMTc1NSAyMS43Nzk4IDAuMTc0NjU3IDIxLjg0MTYgMC4xNDk5NTcgMjEuODcyNUMwLjAxMzk1NjggMjIuMDMzMyAtMC4wMzU1NDMyIDIyLjI0MzUgMC4wMjYzNTY4IDIyLjQ0NzVMMi4xMjIxNiAyOS43NjE0QzIuMTgzOTYgMjkuOTcxNiAyLjM0NDc2IDMwLjEzMjMgMi41NDg3NiAzMC4xODhMOS41NzIwNiAzMi4yMDM0TDExLjU4NzYgMzkuMjIwNkMxMS42NDk0IDM5LjQzMDggMTEuODEwMiAzOS41OTE1IDEyLjAxNDIgMzkuNjQ3MkwxOS4wNjIyIDQxLjY2ODhMMjEuMDgzOSA0OC43MTY5QzIxLjE0NTcgNDguOTI3MSAyMS4zMDY1IDQ5LjA4NzggMjEuNTEwNSA0OS4xNDM1TDI4Ljg1NTMgNTEuMjUxN0MyOC45MTA5IDUxLjI3MDIgMjguOTcyNyA1MS4yNzY0IDI5LjAyODQgNTEuMjc2NEMyOS4wNDA3IDUxLjI3NjQgMjkuMDUzMSA1MS4yNzAyIDI5LjA3MTYgNTEuMjcwMkMyOS4wNzE2IDUxLjI3MDIgMjkuMDc3OCA1MS4yNzAyIDI5LjA4NCA1MS4yNzAyQzI5LjI0NDggNTEuMjcwMiAyOS40MDU1IDUxLjIwODQgMjkuNTI5MiA1MS4wODQ4TDUxLjEyNDYgMjkuNDg5M0M1MS4xOTg3IDI5LjQxNTEgNTEuMjQyIDI5LjMyMjQgNTEuMjcyOSAyOS4yMjk3QzUxLjMyODYgMjkuMTA2IDUxLjM0NzEgMjguOTYzOCA1MS4zMSAyOC44Mjc4TDUxLjMwMzggMjguODM0Wk00MS42MjIxIDM3LjIyMzZMNDAuMDQ1NiAzMS4wNzIxTDQzLjUzODcgMjcuNTg1MUw0OS41NDE4IDI5LjMxTDQxLjYyODMgMzcuMjI5OEw0MS42MjIxIDM3LjIyMzZaTTI5LjM3NDYgNDkuNDcxMUwyNy43OTgxIDQzLjMxOTZMMzQuMTE2NiAzNy4wMDExTDQwLjExOTcgMzguNzI2TDI5LjM3NDYgNDkuNDcxMVpNMzQuMjQ2NCAzNS4xMDNMMzIuNzM3OSAyOS44NDc5TDM4LjE1OTkgMzEuMTgzM0wzNC4yNDY0IDM1LjA5NjlWMzUuMTAzWk0zOS4wMTkzIDMyLjA5ODNMNDAuNDA0MSAzNy40OTU3TDM1LjEzMDUgMzUuOTgwOUwzOS4wMTkzIDMyLjA5MjJWMzIuMDk4M1pNMzkuMTk4NSAzMC4xNTA5TDMzLjA1MzIgMjguNjM2Mkw0MC45NDgyIDIwLjc0MTFMNDIuNjU0NiAyNi42OTQ5TDM5LjE5ODUgMzAuMTUwOVpNMzEuNTI2MSAzMC4xNTdMMzMuMjMyNSAzNi4xMTA4TDI2Ljk0NDkgNDIuMzk4NEwyMC43OTk1IDQwLjg4MzdMMzEuNTI2MSAzMC4xNTdaTTQ4LjI0MzUgMjEuOTI4Mkw0OS44MjAxIDI4LjA3OTdMNDMuODYwMSAyNi4zNjcyTDQyLjE1MzggMjAuNDI1OEw0OC4yNDM1IDIxLjkyODJaTTE5Ljg3MjEgMzkuOTY4NkwxOC4yOTU2IDMzLjgxNzFMMjAuNTcwNyAzMS41NDE5TDI2LjU3MzkgMzMuMjY2OEwxOS44NzIxIDM5Ljk2ODZaTTIwLjcwMDYgMjkuNjQzOUwxOS4xOTIgMjQuMzg4OEwyNC42MTQxIDI1LjcyNDJMMjAuNzAwNiAyOS42Mzc3VjI5LjY0MzlaTTI2Ljg1ODMgMzIuMDQyN0wyMS41ODQ3IDMwLjUyOEwyNS40NzM0IDI2LjYzOTJMMjYuODU4MyAzMi4wMzY1VjMyLjA0MjdaTTE5LjY5MjggMzAuNjU3OEwxNy40NDg2IDMyLjkwMjFMMTEuMzAzMiAzMS4zODc0TDE3Ljk4NjUgMjQuNzA0MUwxOS42OTI4IDMwLjY1NzhaTTEyLjYyMDEgMTEuMTM5N0wxNC4zMjY0IDE3LjA5MzVMNy45ODMxNiAyMy40MzY3TDEuODM3NzUgMjEuOTIyTDEyLjYyMDEgMTEuMTM5N1pNMjEuOTg2NSAxLjc3MzI1TDIzLjY5MjkgNy43MjdMMjAuMjkyNSAxMS4xMjc0TDE0LjE0NzEgOS42MTI2TDIxLjk4NjUgMS43NzMyNVpNMjIuNzE2MSAxOC4yMDAxTDIxLjEzOTUgMTIuMDU0N0wyNC41NzcgOC42MTczTDMwLjU4MDIgMTAuMzM2TDIyLjcxNjEgMTguMjAwMVpNMTUuMzQwNCAxNi4wODU3TDEzLjgzMTggMTAuODMwNkwxOS4yNTM5IDEyLjE2NkwxNS4zNDA0IDE2LjA3OTVWMTYuMDg1N1pNMjAuMTEzMiAxMy4wODFMMjEuNDk4MSAxOC40NzgzTDE2LjIzMDYgMTYuOTYzNkwyMC4xMTk0IDEzLjA3NDhMMjAuMTEzMiAxMy4wODFaTTE1LjIxNjcgMTcuOTc3NUwyMS4yMTk5IDE5LjY5NjNMMTAuNDE5MSAzMC40OTcxTDguODQyNTYgMjQuMzUxN0wxNS4yMTY3IDE3Ljk3NzVaTTI5LjI4MTkgMi45NzI2NkwzMC44NTg0IDkuMTI0MkwyNC44OTg1IDcuNDExN0wyMy4xOTIxIDEuNDcwMzFMMjkuMjgxOSAyLjk3MjY2Wk0xLjUyODY2IDIzLjEzOTlMNi45NTA2NSAyNC40NzUzTDMuMDM3MTYgMjguMzg4OUwxLjUyODY2IDIzLjEzMzdWMjMuMTM5OVpNMy45MjEyNSAyOS4yNzkxTDcuODEwMDYgMjUuMzkwM0w5LjE5NDk1IDMwLjc4NzdMMy45Mjc0NiAyOS4yNzNMMy45MjEyNSAyOS4yNzkxWk0xMi42OTQzIDM4LjU0NjdMMTAuOTg3OSAzMi42MDUzTDE3LjA3NzYgMzQuMTA3N0wxOC42NTQyIDQwLjI1OTJMMTIuNjk0MyAzOC41NDY3Wk0yMC40OTA0IDQyLjEwMTZMMjUuOTEyNCA0My40MzdMMjEuOTk4OSA0Ny4zNTA1TDIwLjQ5MDQgNDIuMDk1NFY0Mi4xMDE2Wk0yMi44ODMgNDguMjQwOEwyNi43NzE4IDQ0LjM1MkwyOC4xNTY2IDQ5Ljc0OTNMMjIuODgzIDQ4LjIzNDZWNDguMjQwOFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl85NjBfMjAxMikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl85NjBfMjAxMiIgeDE9IjMuNTU2NTYiIHkxPSIzMy42ODcyIiB4Mj0iNDguMDAyNCIgeTI9IjE3LjUwNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI5QkNGQSIvPgo8c3RvcCBvZmZzZXQ9IjAuNDMiIHN0b3AtY29sb3I9IiM2NDY0RTQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQjQ1QUZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
    },
    kelpDao: {
      id: "kelpDao",
      name: "Kelp DAO",
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zNDIzXzEzOTApIj4KPHBhdGggZD0iTTI1MCA1MDBDMzg4LjA3MSA1MDAgNTAwIDM4OC4wNzEgNTAwIDI1MEM1MDAgMTExLjkyOSAzODguMDcxIDAgMjUwIDBDMTExLjkyOSAwIDAgMTExLjkyOSAwIDI1MEMwIDM4OC4wNzEgMTExLjkyOSA1MDAgMjUwIDUwMFoiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8zNDIzXzEzOTApIi8+CjxwYXRoIGQ9Ik0xNzEuODI1IDE2NC44MzZMMTk0Ljc2OCAxNTEuOTY2QzIwMC4xMTUgMTQ4Ljk2NiAyMDMuNzY4IDE1My40NjYgMjAyLjc2OCAxNTguNDY2QzIwMS45NjggMTYyLjQ2NiAyMDUuNDM0IDE2Ni40NjYgMjA3LjI2OCAxNjcuOTY2QzIxMC4xMDEgMTcwLjI5OSAyMjEuOTY4IDE3OS43NjYgMjQ2Ljc2OCAxOTguOTY2QzI3MS41NjggMjE4LjE2NiAyNTguNzY4IDIzNC45NjYgMjQ5LjI2OCAyNDAuOTY2QzI0Mi43NjggMjQ0Ljk2NiAyMjUuODY4IDI1NS4wNjYgMjEwLjI2OCAyNjMuNDY2QzE5NC42NjggMjcxLjg2NiAyMDAgMjg0LjMzOSAyMDcuMjY4IDI4OS45NjZDMjEyLjQzNCAyOTMuOTY2IDIyOC4wNjggMzA1Ljc2NiAyNDkuMjY4IDMyMC45NjZDMjYzLjAwOSAzMzAuODE4IDI2Mi42NDggMzQxLjkwMiAyNTguMjg4IDM1MC40MzRDMjUzLjk0IDM1OC45NCAyNDUuMTU3IDM2My45MzEgMjM2LjkzNSAzNjguNzk0QzIyNC43MjkgMzc2LjAxNCAyMTAuMzE4IDM4NC40NCAyMDYuMjY4IDM4Ni40NjZDMTk5LjI2OCAzODkuOTY2IDE5Ny43NjggMzgzLjk2NiAxOTguMjY4IDM3OC40NjZDMTk4LjY2OCAzNzQuMDY2IDE5My43NjggMzY4Ljk2NiAxOTEuMjY4IDM2Ni45NjZDMTg1LjQzNCAzNjIuNjMyIDE2OC45NjggMzUwLjQ2NiAxNDkuNzY4IDMzNi40NjZDMTM5LjM1NCAzMjguODczIDEzOC41NyAzMTkuODU4IDE0MS40OTUgMzExLjk3NEMxNDYuMTM5IDI5OS40NTcgMTU5LjE3OCAyOTIuNzY1IDE3MC44NyAyODYuMzE5QzE3NS43MjYgMjgzLjY0MSAxODEuNDAzIDI4MC41MDEgMTg3Ljc2OCAyNzYuOTY2QzIwNS43NjggMjY2Ljk2NiAxOTguOTM0IDI1My43OTkgMTkzLjI2OCAyNDguNDY2QzE4NS45MzQgMjQyLjk2NiAxNjYuNzY4IDIyOC42NjYgMTQ4Ljc2OCAyMTUuNDY2QzEzOS4wNzQgMjA4LjM1NyAxMzguNjEzIDE5OS40OCAxNDEuNjgyIDE5MS41NTFDMTQ2LjY1MyAxNzguNzEzIDE1OS44MTkgMTcxLjU3MSAxNzEuODI1IDE2NC44MzZaIiBmaWxsPSIjQ0JFOUU5Ii8+CjxwYXRoIGQ9Ik0yNzAuODI1IDEyNS44MzZMMjkzLjc2OCAxMTIuOTY2QzI5OS4xMTUgMTA5Ljk2NiAzMDIuNzY4IDExNC40NjYgMzAxLjc2OCAxMTkuNDY2QzMwMC45NjggMTIzLjQ2NiAzMDQuNDM0IDEyNy40NjYgMzA2LjI2OCAxMjguOTY2QzMwOS4xMDEgMTMxLjI5OSAzMjAuOTY4IDE0MC43NjYgMzQ1Ljc2OCAxNTkuOTY2QzM3MC41NjggMTc5LjE2NiAzNTcuNzY4IDE5NS45NjYgMzQ4LjI2OCAyMDEuOTY2QzM0MS43NjggMjA1Ljk2NiAzMjQuODY4IDIxNi4wNjYgMzA5LjI2OCAyMjQuNDY2QzI5My42NjggMjMyLjg2NiAyOTkgMjQ1LjMzOSAzMDYuMjY4IDI1MC45NjZDMzExLjQzNCAyNTQuOTY2IDMyNy4wNjggMjY2Ljc2NiAzNDguMjY4IDI4MS45NjZDMzYyLjAwOSAyOTEuODE4IDM2MS42NDggMzAyLjkwMiAzNTcuMjg4IDMxMS40MzRDMzUyLjk0IDMxOS45NCAzNDQuMTU3IDMyNC45MzEgMzM1LjkzNSAzMjkuNzk0QzMyMy43MjkgMzM3LjAxNCAzMDkuMzE4IDM0NS40NCAzMDUuMjY4IDM0Ny40NjZDMjk4LjI2OCAzNTAuOTY2IDI5Ni43NjggMzQ0Ljk2NiAyOTcuMjY4IDMzOS40NjZDMjk3LjY2OCAzMzUuMDY2IDI5Mi43NjggMzI5Ljk2NiAyOTAuMjY4IDMyNy45NjZDMjg0LjQzNCAzMjMuNjMyIDI2Ny45NjggMzExLjQ2NiAyNDguNzY4IDI5Ny40NjZDMjM4LjM1NCAyODkuODczIDIzNy41NyAyODAuODU4IDI0MC40OTUgMjcyLjk3NEMyNDUuMTM5IDI2MC40NTcgMjU4LjE3OCAyNTMuNzY1IDI2OS44NyAyNDcuMzE5QzI3NC43MjYgMjQ0LjY0MSAyODAuNDAzIDI0MS41MDEgMjg2Ljc2OCAyMzcuOTY2QzMwNC43NjggMjI3Ljk2NiAyOTcuOTM0IDIxNC43OTkgMjkyLjI2OCAyMDkuNDY2QzI4NC45MzQgMjAzLjk2NiAyNjUuNzY4IDE4OS42NjYgMjQ3Ljc2OCAxNzYuNDY2QzIzOC4wNzQgMTY5LjM1NyAyMzcuNjEzIDE2MC40OCAyNDAuNjgyIDE1Mi41NTFDMjQ1LjY1MyAxMzkuNzEzIDI1OC44MTkgMTMyLjU3MSAyNzAuODI1IDEyNS44MzZaIiBmaWxsPSIjQ0JFOUU5Ii8+CjwvZz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8zNDIzXzEzOTAiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwIDI1MCkgcm90YXRlKDkwKSBzY2FsZSgyNTApIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE2ODc4NyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNzVBNUEiLz4KPC9yYWRpYWxHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zNDIzXzEzOTAiPgo8cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
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
    eeth: {
      id: "eeth",
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
    morphoWstethUsda: {
      id: "morphoWstethUsda",
      shortName: "Morpho wstETH/USDA",
      protocol: "morpho",
      historicalRatePeriod: 1,
    },
    reth: {
      id: "reth",
      shortName: "Rocket Pool ETH",
      protocol: "rocketPool",
      historicalRatePeriod: 1,
    },
    ezeth: {
      id: "ezeth",
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
    sxdai: {
      id: "sxdai",
      shortName: "Savings xDAI",
      protocol: "maker",
      historicalRatePeriod: 1,
    },
    stusd: {
      id: "stusd",
      shortName: "Angle stUSD",
      protocol: "angle",
      historicalRatePeriod: 1,
    },
    lineaEzeth: {
      id: "lineaEzeth",
      shortName: "Renzo ezETH",
      protocol: "renzo",
      historicalRatePeriod: 1,
    },
    rseth: {
      id: "rseth",
      shortName: "KelpDAO rsETH",
      protocol: "kelpDao",
      historicalRatePeriod: 1,
    },
  },
  chains: {
    "1": {
      id: 1,
      name: "Mainnet",
      dailyAverageBlocks: 7172n,
      blockExplorerName: "Etherscan",
      blockExplorerUrl: "https://etherscan.io",
      iconUrl:
        "data:image/png;base64,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",
    },
    "100": {
      id: 100,
      name: "Gnosis",
      blockExplorerName: "Gnosisscan",
      blockExplorerUrl: "https://gnosisscan.io",
      earliestBlock: 35732205n,
      dailyAverageBlocks: 16605n,
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0OTlfNzU1KSI+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNDgwMjEgNC45NTkwMUMxMS41NzQyIC0wLjg0OTg5OCAyMS4yMjQ5IC0wLjYyMTgxNyAyNy4wMzM4IDUuNDcyMTlDMjcuNDExNSA1Ljg3MTMzIDI3Ljc3NSA2LjI4NDczIDI4LjEwMjkgNi43MTk1MUwxNi4wMDA0IDE4LjgyOTFMMy44OTc5MSA2LjcxOTUxQzQuMjMyOSA2LjI4NDczIDQuNTg5MjggNS44NzEzMyA0Ljk2NzAzIDUuNDcyMTlDNS4xMzA5NyA1LjMwMTEzIDUuMzAyMDMgNS4xMzAwNyA1LjQ4MDIxIDQuOTU5MDFaTTI1LjM4MDIgNi42MjY4NUMyMi44ODU2IDQuMTE3OTcgMTkuNTY0MSAyLjc0MjM2IDE2LjAwMDQgMi43NDIzNkMxMi40MzY3IDIuNzQyMzYgOS4xMTUyNCA0LjExNzk3IDYuNjIwNjEgNi42MjY4NUwxNi4wMDA0IDE2LjAwNjZMMjUuMzgwMiA2LjYyNjg1Wk0yOS4wNTEgOC4wOTUxM0wyNi41OTIgMTAuNTU0MUMyOC41NzM0IDEyLjkyNzYgMjguMjU5OCAxNi40NjI4IDI1Ljg4NjQgMTguNDQ0M0MyMy44MDUxIDIwLjE4MzQgMjAuNzgzMSAyMC4xODM0IDE4LjcwMTggMTguNDQ0M0wxNi4wMDA1IDIxLjE0NTZMMTMuMzA2MyAxOC40NTE0QzEwLjkzMjkgMjAuNDMyOCA3LjM5NzY0IDIwLjExOTIgNS40MTYxOSAxNy43NDU4QzMuNjc3MDggMTUuNjY0NSAzLjY3NzA4IDEyLjY0MjUgNS40MTYxOSAxMC41NjEyTDQuMTU0NjIgOS4yOTk2OEwyLjk1NzIxIDguMDk1MTNDMS41MTAzMiAxMC40NzU3IDAuNzQ3NjgxIDEzLjIxMjcgMC43NDc2ODEgMTUuOTk5NUMwLjc0NzY4MSAyNC40MjQyIDcuNTc1ODIgMzEuMjUyNCAxNi4wMDA1IDMxLjI1MjRDMjQuNDI1MiAzMS4yNTI0IDMxLjI1MzQgMjQuNDI0MiAzMS4yNTM0IDE1Ljk5OTVDMzEuMjYwNSAxMy4yMTI3IDMwLjQ5MDcgMTAuNDc1NyAyOS4wNTEgOC4wOTUxM1pNMjUuNDIzMiAxMS43MjNDMjUuOTU3OCAxMi40MTQ0IDI2LjI1IDEzLjI2OTcgMjYuMjUgMTQuMTQ2NEMyNi4yNSAxNS4wMjMxIDI1Ljk1NzggMTUuODc4NCAyNS40MjMyIDE2LjU2OTdDMjQuMDgzMyAxOC4zMDE3IDIxLjU5NTggMTguNjIyNSAxOS44NjM4IDE3LjI4MjVMMjUuNDIzMiAxMS43MjNaTTEyLjEzNzQgMTcuMjg5NkMxMS40NDYgMTcuODI0MiAxMC41OTA3IDE4LjExNjQgOS43MTQwMyAxOC4xMTY0QzguODM3MzUgMTguMTE2NCA3Ljk4OTE4IDE3LjgyNDIgNy4yOTA2OCAxNy4yOTY3QzUuNTU4NyAxNS45NTY4IDUuMjM3OTYgMTMuNDYyMSA2LjU3NzkzIDExLjczMDJMMTIuMTM3NCAxNy4yODk2WiIgZmlsbD0iIzNFNjk1NyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0OTlfNzU1Ij4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    },
    "42069": {
      id: 42069,
      name: "Cloudchain",
      isTestnet: true,
      dailyAverageBlocks: 7172n,
      blockExplorerName: "Etherscan",
      blockExplorerUrl: "https://etherscan.io",
      iconUrl:
        "data:image/png;base64,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",
    },
    "42070": {
      id: 42070,
      name: "Gnosis Fork",
      isTestnet: true,
      blockExplorerName: "Gnosisscan",
      blockExplorerUrl: "https://gnosisscan.io",
      dailyAverageBlocks: 16605n,
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0OTlfNzU1KSI+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNDgwMjEgNC45NTkwMUMxMS41NzQyIC0wLjg0OTg5OCAyMS4yMjQ5IC0wLjYyMTgxNyAyNy4wMzM4IDUuNDcyMTlDMjcuNDExNSA1Ljg3MTMzIDI3Ljc3NSA2LjI4NDczIDI4LjEwMjkgNi43MTk1MUwxNi4wMDA0IDE4LjgyOTFMMy44OTc5MSA2LjcxOTUxQzQuMjMyOSA2LjI4NDczIDQuNTg5MjggNS44NzEzMyA0Ljk2NzAzIDUuNDcyMTlDNS4xMzA5NyA1LjMwMTEzIDUuMzAyMDMgNS4xMzAwNyA1LjQ4MDIxIDQuOTU5MDFaTTI1LjM4MDIgNi42MjY4NUMyMi44ODU2IDQuMTE3OTcgMTkuNTY0MSAyLjc0MjM2IDE2LjAwMDQgMi43NDIzNkMxMi40MzY3IDIuNzQyMzYgOS4xMTUyNCA0LjExNzk3IDYuNjIwNjEgNi42MjY4NUwxNi4wMDA0IDE2LjAwNjZMMjUuMzgwMiA2LjYyNjg1Wk0yOS4wNTEgOC4wOTUxM0wyNi41OTIgMTAuNTU0MUMyOC41NzM0IDEyLjkyNzYgMjguMjU5OCAxNi40NjI4IDI1Ljg4NjQgMTguNDQ0M0MyMy44MDUxIDIwLjE4MzQgMjAuNzgzMSAyMC4xODM0IDE4LjcwMTggMTguNDQ0M0wxNi4wMDA1IDIxLjE0NTZMMTMuMzA2MyAxOC40NTE0QzEwLjkzMjkgMjAuNDMyOCA3LjM5NzY0IDIwLjExOTIgNS40MTYxOSAxNy43NDU4QzMuNjc3MDggMTUuNjY0NSAzLjY3NzA4IDEyLjY0MjUgNS40MTYxOSAxMC41NjEyTDQuMTU0NjIgOS4yOTk2OEwyLjk1NzIxIDguMDk1MTNDMS41MTAzMiAxMC40NzU3IDAuNzQ3NjgxIDEzLjIxMjcgMC43NDc2ODEgMTUuOTk5NUMwLjc0NzY4MSAyNC40MjQyIDcuNTc1ODIgMzEuMjUyNCAxNi4wMDA1IDMxLjI1MjRDMjQuNDI1MiAzMS4yNTI0IDMxLjI1MzQgMjQuNDI0MiAzMS4yNTM0IDE1Ljk5OTVDMzEuMjYwNSAxMy4yMTI3IDMwLjQ5MDcgMTAuNDc1NyAyOS4wNTEgOC4wOTUxM1pNMjUuNDIzMiAxMS43MjNDMjUuOTU3OCAxMi40MTQ0IDI2LjI1IDEzLjI2OTcgMjYuMjUgMTQuMTQ2NEMyNi4yNSAxNS4wMjMxIDI1Ljk1NzggMTUuODc4NCAyNS40MjMyIDE2LjU2OTdDMjQuMDgzMyAxOC4zMDE3IDIxLjU5NTggMTguNjIyNSAxOS44NjM4IDE3LjI4MjVMMjUuNDIzMiAxMS43MjNaTTEyLjEzNzQgMTcuMjg5NkMxMS40NDYgMTcuODI0MiAxMC41OTA3IDE4LjExNjQgOS43MTQwMyAxOC4xMTY0QzguODM3MzUgMTguMTE2NCA3Ljk4OTE4IDE3LjgyNDIgNy4yOTA2OCAxNy4yOTY3QzUuNTU4NyAxNS45NTY4IDUuMjM3OTYgMTMuNDYyMSA2LjU3NzkzIDExLjczMDJMMTIuMTM3NCAxNy4yODk2WiIgZmlsbD0iIzNFNjk1NyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0OTlfNzU1Ij4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
    },
    "59144": {
      id: 59144,
      name: "Linea",
      blockExplorerName: "Lineascan",
      blockExplorerUrl: "https://lineascan.build/",
      earliestBlock: 9245278n,
      dailyAverageBlocks: 43200n,
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxMjEyMTIiLz4KPG1hc2sgaWQ9Im1hc2swXzI0OTlfNjExIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTAiIHk9IjciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiI+CjxwYXRoIGQ9Ik0yNC45NjkyIDdIMTBWMjIuNjM2M0gyNC45NjkyVjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjQ5OV82MTEpIj4KPHBhdGggZD0iTTIyLjQzMiAyMi42MzYySDEwVjkuNTM3MjNIMTIuODQ0NFYyMC4wOTc2SDIyLjQzMlYyMi42MzQ5VjIyLjYzNjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNDMxOSAxMi4wNzQ1QzIzLjgzMzIgMTIuMDc0NSAyNC45NjkyIDEwLjkzODUgMjQuOTY5MiA5LjUzNzI3QzI0Ljk2OTIgOC4xMzU5NyAyMy44MzMyIDcgMjIuNDMxOSA3QzIxLjAzMDUgNyAxOS44OTQ3IDguMTM1OTcgMTkuODk0NyA5LjUzNzI3QzE5Ljg5NDcgMTAuOTM4NSAyMS4wMzA1IDEyLjA3NDUgMjIuNDMxOSAxMi4wNzQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K",
    },
    "11155111": {
      id: 11155111,
      name: "Sepolia",
      isTestnet: true,
      blockExplorerName: "Etherscan",
      blockExplorerUrl: "https://sepolia.etherscan.io",
      dailyAverageBlocks: 7172n,
      iconUrl:
        "data:image/png;base64,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",
    },
  },
};
