import { AppConfig, getToken } from "@delvtech/hyperdrive-appconfig";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Reward } from "src/rewards/generated/HyperdriveRewardsApi";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Pagination } from "src/ui/base/components/Pagination";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { useClaimReward } from "src/ui/rewards/hooks/useClaimReward";
import { useClaimedRewards } from "src/ui/rewards/hooks/useClaimedRewards";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { Address } from "viem";
import { useChainId } from "wagmi";

export function RewardsTableDesktop({
  account,
  rewards,
}: {
  account: Address;
  rewards: Reward[];
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain({ strict: false });
  const tableInstance = useReactTable({
    columns: getColumns({ account, appConfig }),
    data: rewards || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
      <table className="daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b-0" key={headerGroup.id}>
              {headerGroup.headers.map((header, headerIndex) => (
                <th
                  key={header.id}
                  className="relative z-10 text-sm font-normal text-neutral-content/70"
                >
                  <div
                    className={classNames({
                      "flex cursor-pointer select-none items-center gap-2":
                        header.column.getCanSort(),
                      "px-4": headerIndex === 0, // Add padding only to the first header cell. This is so that the headers line up vertically with the card title
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: <ChevronUpIcon height={15} />,
                      desc: <ChevronDownIcon height={15} />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                  {/* Custom border with inset for the first and last header cells */}
                  <span
                    className={classNames(
                      "absolute bottom-0 border-b border-neutral-content/20",
                      {
                        "left-6 right-0": headerIndex === 0, // Inset border only on the left side for the first header cell
                        "left-0 right-6":
                          headerIndex === headerGroup.headers.length - 1, // Inset border only on the right side for the last header cell
                        "left-0 right-0":
                          headerIndex !== 0 &&
                          headerIndex !== headerGroup.headers.length - 1, // Full-width border for other header cells
                      },
                    )}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {tableInstance.getRowModel().rows.map((row, index) => {
            const isLastRow =
              index === tableInstance.getRowModel().rows.length - 1;
            return (
              <tr key={row.id} className="h-32 !border-b-0">
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td
                    className={classNames(
                      "relative text-xs md:text-md", // Make the td relative for the pseudo-element
                      {
                        "px-10": cellIndex === 0, // Add padding only to the first cell. This is so that the data line up vertically with the header title
                        "rounded-b-none": isLastRow,
                        "rounded-bl-box": isLastRow && cellIndex === 0,
                        "rounded-br-box":
                          isLastRow &&
                          cellIndex === row.getVisibleCells().length - 1,
                      },
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {!isLastRow && (
                      <span
                        className={classNames(
                          // Most displays round half pixels to the nearest whole pixel. As a workaround, we can use a 1px border and scale it down so it appears as a 0.5px border.
                          "absolute bottom-0 left-0 right-0 scale-y-50 transform border-b border-neutral-content/20",
                          {
                            "left-6 right-0": cellIndex === 0, // Inset border only on the left side for the first cell
                            "left-0 right-6":
                              cellIndex === row.getVisibleCells().length - 1, // Inset border only on the right side for the last cell
                            "left-0 right-0":
                              cellIndex !== 0 &&
                              cellIndex !== row.getVisibleCells().length - 1, // Full width border for other cells
                          },
                        )}
                      />
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {tableInstance.getFilteredRowModel().rows.length > 10 ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
    </div>
  );
}

const columnHelper = createColumnHelper<Reward>();

function getColumns({
  account,
  appConfig,
}: {
  account: Address | undefined;
  appConfig: AppConfig;
}) {
  return [
    columnHelper.display({
      id: "asset",
      header: "Asset",
      size: 200,
      cell: ({ row }) => {
        return <AssetCell reward={row.original} account={account} />;
      },
    }),
    columnHelper.display({
      id: "pendingRewards",
      header: "Pending Earnings",
      size: 200,
      cell: ({ row }) => {
        const reward = row.original;
        const token = getToken({
          appConfig,
          chainId: reward.chainId,
          tokenAddress: reward.rewardTokenAddress,
        })!;
        return (
          <div className="flex flex-col">
            <span className="flex font-dmMono text-neutral-content">
              {`${formatBalance({
                balance: BigInt(reward.pendingAmount),
                decimals: token.decimals,
                places: token.places,
              })}`}
            </span>
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "claimable",
      header: "Claimable",
      size: 200,
      cell: ({ row }) => {
        return <ClaimableAmount account={account} reward={row.original} />;
      },
    }),
    columnHelper.display({
      id: "claim",
      size: 200,
      header: "Actions",
      cell: ({ row }) => {
        return <ClaimRewardsButton account={account} reward={row.original} />;
      },
    }),
  ];
}
function AssetCell({
  account,
  reward,
}: {
  reward: Reward;
  account: Address | undefined;
}) {
  const appConfig = useAppConfigForConnectedChain({ strict: false });
  const token = getToken({
    appConfig,
    chainId: reward.chainId,
    tokenAddress: reward.rewardTokenAddress,
  })!;
  const { balance } = useTokenBalance({
    account,
    tokenAddress: reward.rewardTokenAddress,
    decimals: token.decimals,
    tokenChainId: reward.chainId,
  });
  return (
    <Tooltip
      position="bottom"
      tooltip={`Wallet balance: ${formatBalance({
        balance: balance?.value || 0n,
        decimals: token.decimals,
        places: token.places,
      })} ${token.symbol}`}
    >
      <div className="flex items-center gap-2 font-inter">
        <img src={token.iconUrl} className="size-14" />
        <div className="flex flex-col gap-1">{token.name}</div>
      </div>
    </Tooltip>
  );
}

function ClaimRewardsButton({
  account,
  reward,
}: {
  account: Address | undefined;
  reward: Reward;
}): ReactElement {
  const connectedChainId = useChainId();
  const { claimed } = useClaimedRewards({
    rewardTokenAddress: reward.rewardTokenAddress,
    claimContractAddress: reward.claimContractAddress,
    account,
  });
  const appConfig = useAppConfigForConnectedChain({ strict: false });

  const { claim, pendingWalletSignatureStatus, isTransactionMined } =
    useClaimReward({
      account,
      reward,
    });

  if (connectedChainId !== reward.chainId) {
    return (
      <SwitchNetworksButton
        wide={false}
        targetChainId={reward.chainId}
        targetChainName={appConfig.chains[reward.chainId].name}
      />
    );
  }

  // If the reward is already claimed, or no merkle exists yet, disable the button
  if (BigInt(reward.claimableAmount) === claimed || !reward.merkleProof) {
    return (
      <button
        disabled
        className="daisy-btn daisy-btn-disabled daisy-btn-ghost rounded-full bg-gray-600 font-inter"
      >
        Claim Reward
      </button>
    );
  }

  // If the tx is pending a signature or is still being mined, disable the button
  if (
    pendingWalletSignatureStatus === "loading" ||
    (pendingWalletSignatureStatus === "success" && !isTransactionMined)
  ) {
    return (
      <button
        disabled
        className="daisy-btn daisy-btn-disabled daisy-btn-ghost rounded-full bg-gray-600 font-inter"
      >
        Claiming...
      </button>
    );
  }

  return (
    <button
      className={classNames(
        "daisy-btn daisy-btn-ghost rounded-full bg-gray-600 font-inter hover:bg-gray-700",
      )}
      onClick={claim}
    >
      Claim Reward
    </button>
  );
}

function ClaimableAmount({
  account,
  reward,
}: {
  account: Address | undefined;
  reward: Reward;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain({ strict: false });
  const token = getToken({
    appConfig,
    chainId: reward.chainId,
    tokenAddress: reward.rewardTokenAddress,
  })!;

  const { claimed, status } = useClaimedRewards({
    rewardTokenAddress: reward.rewardTokenAddress,
    claimContractAddress: reward.claimContractAddress,
    account,
  });

  return (
    <div className="flex flex-col">
      <span className="flex font-dmMono text-neutral-content">
        {status === "loading" ? (
          <Skeleton className="w-24" />
        ) : (
          `${formatBalance({
            balance: BigInt(reward.claimableAmount) - (claimed || 0n)!,
            decimals: token.decimals,
            places: token.places,
          })}`
        )}
      </span>
    </div>
  );
}
