import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { Tag } from "components/Tag";
import { TokenInput } from "components/TokenInput";
import { BigNumber, constants } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import {
  useHyperdriveCloseShort,
  usePrepareHyperdriveCloseShort,
} from "generated";
import { usePreviewCloseShort } from "hyperdrive/hooks/usePreviewCloseShort";
import { useShorts } from "hyperdrive/hooks/useShorts";
import { Market, Short } from "hyperdrive/types";
import { getAssetTimestampFromTokenId } from "hyperdrive/utils";
import { ReactElement, useState } from "react";
import { formatBalance, isValidTokenAmount } from "utils";
import { useAccount } from "wagmi";

interface CloseShortPositionFormProps {
  market: Market;
}

export function CloseShortPositionForm({
  market,
}: CloseShortPositionFormProps): ReactElement {
  const { address } = useAccount();

  const [balance, setBalance] = useState("0");

  const { data: shorts } = useShorts(address, market);
  const openShorts = shorts?.openShorts ?? [];

  const [selectedShort, setSelectedShort] = useState<Short | undefined>();

  // Preview amounts
  const { data: previewAmountOutBN } = usePreviewCloseShort(
    address,
    market,
    selectedShort?.id,
    balance,
  );
  const previewAmountOut = formatUnits(
    previewAmountOutBN ?? "0",
    market.baseToken.decimals,
  );
  const formattedPreviewAmountOut =
    previewAmountOut === "0.0" ? "0" : previewAmountOut;

  // Open short hooks
  // todo find out why this throws an error when balance is zero
  const prepareHyperdriveCloseShortEnabled =
    !!address && !!selectedShort && isValidTokenAmount(balance);
  const { config: CloseShortConfig, error } = usePrepareHyperdriveCloseShort({
    address: market.address,
    enabled: prepareHyperdriveCloseShortEnabled,
    args: prepareHyperdriveCloseShortEnabled
      ? [
          // todo prevent from crashing page, since this gets typed check during runtime
          getAssetTimestampFromTokenId(BigNumber.from(selectedShort.id)),
          parseUnits(balance, market.baseToken.decimals),
          constants.Zero,
          address,
          false,
        ]
      : undefined,
  });

  // console.log(
  //   error,
  //   !!address && !!selectedShort && isValidTokenAmount(balance),
  // );

  const { write: writeCloseShort, isLoading: CloseShortLoading } =
    useHyperdriveCloseShort(CloseShortConfig);

  return (
    <div className="flex flex-col animate-ezn gap-y-10">
      <div className="flex flex-col gap-4">
        <select
          className="w-full max-w-xs text-white bg-transparent select border-lean"
          defaultValue=""
          onChange={(event) => {
            const shortId = event.target.value;
            // find long with id
            setSelectedShort(openShorts.find((short) => short.id === shortId));
          }}
        >
          <option value="" disabled>
            Select short position
          </option>
          {openShorts.map((short) => (
            <option key={`${short.id}-${short.amount}`} value={short.id}>
              Short {short.id}{" "}
              {formatBalance(
                formatUnits(short.amount, market.baseToken.decimals),
              )}
            </option>
          ))}
        </select>

        <h3 className="text-2xl">From Position</h3>
        <TokenInput
          token={{
            name: "Short",
            symbol: "SHORT",
            decimals: 18,
          }}
          disabled={!selectedShort}
          showInputError={!!error}
          currentBalance={selectedShort?.amount.toString() ?? "0"}
          onChange={(newBalance: string) => {
            setBalance(newBalance || "0");
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">You Receive</h3>

        <div className="flex items-center w-full p-4">
          <div className="mr-4 overflow-auto grow basis-0">
            <h4 className="mr-auto text-5xl font-bold">
              {formattedPreviewAmountOut}
            </h4>
          </div>
          <Tag text={market.baseToken.symbol}>
            <img
              className="inline mr-1"
              src={market.baseToken.logoUrl}
              height={16}
              width={16}
            />
          </Tag>
        </div>
      </div>

      {error ? (
        <button
          disabled
          className="font-bold disabled:text-black btn-lg btn disabled:bg-error"
        >
          <ExclamationCircleIcon className="w-5 mr-1" />
          Can&apos;t swap
        </button>
      ) : (
        <button
          disabled={!isValidTokenAmount(balance) || CloseShortLoading}
          onClick={() => writeCloseShort && writeCloseShort()}
          className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean disabled:bg-lean disabled:bg-opacity-60 disabled:text-opacity-100"
        >
          Close short
        </button>
      )}
    </div>
  );
}
