import { AppConfig, makeAddressUrl } from "@delvtech/hyperdrive-appconfig";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Addreth, ThemeDeclaration } from "addreth";
import classNames from "classnames";
import { ReactElement } from "react";
import { fetchMilesLeaderboard, LeaderboardEntry } from "src/rewards/merkl";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { HyperVueMilesIconUrl } from "src/ui/rewards/HyperVueMilesIconUrl";
import { gnosis } from "viem/chains";

export function Leaderboard(): ReactElement | null {
  const { leaderboard, status } = useMilesLeaderboard();
  const appConfig = useAppConfigForConnectedChain();

  const columns = getColumns(appConfig);
  const tableInstance = useReactTable({
    columns,
    data: leaderboard || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "balance",
          desc: true,
        },
      ],
    },
  });

  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[1080px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h4 font-medium md:text-h4">
          Miles Leaderboard
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Live rankings of the top Miles earners on Hyperdrive. Add liquidity to
          any Hyperdrive pool to earn Miles!
        </p>
      </div>
      <div className="w-full overflow-x-auto">
        {status === "loading" && !leaderboard?.length ? (
          <div className="px-10 py-20">
            <LoadingState
              text="Loading miles across all users and pools..."
              heading="Loading leaderboard..."
            />
          </div>
        ) : (
          <table className="daisy-table daisy-table-zebra daisy-table-lg h-fit">
            <thead>
              {tableInstance.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const sortDirection = header.column.getIsSorted();
                    return (
                      <th
                        className={classNames(
                          "sticky top-0 z-10 h-10 rounded-box text-sm",
                          {
                            "min-w-52": header.id === "name",
                          },
                        )}
                        key={header.id}
                      >
                        <div
                          className={classNames(
                            "flex items-center gap-1 font-normal text-neutral-content",
                            {
                              "flex cursor-pointer select-none items-center gap-2":
                                header.column.getCanSort(),
                            },
                          )}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {sortDirection === "asc" && (
                            <ChevronUpIcon height={15} />
                          )}
                          {sortDirection === "desc" && (
                            <ChevronDownIcon height={15} />
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody
              className={classNames({
                "relative h-52":
                  !tableInstance.getFilteredRowModel().rows.length,
              })}
            >
              {status === "loading" ? (
                <TableSkeleton numColumns={columns.length} numRows={5} />
              ) : (
                tableInstance.getRowModel().rows.map((row) => {
                  return (
                    <tr key={row.id} className="h-20">
                      <>
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </td>
                          );
                        })}
                      </>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function useMilesLeaderboard() {
  const { data: leaderboard, status } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      return fetchMilesLeaderboard();
    },
  });
  return { leaderboard, status };
}

const columnHelper = createColumnHelper<LeaderboardEntry>();

const addrethTheme: ThemeDeclaration = {
  base: "dark",
  badgeBackground: "transparent",
  fontSize: 16,
};
function getColumns(appConfig: AppConfig) {
  return [
    columnHelper.accessor((row) => row.rank, {
      id: "rank",
      header: "Rank",
      cell: ({ getValue }) => {
        const rank = getValue();
        return `#${rank}`;
      },
    }),
    columnHelper.accessor((row) => row.address, {
      header: "Address",
      cell: ({ getValue }) => {
        const address = getValue();
        return (
          <Addreth
            address={address}
            ens={false /* no ENS support on Gnosischain */}
            theme={addrethTheme}
            explorer={(a) => ({
              accountUrl: makeAddressUrl(a, appConfig.chains[gnosis.id]),
              name: "Gnosisscan",
            })}
          />
        );
      },
    }),
    columnHelper.accessor((row) => row.balance, {
      header: "Miles Earned",
      id: "balance",
      cell: ({ getValue }) => {
        let formatted = formatBalance({
          balance: getValue(),
          decimals: 18,
          places: 2,
        });
        if (formatted === "0.00") {
          formatted = "<0.01";
        }
        return (
          <div className="flex items-center gap-1.5">
            <img src={HyperVueMilesIconUrl} className="size-6 rounded-full" />{" "}
            {formatted}
          </div>
        );
      },
    }),
  ];
}
