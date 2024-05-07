import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import {
  Protocol,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Badge } from "src/ui/base/components/Badge";
import { Well } from "src/ui/base/components/Well/Well";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function YieldSourceCard({
  yieldSourceProtocol,
}: {
  yieldSourceProtocol: Protocol;
}): ReactElement {
  const appConfig = useAppConfig();

  // Extract the list of pools that have this yield source
  const pools = appConfig.hyperdrives.filter((hyperdrive) => {
    const sharesToken = findYieldSourceToken({
      tokens: appConfig.tokens,
      yieldSourceTokenAddress: hyperdrive.sharesToken,
    });
    return sharesToken.extensions.protocol === yieldSourceProtocol.id;
  });

  // The first pool is used to get the canonical base and shares tokens, etc..
  const [firstPool] = pools;

  const {
    depositOptions: { isBaseTokenDepositEnabled, isShareTokenDepositsEnabled },
  } = firstPool;

  const baseToken = findBaseToken({
    baseTokenAddress: firstPool.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: firstPool.sharesToken,
    tokens: appConfig.tokens,
  });

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: firstPool.address,
  });

  // TODO: Implement the values and markets table, most of the data is stubbed
  // for now

  return (
    <Well transparent interactive>
      <div className="flex flex-col gap-2">
        {/* Card header */}
        <div className="flex justify-between gap-4 p-4">
          <div className="flex gap-5">
            <img src={yieldSourceProtocol.iconUrl} className="h-20" />
            <div>
              <h3 className="mb-1">{sharesToken.extensions.shortName}</h3>
              {vaultRateStatus === "loading" && !vaultRate ? (
                <Skeleton className="w-42 h-8" />
              ) : (
                <Badge>
                  <span className="font-dmMono text-neutral-content">
                    Current APY @{" "}
                    <span className="text-primary">
                      {vaultRate?.formatted}%
                    </span>
                  </span>
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col text-neutral-content ">
            <span className="mb-2 flex">Deposit assets</span>
            <div className="daisy-avatar-group inline-flex justify-center -space-x-6 rtl:space-x-reverse">
              {isBaseTokenDepositEnabled ? (
                <div className="daisy-avatar">
                  <div className="w-12">
                    <img src={baseToken.iconUrl} />
                  </div>
                </div>
              ) : null}
              {isShareTokenDepositsEnabled ? (
                <div className="daisy-avatar">
                  <div className="w-12">
                    <img src={sharesToken.iconUrl} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Pools Table */}
        <table className="daisy-table daisy-table-zebra daisy-table-lg mt-8">
          <thead>
            <tr className="text-sm">
              {["Term", "Fixed APR", "Short APY", "LP APY", "Liquidity"].map(
                (header) => (
                  <th className="font-normal text-gray-400" key={header}>
                    {header}{" "}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            <tr className="daisy-hover h-20 cursor-pointer border-b-0 text-gray-50">
              <td>14 days</td>
              <td>5.27%</td>
              <td>4.15%</td>
              <td>1.65%</td>
              <td>1.62M {baseToken.symbol}</td>
              <td>
                <button className="daisy-btn-circle daisy-btn-xs flex items-center justify-center rounded-full">
                  <ArrowRightCircleIcon className="h-8" />
                </button>
              </td>
            </tr>
            <tr className="daisy-hover h-20 cursor-pointer border-b-0 text-gray-50">
              <td>30 days</td>
              <td>5.01%</td>
              <td>3.27%</td>
              <td>6.91%</td>
              <td>762K {baseToken.symbol}</td>
              <td>
                <button className="daisy-btn-circle daisy-btn-xs flex items-center justify-center rounded-full">
                  <ArrowRightCircleIcon className="h-8" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Well>
  );
}
