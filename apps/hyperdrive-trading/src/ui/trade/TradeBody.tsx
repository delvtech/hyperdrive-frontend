import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Button } from "src/ui/base/components/Button";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";
import { Stat } from "src/ui/base/components/Stat";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { OrdersSection } from "src/ui/trade/OrdersSection/OrdersSection";
import { parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}

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
    <div className="flex flex-col">
      <div className="mb-16 flex w-full flex-col gap-8">
        <div className="flex w-full items-center justify-end">
          <ConnectButton showBalance={false} />
        </div>

        <div className="space-y-4">
          <span className="text-h3 font-semibold">{hyperdrive.name}</span>
          <div className="flex w-full flex-wrap items-center justify-start gap-16">
            <Stat
              label="Protocol"
              value={<YieldSourceLabel yieldSource={yieldSource} />}
            />
            <Stat label="Liquidity" value="$100M" />
            <Stat label="Fixed Rate" value="1.50%" />
            <Stat label="LP APY" value="1.60%" />
            <Stat label="Volume (24h)" value="$4.4M" />
            {chainId === 31337 ? (
              <Button disabled={!mint} variant="Work" onClick={() => mint?.()}>
                Mint Tokens
              </Button>
            ) : undefined}
          </div>
        </div>
      </div>

      <OrdersSection hyperdrive={hyperdrive} />

      <div className="flex flex-col gap-6">
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
