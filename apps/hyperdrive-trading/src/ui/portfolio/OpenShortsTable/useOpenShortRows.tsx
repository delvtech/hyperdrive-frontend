import { OpenShort } from "@hyperdrive/sdk";
import { Hyperdrive } from "src/appconfig/types";
import { Row } from "src/ui/base/components/tables/SortableGridTable";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import {
  getProfitLossText,
  getStyleClassForProfitLoss,
} from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
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
  openShortRowsStatus: "error" | "success" | "pending";
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
        {formatBalance({
          balance: formatUnits(short.bondAmount, baseDecimals),
          numDecimals: 4,
        })}
      </span>,
      <ProfitLossCell
        key="profitLoss"
        short={short}
        hyperdriveAddress={hyperdrive.address}
        baseDecimals={baseDecimals}
        baseSymbol={baseSymbol}
        hyperdrive={hyperdrive}
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

function ProfitLossCell({
  baseDecimals,
  hyperdriveAddress,
  baseSymbol,
  short,
  hyperdrive,
}: {
  short: OpenShort;
  hyperdriveAddress: Address;
  baseDecimals: number;
  baseSymbol: string;
  hyperdrive: Hyperdrive;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseShort({
    hyperdriveAddress,
    maturityTime: short.maturity,
    shortAmountIn: short.bondAmount,
    minBaseAmountOut: parseUnits("0", 18),
    destination: account,
  });

  const profitLossClass = baseAmountOut
    ? getStyleClassForProfitLoss(baseAmountOut, short.baseAmountPaid)
    : "";

  return (
    <span
      className={`daisy-tooltip inline-flex items-center gap-1 ${profitLossClass}`}
      data-tip={`Amount Paid: ${formatBalance({
        balance: formatUnits(short.bondAmount, hyperdrive.baseToken.decimals),
        numDecimals: 4,
      })} ${baseSymbol} / Value: ${
        baseAmountOut &&
        formatBalance({
          balance:
            Number(formatUnits(short.bondAmount, baseDecimals)) -
            Number(formatUnits(baseAmountOut, baseDecimals)),
          numDecimals: 2,
        })
      } `}
    >
      {baseAmountOut && short.bondAmount !== 0n
        ? `${getProfitLossText({
            baseAmountOut,
            amountInput: short.baseAmountPaid,
            baseDecimals,
            baseSymbol,
            showPercentage: false,
          })}`
        : ""}
    </span>
  );
}
