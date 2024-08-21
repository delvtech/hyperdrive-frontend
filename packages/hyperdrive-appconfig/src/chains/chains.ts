export type ChainId = keyof typeof chains;
export interface ChainConfig {
  id: ChainId;
  name: string;
  iconUrl: string;
}

export const chains = {
  1: {
    id: 1,
    name: "Mainnet",
    iconUrl:
      "data:image/png;base64,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",
  },
  42069: {
    id: 42069,
    name: "Cloudchain",
    iconUrl:
      "data:image/png;base64,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",
  },
  11155111: {
    id: 11155111,
    name: "Sepolia",
    iconUrl:
      "data:image/png;base64,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",
  },
} as const;
