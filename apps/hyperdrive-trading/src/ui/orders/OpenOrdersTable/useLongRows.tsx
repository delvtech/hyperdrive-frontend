import { XMarkIcon } from "@heroicons/react/24/solid";
import { Long } from "@hyperdrive/core";
import { Hyperdrive } from "src/appconfig/types";
import { Button } from "src/ui/base/components/Button";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCloseLong } from "src/ui/hyperdrive/hooks/useCloseLong";
import { useOpenLongs } from "src/ui/hyperdrive/hooks/useLongs";
import { usePreviewCloseLong } from "src/ui/hyperdrive/hooks/usePreviewCloseLong";
import { Address, formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

interface UseOpenLongRowsOptions {
  account: Address | undefined;
  hyperdrive: Hyperdrive | undefined;
}

export function useOpenLongRows({
  account,
  hyperdrive,
}: UseOpenLongRowsOptions): {
  openLongRows: Row[] | undefined;
  openLongRowsStatus: "error" | "success" | "loading";
} {
  const { openLongs = [], openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive?.address,
  });

  const rows = hyperdrive
    ? openLongs.map((long) =>
        createLongRow({
          hyperdrive,
          long,
        }),
      )
    : [];

  return { openLongRows: rows, openLongRowsStatus: openLongsStatus };
}

function createLongRow({
  long,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  long: Long;
}): Row {
  const {
    baseToken: { decimals: baseDecimals, symbol: baseSymbol },
  } = hyperdrive;

  return {
    cells: [
      <span key="type" className={"font-bold text-hyper-green"}>
        Long
      </span>,
      <span key="size">
        {formatBalance(formatUnits(long.amount, baseDecimals), 4)}
      </span>,
      <ValueCell
        key="value"
        long={long}
        baseDecimals={baseDecimals}
        baseSymbol={baseSymbol}
      />,
      <span key="maturity">
        {new Date(long.maturity).toLocaleDateString()}
      </span>,
      <span key="close-long">
        <Button
          size="sm"
          onClick={() => (window as any).closeLongModal.showModal()}
        >
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close long position"
          />
        </Button>
        <CloseLongModal
          long={long}
          baseDecimals={baseDecimals}
          baseSymbol={baseSymbol}
        />
      </span>,
    ],
  };
}

function ValueCell({
  baseDecimals,
  baseSymbol,
  long,
}: {
  long: Long;
  baseDecimals: number;
  baseSymbol: string;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseLong({
    hyperdriveAddress: long.hyperdriveAddress,
    maturityTime: long.maturity / 1000,
    bondAmountIn: long.amount,
    minBaseAmountOut: parseUnits("1", 18), // TODO: slippage
    destination: account,
  });
  return (
    <span className="inline-flex items-center gap-1">
      {baseAmountOut !== undefined
        ? `${formatBalance(formatUnits(baseAmountOut, baseDecimals), 2)}`
        : null}{" "}
      {baseSymbol}
    </span>
  );
}

interface CloseLongModalProps {
  long: Long;
  baseDecimals: number;
  baseSymbol: string;
}

function CloseLongModal({
  long,
  baseDecimals,
  baseSymbol,
}: CloseLongModalProps) {
  const { address: account } = useAccount();
  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: long.hyperdriveAddress,
    maturityTime: long.maturity / 1000,
    bondAmountIn: long.amount,
    minBaseAmountOut: parseUnits("1", baseDecimals), // TODO: slippage
    destination: account,
  });

  const { closeLong, isPendingWalletAction } = useCloseLong({
    long,
    bondAmountIn: long.amount,
    minBaseAmountOut: parseUnits("1", baseDecimals), // TODO: slippage
    destination: account,
    enabled: previewCloseLongStatus === "success",
  });

  return (
    <dialog id="closeLongModal" className="daisy-modal">
      <form method="dialog" className="daisy-modal-box">
        <button className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn absolute right-4 top-4">
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close position"
          />
        </button>
        <h3 className="text-lg font-bold">Close position</h3>
        <p className="py-4">Close long position...</p>
        Amount you receive:{" "}
        {baseAmountOut
          ? `${formatBalance(formatUnits(baseAmountOut, baseDecimals), 2)}`
          : "-"}{" "}
        {baseSymbol}
        <Button
          disabled={!closeLong || !!isPendingWalletAction}
          onClick={(e) => {
            // preventDefault since we don't want to close the modal while the
            // tx is temporarily pending the user's signature in their wallet.
            e.preventDefault();
            return closeLong?.();
          }}
        >
          Close Long
        </Button>
      </form>
      <form method="dialog" className="daisy-modal-backdrop">
        <Button onClick={() => (window as any).closeLongModal.close()}>
          close
        </Button>
      </form>
    </dialog>
  );
}
