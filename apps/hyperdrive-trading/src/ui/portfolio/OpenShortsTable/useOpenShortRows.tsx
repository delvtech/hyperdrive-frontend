import { OpenShort } from "@hyperdrive/core";
import { Hyperdrive } from "src/appconfig/types";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { useOpenShorts } from "src/ui/hyperdrive/shorts/hooks/useOpenShorts";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { Address, formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

interface UseOpenShortRowsOptions {
  account: Address | undefined;
  hyperdrive: Hyperdrive | undefined;
}

export function useOpenShortRows({
  account,
  hyperdrive,
}: UseOpenShortRowsOptions): {
  openShortRows: Row[] | undefined;
  openShortRowsStatus: "error" | "success" | "loading";
} {
  const { openShorts = [], openShortsStatus: openShortRowsStatus } =
    useOpenShorts({
      account,
      hyperdriveAddress: hyperdrive?.address,
    });

  const openShortRows = hyperdrive
    ? openShorts.map((short) =>
        createOpenShortRow({
          hyperdrive,
          short,
        }),
      )
    : [];

  return {
    openShortRows,
    openShortRowsStatus,
  };
}

function createOpenShortRow({
  short,
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
  short: OpenShort;
}): Row {
  const {
    baseToken: { decimals: baseDecimals, symbol: baseSymbol },
  } = hyperdrive;

  const modalId = `${short.assetId}`;

  return {
    cells: [
      <span key="type" className="font-semibold uppercase text-accent">
        Short
      </span>,
      <span key="size">
        {formatBalance(formatUnits(short.bondAmount, baseDecimals), 4)}
      </span>,
      <span key="amountPaid">
        {formatBalance(formatUnits(short.baseAmountPaid, baseDecimals), 4)}{" "}
        {`${baseSymbol}`}
      </span>,
      <ValueCell
        key="value"
        short={short}
        baseDecimals={baseDecimals}
        baseSymbol={baseSymbol}
      />,
      <span key="maturity">
        {new Date(Number(short.maturity * 1000n)).toLocaleDateString()}
      </span>,
      <span key="close-short" className="flex justify-end">
        <CloseShortModalButton
          modalId={modalId}
          hyperdrive={hyperdrive}
          short={short}
        />
      </span>,
    ],
  };
}

function ValueCell({
  baseDecimals,
  baseSymbol,
  short,
}: {
  short: OpenShort;
  baseDecimals: number;
  baseSymbol: string;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseShort({
    hyperdriveAddress: short.hyperdriveAddress,
    maturityTime: short.maturity,
    shortAmountIn: short.bondAmount,
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
