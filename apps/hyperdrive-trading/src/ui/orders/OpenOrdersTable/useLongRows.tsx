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
        <Button
          size="sm"
          onClick={() => (window as any).closeLongModal.showModal()}
        >
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close position"
          />
        </Button>
        <CloseLongModal long={long} />
      </span>,
    ],
  };
}

interface CloseLongModalProps {
  long: Long;
}

function CloseLongModal({ long }: CloseLongModalProps) {
  return (
    <dialog id="closeLongModal" className="modal">
      <form method="dialog" className="modal-box">
        <button className="daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost absolute right-4 top-4">
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close position"
          />
        </button>
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <Button onClick={() => (window as any).closeLongModal.close()}>
          close
        </Button>
      </form>
    </dialog>
  );
}
