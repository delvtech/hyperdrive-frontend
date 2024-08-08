import { ReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import { sepolia } from "viem/chains";
import { publicClient, walletClient } from "../client";

const hyperdrive = new ReadWriteHyperdrive({
  address: "0xE352F4D16C7Ee4162d1aa54b77A15d4DA8f35f4b",
  // address: "0xC7cb718D5f1c5B4839045aed2620FABc1cF13CD3",
  publicClient,
  walletClient: walletClient!,
});

const tx = await walletClient?.writeContract({
  address: "0xE352F4D16C7Ee4162d1aa54b77A15d4DA8f35f4b",
  abi: hyperdrive.contract.abi,
  functionName: "openLong",
  args: [
    BigInt(1e18),
    0n,
    0n,
    {
      destination: "0x005BB73FddB8CE049eE366b50d2f48763E9Dc0De",
      asBase: true,
      extraData: "0x",
    },
  ],
  chain: sepolia,
});

console.log("txhash", tx);

// const rate = await hyperdrive.openLong({
//   args: {
//     amount: BigInt(1e18),
//     minBondsOut: 0n,
//     minVaultSharePrice: 0n,
//     destination: "0x005BB73FddB8CE049eE366b50d2f48763E9Dc0De",
//     asBase: true,
//   },
// });

// console.log("txhash", rate);
