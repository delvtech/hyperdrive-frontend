import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { getDrift } from "src/drift/getDrift";
import { Address } from "viem";
interface UseOpenLongZapOptions {
  hyperdriveAddress: Address;
  chainId: number;
  minSharePrice: bigint;
  minBondsOut: bigint;
  amount: bigint;
  asBase?: boolean;
  enabled?: boolean;
}

export function useOpenLongZap({
  hyperdriveAddress,
  chainId,
  minSharePrice,
  minBondsOut,
  amount,
  asBase,
  enabled,
}: UseOpenLongZapOptions): any {
  const zapsAddress = appConfig.zaps[chainId];
  const queryEnabled = !!zapsAddress;

  const drift = getDrift({ chainId });

  //   const { data, status } = useWriteContract({
  //     abi: [
  //       {
  //         type: "function",
  //         name: "openLongZap",
  //         inputs: [
  //           { name: "_hyperdrive", type: "address" },
  //           { name: "_minOutput", type: "uint256" },
  //           { name: "_minVaultSharePrice", type: "uint256" },
  //           // TODO: add zapInOptions and hyperdriveOptions
  //         ],
  //         outputs: [
  //           { name: "maturityTime", type: "uint256" },
  //           { name: "longAmount", type: "uint256" },
  //         ],
  //         stateMutability: "payable",
  //       },
  //     ],
  //     address: zapsAddress?.address,
  //     functionName: "openLongZap",
  //     args: [hyperdriveAddress, minBondsOut, minSharePrice],
  //   });

  //   return { openLongZap: data, openLongZapStatus: status };
}
