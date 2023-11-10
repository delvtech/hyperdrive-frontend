import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useAccount } from "wagmi";

interface LpPortfolioCardProps {
  hyperdrive: Hyperdrive;
}

export function LpPortfolioCard({
  hyperdrive,
}: LpPortfolioCardProps): ReactElement {
  const { address: account } = useAccount();
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  return (
    <Well>
      <div className="flex w-80 flex-col gap-8">
        <span className="text-h6 font-bold">LP Shares</span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="">Pool share</p>
              <p>1.254%</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="">LP balance</p>
              <p className="">
                {!lpShares ? (
                  <Skeleton />
                ) : (
                  formatBalance({
                    balance: lpShares,
                    decimals: hyperdrive.baseToken.decimals,
                    places: 4,
                  })
                )}{" "}
                Shares
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="">Current value</p>
              <p className="font-bold">5,723.22 ETH</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p
                className="daisy-tooltip inline-flex items-center gap-1"
                data-tip="Your ratio of idle capital to capital being used to back Longs and Shorts"
              >
                Utilization ratio
                <InformationCircleIcon className="h-5 w-5" />
              </p>
              <p>64%</p>
            </div>
          </div>
          <progress className="daisy-progress" value="70" max="100"></progress>
        </div>
        <div className="flex items-center justify-end">
          <div className="daisy-join-vertical daisy-join gap-1 lg:daisy-join-horizontal">
            <button className="daisy-btn-neutral daisy-btn-sm daisy-join-item daisy-btn hover:daisy-btn-ghost">
              Deposit
            </button>
            <button className="daisy-btn-neutral daisy-btn-sm daisy-join-item daisy-btn hover:daisy-btn-ghost">
              Withdraw
            </button>
          </div>
        </div>
        <p className="text-center text-body">
          Note: When you withdraw liquidity, you get back WETH and withdrawal
          shares proportional to your utilization ratio.
        </p>
      </div>
    </Well>
  );
}
