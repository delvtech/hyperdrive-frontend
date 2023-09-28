import { http } from "viem";
const { VITE_ALCHEMY_GOERLI_RPC_KEY } = import.meta.env;

export const goerliTransport = http(
  `https://eth-goerli.g.alchemy.com/v2/${VITE_ALCHEMY_GOERLI_RPC_KEY}`,
);
