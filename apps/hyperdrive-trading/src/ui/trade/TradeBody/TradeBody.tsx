import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Button } from "src/ui/base/components/Button";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { MarketSelect } from "src/ui/markets/MarketSelect/MarketSelect";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { OpenLongPositionForm } from "src/ui/trade/OpenLongPositionForm";
import { PositionsSection } from "src/ui/trade/PositionsSection/PositionsSection";
import { parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}
const OPEN_LONG_MODAL_ID = "open-long-modal";

export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { appConfig } = useAppConfig();
  const { address: account } = useAccount();
  const chainId = useChainId();
  const yieldSource = appConfig?.yieldSources[hyperdrive.yieldSource];
  const { mint } = useMintBaseToken({
    amount: parseUnits("100", hyperdrive.baseToken.decimals),
    baseToken: hyperdrive.baseToken.address,
    destination: account,
  });

  return (
    <div className="flex max-w-4xl flex-col gap-16 ">
      {/* Name and Stats */}
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-center gap-8">
          <span className="shrink-0 font-rubik text-h3 font-semibold">
            {hyperdrive.name}
          </span>
          <div className="flex items-center">
            <MarketSelect markets={[hyperdrive]} />
          </div>
          {chainId === 31337 ? (
            <Button disabled={!mint} variant="Work" onClick={() => mint?.()}>
              Mint Tokens
            </Button>
          ) : undefined}
        </div>
        <div className="flex w-full flex-wrap items-center justify-start gap-16">
          <Stat
            label="Protocol"
            value={<YieldSourceLabel yieldSource={yieldSource} />}
          />
          <Stat label="Liquidity" value="$100M" />
          <Stat label="Fixed Rate" value="1.50%" />
          <Stat label="Dai Savings Rate" value="1.60%" />
          <Stat label="LP APY" value="1.60%" />
          <Stat label="Volume (24h)" value="$4.4M" />
        </div>
      </div>

      <div>
        <div className="mb-8 flex w-full items-center justify-between border-b border-base-500">
          <span className="pb-2 font-rubik text-h5 text-hyper-blue-200">
            Hyperdrive Actions
          </span>
        </div>
        <div className="flex flex-wrap gap-10 ">
          <Well
            interactive
            variant="primary"
            onClick={() => {
              (window as any)[OPEN_LONG_MODAL_ID].showModal();
            }}
          >
            <div className="flex w-44 flex-col gap-2 py-4 text-center">
              <p className="font-rubik text-h5 text-hyper-green">Open a long</p>
              <p className="text-body">
                Get fixed rate yield on your DAI holdings
              </p>
            </div>
          </Well>
          <dialog id={OPEN_LONG_MODAL_ID} className="daisy-modal">
            <form method="dialog" className="daisy-modal-box bg-base-300">
              <OpenLongPositionForm market={hyperdrive} />
            </form>
            <form method="dialog" className="daisy-modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <Well interactive variant="secondary">
            <div className="flex w-44 flex-col gap-2 py-4 text-center">
              <p className="font-rubik text-h5 text-hyper-orange">
                Open a short
              </p>
              <p className="text-body">
                Gain leveraged exposure to the DAI Savings Rate
              </p>
            </div>
          </Well>

          <Well interactive variant="accent">
            <div className="flex w-44 flex-col gap-2 py-4 text-center">
              <p className="font-rubik text-h5 text-hyper-pink">
                Add liquidity
              </p>
              <p className="text-body">
                Earn trading fees when users open longs or shorts
              </p>
            </div>
          </Well>
        </div>
      </div>

      <PositionsSection hyperdrive={hyperdrive} />

      <div className="flex flex-col gap-6 pb-12">
        <div className="flex w-full items-center justify-between border-base-500">
          <span className="pb-2 font-rubik text-h5 text-hyper-blue-200">
            FAQ
          </span>
        </div>
        <Disclosure
          title={<span className="text-h6 font-semibold">What is a long?</span>}
          description={
            <p>
              The Dai Savings Rate (DSR) is a feature within the MakerDAO system
              that allows Dai stablecoin holders to earn interest on their
              holdings when they lock it into a DSR smart contract. The interest
              rate is variable, set by the MakerDAO community, and users can
              withdraw their Dai plus earned interest at any time, similar to a
              traditional savings account but operating on the blockchain.
            </p>
          }
        />
        <Disclosure
          title={
            <span className="text-h6 font-semibold">What is a short?</span>
          }
          description={
            <p>
              The Dai Savings Rate (DSR) is a feature within the MakerDAO system
              that allows Dai stablecoin holders to earn interest on their
              holdings when they lock it into a DSR smart contract. The interest
              rate is variable, set by the MakerDAO community, and users can
              withdraw their Dai plus earned interest at any time, similar to a
              traditional savings account but operating on the blockchain.
            </p>
          }
        />
        <Disclosure
          title={
            <span className="text-h6 font-semibold">
              What is the Dai Savings Rate?
            </span>
          }
          description={
            <p>
              The Dai Savings Rate (DSR) is a feature within the MakerDAO system
              that allows Dai stablecoin holders to earn interest on their
              holdings when they lock it into a DSR smart contract. The interest
              rate is variable, set by the MakerDAO community, and users can
              withdraw their Dai plus earned interest at any time, similar to a
              traditional savings account but operating on the blockchain.
            </p>
          }
        />
      </div>
    </div>
  );
}
