import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { ERC20MintableABI } from "@hyperdrive/core";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { ReactElement, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Button } from "src/ui/base/components/Button";
import { Stat } from "src/ui/base/components/Stat";
import { MarketsTable } from "src/ui/markets/MarketsTable";
import { PositionsTable } from "src/ui/orders/PositionsTable";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";
import { PositionForm } from "src/ui/trading/PositionForm";
import { TradingChart } from "src/ui/trading/TradingChart";
import { Address } from "viem";
import {
  useAccount,
  useChainId,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

const MARKETS_MODAL_KEY = "MARKETS_MODAL";

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as Hyperdrive;
  const { appConfig } = useAppConfig();
  const { address: account } = useAccount();
  const chainId = useChainId();

  const yieldSource = appConfig?.yieldSources[market.yieldSource];
  const [tradeModalOpen, setTradeModalOpen] = useState(false);

  const { mint } = useMintBaseToken({
    amount: parseUnits("100", 18),
    baseToken: market.baseToken.address,
    destination: account,
  });

  return (
    <div className="grid h-[calc(100vh_-_64px)] grid-rows-[157px_1fr] overflow-hidden  md:grid-cols-[365px_1fr] md:grid-rows-1 lg:grid-cols-[447px_1fr]">
      {/* Market information row - mobile only */}
      <div className="flex h-fit flex-col gap-4 px-8 pb-4 pt-6 md:hidden">
        <div className="flex">
          <label
            htmlFor={MARKETS_MODAL_KEY}
            className="daisy-btn mr-auto gap-x-2 rounded-sm bg-base-300 text-h4 normal-case"
          >
            {market.name} <ChevronDownIcon className="h-8" />
          </label>

          <button
            onClick={() => setTradeModalOpen(true)}
            className="flex h-fit items-center gap-x-1 rounded bg-gradient-to-r from-hyper-pink via-[#afd5ff] to-hyper-green px-4 py-2 font-dm-sans font-bold text-base-100 hover:opacity-80"
          >
            <p>Trade</p>
          </button>
        </div>

        <div className="flex w-full gap-x-8">
          <Stat
            label="Protocol"
            value={<YieldSourceLabel yieldSource={yieldSource} />}
          />
          <Stat label="Liquidity" value="$100M" />
          <Stat label="Volume" value="$4.4M" />
          <Stat label="APR" value="1.50%" />
        </div>
      </div>

      {/* Position form column */}
      <div className="md:basis=[447px] hidden w-full shrink-0 flex-col px-8 py-6 md:flex md:max-w-md">
        <PositionForm market={market} />
      </div>

      {/* Chart column */}
      <div className="flex h-full flex-col overflow-hidden bg-base-100">
        <div className="hidden items-center justify-start gap-x-20 px-8 py-4 md:flex">
          <label
            htmlFor={MARKETS_MODAL_KEY}
            className="daisy-btn gap-x-2 rounded-sm bg-base-300 text-h4 normal-case"
          >
            {market.name} <ChevronDownIcon className="h-8" />
          </label>

          <div className="flex items-center gap-x-16">
            {chainId === 31337 ? (
              <Button disabled={!mint} variant="Work" onClick={() => mint?.()}>
                Mint Tokens
              </Button>
            ) : undefined}

            <Stat
              label="Protocol"
              value={<YieldSourceLabel yieldSource={yieldSource} />}
            />
            <Stat className="hidden lg:block" label="Liquidity" value="$100M" />
            <Stat className="hidden xl:block" label="Long APR" value="1.50%" />
            <Stat className="hidden xl:block" label="Short APY" value="1.75%" />
            <Stat className="hidden xl:block" label="LP APY" value="1.60%" />
            <Stat
              className="hidden lg:block"
              label="Volume (24H)"
              value="$4.4M"
            />
          </div>
        </div>

        <div className="px-8 py-4">
          <div className="flex items-center gap-x-2">
            <h6 className="font-dm-sans font-bold text-hyper-blue-100">
              Market Sentiment Indicator
            </h6>
            <InformationCircleIcon className="h-4 fill-hyper-blue-100" />
          </div>

          <div className="h-[30vh] md:h-[40vh]">
            <TradingChart market={market} />
          </div>
        </div>

        <div className="h-[calc(100%_-_64px)] md:h-auto">
          <PositionsTable hyperdrive={market} />
        </div>
      </div>

      {/* Mobile only */}
      {tradeModalOpen && (
        <div className="absolute z-50 h-[calc(100vh_-_64px)] w-full overflow-scroll overflow-y-hidden bg-base-100 px-8 pt-4 md:hidden">
          <PositionForm
            market={market}
            handleClose={() => setTradeModalOpen(false)}
          />
        </div>
      )}

      {/* Markets modal */}
      <input
        type="checkbox"
        id={MARKETS_MODAL_KEY}
        className="daisy-modal-toggle"
      />
      <label
        htmlFor={MARKETS_MODAL_KEY}
        className="daisy-modal cursor-pointer px-8"
      >
        <div className="flex max-h-[70vh] flex-col items-center overflow-auto rounded bg-base-100 p-4">
          <h3 className="font-akira">Markets</h3>

          <MarketsTable />
        </div>
      </label>
    </div>
  );
}
function useMintBaseToken({
  baseToken,
  destination,
  amount,
}: {
  baseToken: Address;
  destination: Address | undefined;
  amount: bigint;
}) {
  const addRecentTransaction = useAddRecentTransaction();
  const chainId = useChainId();

  const isEnabled = !!destination && !!amount && chainId === 31337;

  const { config } = usePrepareContractWrite({
    address: baseToken,
    abi: ERC20MintableABI,
    functionName: "mint",
    enabled: isEnabled,
    args: isEnabled ? [destination, amount] : undefined,
  });

  const { write: mint } = useContractWrite({
    ...config,
    onSuccess: (result) => {
      addRecentTransaction({
        hash: result.hash,
        description: `Mint tokens`,
      });
    },
  });

  return { mint };
}
