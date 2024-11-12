import { base, gnosis, linea, mainnet, sepolia } from "viem/chains";
import { cloudChain } from "./cloudChain";
import { gnosisFork } from "./gnosisFork";

// Define Chain ID as a union of available chain keys
export type ChainId =
  | (typeof gnosis)["id"]
  | (typeof mainnet)["id"]
  | (typeof cloudChain)["id"]
  | (typeof gnosisFork)["id"]
  | (typeof sepolia)["id"]
  | (typeof linea)["id"]
  | (typeof base)["id"];

export interface ChainConfig {
  id: ChainId;
  name: string;
  iconUrl: string;
  /**
   * The base url for block explorer links, e.g. "https://etherscan.io" can be
   * used to create "https://etherscan.io/address/0x..."
   */
  blockExplorerUrl: string;
  blockExplorerName: string;
  dailyAverageBlocks: bigint;
  earliestBlock?: bigint;
  isTestnet?: boolean;
}

export const lineaChainConfig: ChainConfig = {
  id: linea.id,
  name: "Linea",
  blockExplorerName: "Lineascan",
  blockExplorerUrl: "https://lineascan.build/",
  earliestBlock: 9245278n, // block that the registry was deployed at
  dailyAverageBlocks: 43200n, // 2-second block times according to lineascan
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxMjEyMTIiLz4KPG1hc2sgaWQ9Im1hc2swXzI0OTlfNjExIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTAiIHk9IjciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiI+CjxwYXRoIGQ9Ik0yNC45NjkyIDdIMTBWMjIuNjM2M0gyNC45NjkyVjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjQ5OV82MTEpIj4KPHBhdGggZD0iTTIyLjQzMiAyMi42MzYySDEwVjkuNTM3MjNIMTIuODQ0NFYyMC4wOTc2SDIyLjQzMlYyMi42MzQ5VjIyLjYzNjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNDMxOSAxMi4wNzQ1QzIzLjgzMzIgMTIuMDc0NSAyNC45NjkyIDEwLjkzODUgMjQuOTY5MiA5LjUzNzI3QzI0Ljk2OTIgOC4xMzU5NyAyMy44MzMyIDcgMjIuNDMxOSA3QzIxLjAzMDUgNyAxOS44OTQ3IDguMTM1OTcgMTkuODk0NyA5LjUzNzI3QzE5Ljg5NDcgMTAuOTM4NSAyMS4wMzA1IDEyLjA3NDUgMjIuNDMxOSAxMi4wNzQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K",
};

export const gnosisChainConfig: ChainConfig = {
  id: gnosis.id,
  name: "Gnosis",
  blockExplorerName: "Gnosisscan",
  blockExplorerUrl: "https://gnosisscan.io",
  earliestBlock: 35732205n,
  dailyAverageBlocks: 16605n,
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0OTlfNzU1KSI+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNDgwMjEgNC45NTkwMUMxMS41NzQyIC0wLjg0OTg5OCAyMS4yMjQ5IC0wLjYyMTgxNyAyNy4wMzM4IDUuNDcyMTlDMjcuNDExNSA1Ljg3MTMzIDI3Ljc3NSA2LjI4NDczIDI4LjEwMjkgNi43MTk1MUwxNi4wMDA0IDE4LjgyOTFMMy44OTc5MSA2LjcxOTUxQzQuMjMyOSA2LjI4NDczIDQuNTg5MjggNS44NzEzMyA0Ljk2NzAzIDUuNDcyMTlDNS4xMzA5NyA1LjMwMTEzIDUuMzAyMDMgNS4xMzAwNyA1LjQ4MDIxIDQuOTU5MDFaTTI1LjM4MDIgNi42MjY4NUMyMi44ODU2IDQuMTE3OTcgMTkuNTY0MSAyLjc0MjM2IDE2LjAwMDQgMi43NDIzNkMxMi40MzY3IDIuNzQyMzYgOS4xMTUyNCA0LjExNzk3IDYuNjIwNjEgNi42MjY4NUwxNi4wMDA0IDE2LjAwNjZMMjUuMzgwMiA2LjYyNjg1Wk0yOS4wNTEgOC4wOTUxM0wyNi41OTIgMTAuNTU0MUMyOC41NzM0IDEyLjkyNzYgMjguMjU5OCAxNi40NjI4IDI1Ljg4NjQgMTguNDQ0M0MyMy44MDUxIDIwLjE4MzQgMjAuNzgzMSAyMC4xODM0IDE4LjcwMTggMTguNDQ0M0wxNi4wMDA1IDIxLjE0NTZMMTMuMzA2MyAxOC40NTE0QzEwLjkzMjkgMjAuNDMyOCA3LjM5NzY0IDIwLjExOTIgNS40MTYxOSAxNy43NDU4QzMuNjc3MDggMTUuNjY0NSAzLjY3NzA4IDEyLjY0MjUgNS40MTYxOSAxMC41NjEyTDQuMTU0NjIgOS4yOTk2OEwyLjk1NzIxIDguMDk1MTNDMS41MTAzMiAxMC40NzU3IDAuNzQ3NjgxIDEzLjIxMjcgMC43NDc2ODEgMTUuOTk5NUMwLjc0NzY4MSAyNC40MjQyIDcuNTc1ODIgMzEuMjUyNCAxNi4wMDA1IDMxLjI1MjRDMjQuNDI1MiAzMS4yNTI0IDMxLjI1MzQgMjQuNDI0MiAzMS4yNTM0IDE1Ljk5OTVDMzEuMjYwNSAxMy4yMTI3IDMwLjQ5MDcgMTAuNDc1NyAyOS4wNTEgOC4wOTUxM1pNMjUuNDIzMiAxMS43MjNDMjUuOTU3OCAxMi40MTQ0IDI2LjI1IDEzLjI2OTcgMjYuMjUgMTQuMTQ2NEMyNi4yNSAxNS4wMjMxIDI1Ljk1NzggMTUuODc4NCAyNS40MjMyIDE2LjU2OTdDMjQuMDgzMyAxOC4zMDE3IDIxLjU5NTggMTguNjIyNSAxOS44NjM4IDE3LjI4MjVMMjUuNDIzMiAxMS43MjNaTTEyLjEzNzQgMTcuMjg5NkMxMS40NDYgMTcuODI0MiAxMC41OTA3IDE4LjExNjQgOS43MTQwMyAxOC4xMTY0QzguODM3MzUgMTguMTE2NCA3Ljk4OTE4IDE3LjgyNDIgNy4yOTA2OCAxNy4yOTY3QzUuNTU4NyAxNS45NTY4IDUuMjM3OTYgMTMuNDYyMSA2LjU3NzkzIDExLjczMDJMMTIuMTM3NCAxNy4yODk2WiIgZmlsbD0iIzNFNjk1NyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0OTlfNzU1Ij4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
};

export const baseChainConfig: ChainConfig = {
  id: base.id,
  name: "Base",
  // daily blocks average taken from https://base.blockscout.com/stats
  dailyAverageBlocks: 43_200n,
  blockExplorerName: "Basescan",
  blockExplorerUrl: "https://basescan.org",
  // The block at which the first pool (cbeth) was deployed. Normally we use the
  // block at which the registry was deployed, however that didn't happen in the
  // case of BASE.
  // https://basescan.org/tx/0x4c13f98211264c9b54cf4b0213959abcac2791d4ddd64a03c38548b8cdb458c5
  earliestBlock: 19731412n,
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1NiAxMjhDMjU2IDE5OC42OTIgMTk4LjU5MiAyNTYgMTI3Ljc3NyAyNTZDNjAuNTkwOSAyNTYgNS40NzM5NCAyMDQuNDE3IDAgMTM4Ljc1OUgxNjkuNDgyVjExNy4yNEgwQzUuNDczOTQgNTEuNTgzIDYwLjU5MDkgMCAxMjcuNzc3IDBDMTk4LjU5MiAwIDI1NiA1Ny4zMDc0IDI1NiAxMjhaIiBmaWxsPSIjMDA1MkZGIi8+DQo8L3N2Zz4NCg==",
};

export const chains: Record<ChainId, ChainConfig> = {
  /* Mainnet chains */
  [mainnet.id]: {
    id: mainnet.id,
    name: "Mainnet",
    dailyAverageBlocks: 7172n,
    blockExplorerName: "Etherscan",
    blockExplorerUrl: "https://etherscan.io",
    iconUrl:
      "data:image/png;base64,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",
  },
  [gnosis.id]: gnosisChainConfig,
  [linea.id]: lineaChainConfig,

  [base.id]: baseChainConfig,

  /* Testnets */
  [cloudChain.id]: {
    id: cloudChain.id,
    name: "Cloudchain",
    isTestnet: true,
    dailyAverageBlocks: 7172n,
    blockExplorerName: "Etherscan",
    blockExplorerUrl: "https://etherscan.io",
    iconUrl:
      "data:image/png;base64,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",
  },
  [sepolia.id]: {
    id: sepolia.id,
    name: "Sepolia",
    isTestnet: true,
    blockExplorerName: "Etherscan",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    dailyAverageBlocks: 7172n,
    iconUrl:
      "data:image/png;base64,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",
  },
  [gnosisFork.id]: {
    id: gnosisFork.id,
    name: "Gnosis Fork",
    isTestnet: true,
    blockExplorerName: "Gnosisscan",
    blockExplorerUrl: "https://gnosisscan.io",
    dailyAverageBlocks: 16_605n,
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI0OTlfNzU1KSI+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNDgwMjEgNC45NTkwMUMxMS41NzQyIC0wLjg0OTg5OCAyMS4yMjQ5IC0wLjYyMTgxNyAyNy4wMzM4IDUuNDcyMTlDMjcuNDExNSA1Ljg3MTMzIDI3Ljc3NSA2LjI4NDczIDI4LjEwMjkgNi43MTk1MUwxNi4wMDA0IDE4LjgyOTFMMy44OTc5MSA2LjcxOTUxQzQuMjMyOSA2LjI4NDczIDQuNTg5MjggNS44NzEzMyA0Ljk2NzAzIDUuNDcyMTlDNS4xMzA5NyA1LjMwMTEzIDUuMzAyMDMgNS4xMzAwNyA1LjQ4MDIxIDQuOTU5MDFaTTI1LjM4MDIgNi42MjY4NUMyMi44ODU2IDQuMTE3OTcgMTkuNTY0MSAyLjc0MjM2IDE2LjAwMDQgMi43NDIzNkMxMi40MzY3IDIuNzQyMzYgOS4xMTUyNCA0LjExNzk3IDYuNjIwNjEgNi42MjY4NUwxNi4wMDA0IDE2LjAwNjZMMjUuMzgwMiA2LjYyNjg1Wk0yOS4wNTEgOC4wOTUxM0wyNi41OTIgMTAuNTU0MUMyOC41NzM0IDEyLjkyNzYgMjguMjU5OCAxNi40NjI4IDI1Ljg4NjQgMTguNDQ0M0MyMy44MDUxIDIwLjE4MzQgMjAuNzgzMSAyMC4xODM0IDE4LjcwMTggMTguNDQ0M0wxNi4wMDA1IDIxLjE0NTZMMTMuMzA2MyAxOC40NTE0QzEwLjkzMjkgMjAuNDMyOCA3LjM5NzY0IDIwLjExOTIgNS40MTYxOSAxNy43NDU4QzMuNjc3MDggMTUuNjY0NSAzLjY3NzA4IDEyLjY0MjUgNS40MTYxOSAxMC41NjEyTDQuMTU0NjIgOS4yOTk2OEwyLjk1NzIxIDguMDk1MTNDMS41MTAzMiAxMC40NzU3IDAuNzQ3NjgxIDEzLjIxMjcgMC43NDc2ODEgMTUuOTk5NUMwLjc0NzY4MSAyNC40MjQyIDcuNTc1ODIgMzEuMjUyNCAxNi4wMDA1IDMxLjI1MjRDMjQuNDI1MiAzMS4yNTI0IDMxLjI1MzQgMjQuNDI0MiAzMS4yNTM0IDE1Ljk5OTVDMzEuMjYwNSAxMy4yMTI3IDMwLjQ5MDcgMTAuNDc1NyAyOS4wNTEgOC4wOTUxM1pNMjUuNDIzMiAxMS43MjNDMjUuOTU3OCAxMi40MTQ0IDI2LjI1IDEzLjI2OTcgMjYuMjUgMTQuMTQ2NEMyNi4yNSAxNS4wMjMxIDI1Ljk1NzggMTUuODc4NCAyNS40MjMyIDE2LjU2OTdDMjQuMDgzMyAxOC4zMDE3IDIxLjU5NTggMTguNjIyNSAxOS44NjM4IDE3LjI4MjVMMjUuNDIzMiAxMS43MjNaTTEyLjEzNzQgMTcuMjg5NkMxMS40NDYgMTcuODI0MiAxMC41OTA3IDE4LjExNjQgOS43MTQwMyAxOC4xMTY0QzguODM3MzUgMTguMTE2NCA3Ljk4OTE4IDE3LjgyNDIgNy4yOTA2OCAxNy4yOTY3QzUuNTU4NyAxNS45NTY4IDUuMjM3OTYgMTMuNDYyMSA2LjU3NzkzIDExLjczMDJMMTIuMTM3NCAxNy4yODk2WiIgZmlsbD0iIzNFNjk1NyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI0OTlfNzU1Ij4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  },
};
