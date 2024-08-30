import { Chain } from "viem";

const { VITE_GNOSIS_FORK_NODE_RPC_URL, VITE_GNOSIS_FORK_CHAIN_ID } = import.meta
  .env;
export const gnosisFork: Chain = {
  id: +VITE_GNOSIS_FORK_CHAIN_ID,
  name: "GnosisFork",
  nativeCurrency: { name: "xDAI", symbol: "xDAI", decimals: 18 },
  rpcUrls: {
    public: { http: [VITE_GNOSIS_FORK_NODE_RPC_URL] },
    default: { http: [VITE_GNOSIS_FORK_NODE_RPC_URL] },
  },
};
