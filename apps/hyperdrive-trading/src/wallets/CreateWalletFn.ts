import type { WalletList } from "@rainbow-me/rainbowkit";

// Hack type to extract the CreateWalletFn since rainbowkit doesn't export it
export type CreateWalletFn = WalletList[0]["wallets"][0];
