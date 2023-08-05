import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chains } from "src/network/wagmiClient";
const { VITE_WALLET_CONNECT_PROJECT_ID } = import.meta.env;

export const { connectors } = getDefaultWallets({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID || undefined,
  chains,
});
