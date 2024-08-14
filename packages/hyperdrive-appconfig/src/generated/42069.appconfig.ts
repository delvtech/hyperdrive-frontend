import { AppConfig } from "src/appconfig/AppConfig";
export const cloudChainAppConfig: AppConfig = {
  chainId: 42069,
  tokens: [],
  registryAddress: "0xbe082293b646cb619a638d29e8eff7cf2f46aa3a",
  hyperdrives: [],
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
};
