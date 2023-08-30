import { Long } from "@hyperdrive/core";
import { Hyperdrive } from "src/appconfig/types";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import {
  getProfitLossText,
  getStyleClassForProfitLoss,
} from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
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
      <ProfitLossCell
        key="profitLoss"
        long={long}
        hyperdriveAddress={hyperdrive.address}
        baseDecimals={baseDecimals}
        baseSymbol={baseSymbol}
        hyperdrive={hyperdrive}
      />,
      <span key="maturity">
        {new Date(Number(long.maturity * 1000n)).toLocaleDateString()}
      </span>,
      <span key="close-long" className="flex justify-end">
        <CloseLongModalButton
          modalId={modalId}
          hyperdrive={hyperdrive}
          long={long}
        />
      </span>,
    ],
  };
}

function ProfitLossCell({
  baseDecimals,
  hyperdriveAddress,
  baseSymbol,
  long,
  hyperdrive,
}: {
  long: Long;
  hyperdriveAddress: Address;
  baseDecimals: number;
  baseSymbol: string;
  hyperdrive: Hyperdrive;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseLong({
    hyperdriveAddress,
    maturityTime: long.maturity,
    bondAmountIn: long.bondAmount,
    minBaseAmountOut: parseUnits("0", baseDecimals),
    destination: account,
  });
  const profitLossClass = baseAmountOut
    ? getStyleClassForProfitLoss(baseAmountOut, long.baseAmountPaid)
    : "";

  return (
    <span
      className={`daisy-tooltip inline-flex items-center gap-1 ${profitLossClass}`}
      data-tip={`Amount Paid: ${formatBalance(
        formatUnits(long.baseAmountPaid, hyperdrive.baseToken.decimals),
        4,
      )} ${baseSymbol} / Value: ${
        baseAmountOut &&
        formatBalance(formatUnits(baseAmountOut, baseDecimals), 2)
      } `}
    >
      {baseAmountOut && long.baseAmountPaid !== 0n
        ? `${getProfitLossText({
            baseAmountOut,
            amountInput: long.baseAmountPaid,
            baseDecimals,
            baseSymbol,
            showPercentage: false,
          })}`
        : ""}
    </span>
  );
}
