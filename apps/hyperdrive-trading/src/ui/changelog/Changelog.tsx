import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { makeAddressUrl } from "src/blockexplorer/makeAddressUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";

export function Changelog(): ReactElement {
  const { tab = "pools", version } = useSearch({
    from: "/changelog",
  });
  const navigate = useNavigate();
  const appConfig = useAppConfig();

  if (!appConfig?.hyperdrives.length) {
    return <div>No contracts found.</div>;
  }

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Header */}
      <div className="mb-16 max-w-3xl text-center lg:text-left">
        <h1 className="gradient-text mb-4 text-h2 font-bold">Changelog</h1>
        <p className="text-neutral-content">
          Find the latest addresses and versions of the Hyperdrive smart
          contracts.
        </p>
      </div>

      {/* Changelog */}
      <Tabs
        activeTabId={tab}
        tabs={[
          {
            content: <PoolsTable />,
            id: "pools",
            label: "Pools",
            onClick: () => {
              navigate({
                search: () => ({ tab: "pools", version }),
              });
            },
          },
          {
            content: (
              <>
                <h1>Factories</h1>
              </>
            ),
            id: "factories",
            label: "Factories",
            onClick: () => {
              navigate({
                search: () => ({ tab: "factories", version }),
              });
            },
          },
        ]}
      />
    </div>
  );
}

type Pool = {
  address: Address;
  name: string;
  version: string;
  isPaused: boolean;
  status: "active" | "sunset";
  factoryAddress: Address;
  // TODO: What is this?
  dcAddress: Address;
  baseToken: Address;
  vaultToken: Address;
};

const poolsColHelper = createColumnHelper<Pool>();

const poolsColumns = [
  poolsColHelper.accessor((row) => row.address, {
    header: "Pool Address",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.name, {
    header: "Name",
  }),
  poolsColHelper.accessor((row) => row.version, {
    header: "Version",
  }),
  poolsColHelper.accessor((row) => row.isPaused, {
    header: "Paused",
  }),
  poolsColHelper.accessor((row) => row.status, {
    header: "Status",
  }),
  poolsColHelper.accessor((row) => row.factoryAddress, {
    header: "Factory Address",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.dcAddress, {
    header: "DC Address",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.baseToken, {
    header: "Base Token",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.vaultToken, {
    header: "Vault Token",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
];

function PoolsTable(): ReactElement {
  const { registryAddress } = useAppConfig();
  const { data = [], isFetching } = usePoolsData(registryAddress);
  const tableInstance = useReactTable({
    columns: poolsColumns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="daisy-table daisy-table-zebra daisy-table-lg h-fit">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky top-0 z-10 h-10 rounded-box text-sm"
                  key={header.id}
                >
                  <div
                    className="font-normal text-neutral-content"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className={classNames({
            "relative h-52": !tableInstance.getFilteredRowModel().rows.length,
          })}
        >
          {isFetching ? (
            <TableSkeleton numColumns={poolsColumns.length} numRows={5} />
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
    </div>
  );
}

function AddressCell({ address }: { address: Address }) {
  const chainId = useChainId() as SupportedChainId;
  return (
    <a
      href={makeAddressUrl(address, chainId)}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {formatAddress(address)}
    </a>
  );
}

function usePoolsData(registryAddress: Address): UseQueryResult<Pool[], any> {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const queryEnabled = !!publicClient;

  return useQuery({
    queryKey: ["changelogPools", registryAddress, chainId],
    enabled: queryEnabled,
    placeholderData: [],
    queryFn: queryEnabled
      ? async () => {
          const registry = new ReadRegistry({
            address: registryAddress,
            publicClient,
          });

          const pools = await registry.getInstances();
          const metas = await registry.getInstanceInfos(
            pools.map((pool) => pool.address),
          );

          return Promise.all(
            pools.map(async (pool, i): Promise<Pool> => {
              const meta = metas[i];
              const baseToken = await pool.getBaseToken();
              const vaultToken = await pool.getSharesToken();
              const marketState = await pool.getMarketState();
              return {
                address: pool.address,
                name: meta.name,
                version: meta.version,
                baseToken: baseToken.address,
                vaultToken: vaultToken.address,
                dcAddress: "0xTODO",
                factoryAddress: meta.factory.address,
                isPaused: marketState.isPaused,
                status: "active",
              };
            }),
          );
        }
      : undefined,
  });
}
