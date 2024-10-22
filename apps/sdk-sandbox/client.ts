import {
  createPublicClient,
  createWalletClient,
  http,
  type PublicClient,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base, gnosis, linea, mainnet } from "viem/chains";

export const mainnetPublicClient: PublicClient = createPublicClient({
  transport: http(process.env.MAINNET_RPC_URL),
});
export const gnosisPublicClient: PublicClient = createPublicClient({
  transport: http(process.env.GNOSIS_RPC_URL),
});
export const lineaPublicClient: PublicClient = createPublicClient({
  transport: http(process.env.LINEA_RPC_URL),
});
export const basePublicClient: PublicClient = createPublicClient({
  transport: http(process.env.BASE_RPC_URL),
});

export const publicClients: Record<number, PublicClient> = {
  [mainnet.id]: mainnetPublicClient,
  [gnosis.id]: gnosisPublicClient,
  [linea.id]: lineaPublicClient,
  [base.id]: basePublicClient,
};

export const walletClient = process.env.WALLET_PRIVATE_KEY
  ? createWalletClient({
      account: privateKeyToAccount(
        process.env.WALLET_PRIVATE_KEY as `0x${string}`,
      ),
      transport: http(process.env.MAINNET_RPC_URL),
    })
  : undefined;
