import { XMarkIcon } from "@heroicons/react/24/solid";
import { Long } from "@hyperdrive/core";
import { Hyperdrive } from "src/appconfig/types";
import { Button } from "src/ui/base/components/Button";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useOpenLongs } from "src/ui/hyperdrive/hooks/useOpenLongs";
import { usePreviewCloseLong } from "src/ui/hyperdrive/hooks/usePreviewCloseLong";
import { CloseLongModalButton } from "src/ui/trade/CloseLongModalButton/CloseLongModalButton";
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

  const openLongRows = hyperdrive
    ? openLongs.map((long) =>
        createOpenLongRow({
          hyperdrive,
          long,
        }),
      )
    : [];

  return { openLongRows, openLongRowsStatus: openLongsStatus };
}

function createOpenLongRow({
  long,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  long: Long;
}): Row {
  const {
    baseToken: { decimals: baseDecimals, symbol: baseSymbol },
  } = hyperdrive;

  const modalId = `${long.assetId}`;

  return {
    cells: [
      <span key="type" className="font-semibold uppercase text-secondary">
        Long
      </span>,
      <span key="size">
        {formatBalance(formatUnits(long.bondAmount, baseDecimals), 4)}
      </span>,
      <ValueCell
        key="value"
        long={long}
        baseDecimals={baseDecimals}
        baseSymbol={baseSymbol}
      />,
      <span key="maturity">
        {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
      </span>,
      <span key="close-long" className="flex justify-end">
        <Button size="sm" onClick={() => (window as any)[modalId].showModal()}>
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close long position"
          />
        </Button>

        <CloseLongModalButton
          modalId={modalId}
          hyperdrive={hyperdrive}
          long={long}
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
    maturityTime: long.maturity,
    bondAmountIn: long.bondAmount,
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
