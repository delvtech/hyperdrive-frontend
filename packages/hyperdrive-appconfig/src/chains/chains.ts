export type ChainId = keyof typeof chains;
export interface Chain {
  id: ChainId;
  name: string;
  iconUrl: string;
}

export const chains = {
  1: {
    id: 1,
    name: "Mainnet",
    iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024",
  },
  11155111: {
    id: 11155111,
    name: "Sepolia",
    iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024",
  },
} as const;
