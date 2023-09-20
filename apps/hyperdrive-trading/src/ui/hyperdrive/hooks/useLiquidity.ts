import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";
import { useReadHyperdrive } from "./useReadHyperdrive";

export function useLiquidity(hyperdriveAddress: Address): {
  liquidity:
    | {
        liquidity: bigint;
        formatted: string;
      }
    | undefined;
  liquidityStatus: QueryStatus;
} {
  const publicClient = usePublicClient();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);

  const { data, status } = useQuery();

  return {
    liquidity: data,
    liquidityStatus: status,
  };
}
