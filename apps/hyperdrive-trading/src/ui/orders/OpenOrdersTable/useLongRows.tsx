import { XMarkIcon } from "@heroicons/react/24/solid";
import { Long } from "@hyperdrive/core";
import { Button } from "src/ui/base/components/Button";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Row } from "src/ui/base/tables/SortableGridTable";
import { useLongs } from "src/ui/hyperdrive/hooks/useLongs";
import { Address, formatUnits } from "viem";

interface UseLongRowsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

export function useLongRows({
  account,
  hyperdriveAddress,
}: UseLongRowsOptions): {
  longRows: Row[] | undefined;
  longRowsStatus: "error" | "success" | "loading";
} {
  const { longs = [] } = useLongs({ account, hyperdriveAddress });

  const rows = longs.map((long) =>
    // TODO: Look up price and decimals of baseAsset of the hyperdrive pool
    createLongRow({ long, baseDecimals: 18, baseAssetPrice: 1 }),
  );

  return { longRows: rows, longRowsStatus: "success" };
}

function createLongRow({
  long,
  baseDecimals,
  baseAssetPrice,
}: {
  long: Long;
  baseDecimals: number;
  baseAssetPrice: number;
}): Row {
  return {
    cells: [
      <span key="type" className={"font-bold text-hyper-green"}>
        Long
      </span>,
      <span key="amount">
        {formatBalance(formatUnits(long.amount, baseDecimals), 4)}
      </span>,
      <span key="value">
        {`$${formatBalance(
          formatUnits(long.amount * BigInt(baseAssetPrice), baseDecimals),
          2,
        )}`}
      </span>,
      <span key="expiration">
        {new Date(long.maturity).toLocaleDateString()}
      </span>,
      <span key="close-long">
        <Button size="sm" onClick={() => {}}>
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close position"
          />
        </Button>
      </span>,
    ],
  };
}
