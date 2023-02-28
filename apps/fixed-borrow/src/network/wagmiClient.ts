import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createClient, goerli } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Vite exposes env variables on the special import.meta.env object.
// See: https://vitejs.dev/guide/env-and-mode.html
const ALCHEMY_GOERLI_RPC_KEY = import.meta.env.VITE_ALCHEMY_GOERLI_RPC_KEY;

if (!ALCHEMY_GOERLI_RPC_KEY) {
  throw new Error("Provide an VITE_ALCHEMY_GOERLI_RPC_KEY variable in .env");
}

const _localhost: Chain = {
  name: "Localhost",
  network: "localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  id: 31337,
  rpcUrls: {
    public: { http: ["http://localhost:8545/"] },
    default: { http: ["http://localhost:8545/"] },
  },
};

export const { chains, provider } = configureChains(
  [goerli, _localhost],
  [
    alchemyProvider({ apiKey: ALCHEMY_GOERLI_RPC_KEY }),
    jsonRpcProvider({
      rpc: () => ({
        http: `http://localhost:8545`,
      }),
    }),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Fixed Borrow",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
