import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useEffect } from "react";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { formatUnits } from "viem";

export function useDevLogging(hyperdrive: HyperdriveConfig): void {
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log("Pool Config:");
      console.table(
        bigIntsToString(hyperdrive.poolConfig, hyperdrive.decimals),
      );
    }
  }, [hyperdrive.decimals, hyperdrive.poolConfig]);

  const { poolInfo } = usePoolInfo({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log("Pool Info:");
      console.table(
        poolInfo ? bigIntsToString(poolInfo, hyperdrive.decimals) : undefined,
      );
    }
  }, [poolInfo, hyperdrive.decimals]);
}

type BigIntsToStrings<T> = T extends bigint
  ? string
  : T extends Array<infer U>
    ? BigIntsToStrings<U>[]
    : T extends object
      ? { [K in keyof T]: BigIntsToStrings<T[K]> }
      : T;

function bigIntsToString<T>(value: T, decimals: number): BigIntsToStrings<T> {
  if (typeof value === "bigint") {
    return formatUnits(value, decimals) as BigIntsToStrings<T>;
  }

  if (Array.isArray(value)) {
    return value.map((item) =>
      bigIntsToString(item, decimals),
    ) as BigIntsToStrings<T>;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key,
        bigIntsToString(value, decimals),
      ]),
    ) as BigIntsToStrings<T>;
  }

  return value as BigIntsToStrings<T>;
}
