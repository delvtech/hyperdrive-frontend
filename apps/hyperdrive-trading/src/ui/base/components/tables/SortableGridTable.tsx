import classNames from "classnames";
import { ReactElement, ReactNode, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { GridTableHeader } from "src/ui/base/components/tables/GridTableHeader";
import { GridTableRow } from "src/ui/base/components/tables/GridTableRow";
import { GridTableRowLink } from "src/ui/base/components/tables/GridTableRowLink";
import { SortDirectionStatus } from "src/ui/base/sorting/SortDirectionStatus";
import { SortDirection } from "src/ui/base/sorting/types";
import { UrlObject } from "url";

interface SortableGridTableProps<K extends string> {
  cols: Column<K>[];
  rows: Row[];
  onSort?: (sortOptions: SortOptions<K>) => void;
  emptyTableElement?: ReactNode;
  showSkeleton?: boolean;
  headingRowClassName?: string;
  bodyRowClassName?: string;
  defaultSortOptions?: SortOptions<K>;
}

/**
 * A div with `display: grid` pretending to be a table with sortable columns :).
 * To customize column widths use the `grid-cols-[<col-widths>]` class for
 * `headingRowClassName` and `bodyRowClassName`.
 * @see https://tailwindcss.com/docs/grid-template-columns#using-custom-values
 *
 * @example
 * ```tsx
 * // A table with a first column that takes of half the space, then 2 columns
 * // that take up a quarter of the space.
 * <SortableGridTable
 *   headingRowClassName="grid-cols-[2fr_1fr_1fr]"
 *   bodyRowClassName="group grid-cols-[2fr_1fr_1fr]"
 *   cols={[
 *     "Voter",
 *     {
 *       cell: "Voting Power",
 *       sortKey: "votingPower"
 *     },
 *     "Ballot"
 *    ]}
 *   rows={[
 *     ["Voter 1", "100", "YES"],
 *     ["Voter 2", "200", "YES"],
 *     ["Voter 3", "150", "NO"],
 *   ]}
 * />
 * ```
 */
export function SortableGridTable<K extends string>({
  cols,
  rows,
  onSort,
  headingRowClassName,
  emptyTableElement = <DefaultEmptyTableElement />,
  showSkeleton,
  bodyRowClassName,
  defaultSortOptions,
}: SortableGridTableProps<K>): ReactElement {
  const [sortKey, setSortKey] = useState<K | undefined>(
    defaultSortOptions?.key,
  );
  const [sortDirection, setSortDirection] = useState<SortDirection | undefined>(
    defaultSortOptions?.direction,
  );

  function handleSortChange(key: K) {
    let newDirection: SortDirection;
    let newKey: K | undefined = key;

    if (key === sortKey) {
      newDirection = nextSortDirection(sortDirection);
      if (!newDirection) {
        newKey = undefined;
      }
    } else {
      newDirection = nextSortDirection();
    }
    setSortKey(newKey);
    setSortDirection(newDirection);

    onSort?.({
      key: newKey,
      direction: newDirection,
    });
  }

  return (
    <>
      <GridTableHeader className={headingRowClassName}>
        {cols.map((col, i) => {
          // is column options object
          if (col && typeof col === "object" && "cell" in col) {
            if (col.sortKey) {
              return (
                <button
                  key={i}
                  className="flex items-center gap-1 text-left hover:bg-base-300"
                  onClick={() => handleSortChange(col.sortKey as K)}
                >
                  {col.cell}
                  {sortKey === col.sortKey && (
                    <SortDirectionStatus direction={sortDirection} />
                  )}
                </button>
              );
            }

            return (
              <span key={i} className={col.className}>
                {col.cell}
              </span>
            );
          }

          return <span key={i}>{col}</span>;
        })}
      </GridTableHeader>

      {showSkeleton ? (
        <Skeleton />
      ) : rows.length ? (
        rows.map((row, i) => {
          if (!row) {
            return;
          }
          // is row options object
          if ("cells" in row) {
            if (row.href) {
              return (
                <GridTableRowLink
                  key={i}
                  href={row.href as string}
                  className={classNames(bodyRowClassName, row.className)}
                >
                  {row.cells.map((cell, i) => (
                    <span key={i}>{cell}</span>
                  ))}
                </GridTableRowLink>
              );
            }

            return (
              <GridTableRow
                key={i}
                className={classNames(bodyRowClassName, row.className)}
              >
                {row.cells}
              </GridTableRow>
            );
          }

          return (
            <GridTableRow key={i} className={bodyRowClassName}>
              {row.map((cell, i) => (
                <span key={i}>{cell}</span>
              ))}
            </GridTableRow>
          );
        })
      ) : (
        emptyTableElement
      )}
    </>
  );
}

export type Column<K extends string> =
  | ReactNode
  | {
      cell: ReactNode;
      className?: string;
      sortKey?: K;
    };

export type Row =
  | ReactNode[]
  | {
      cells: ReactNode[];
      className?: string;
      href?: string | UrlObject;
    }
  | undefined;

export interface SortOptions<K extends string> {
  key?: K;
  direction?: SortDirection;
}

// simple state machine for sort state transitions
function nextSortDirection(
  currentDirection?: SortDirection,
  defaultDirection: SortDirection = "DESC",
): SortDirection {
  const secondDirection = defaultDirection === "DESC" ? "ASC" : "DESC";
  switch (currentDirection) {
    case defaultDirection:
      return secondDirection;
    case secondDirection:
      return undefined;
    default:
      return defaultDirection;
  }
}

function DefaultEmptyTableElement() {
  return (
    <div className="rounded-b-lg bg-base-300 p-10 text-center">
      <p className=" text-lg text-base-content">Nothing to show.</p>
    </div>
  );
}

interface CellWithTooltipProps {
  content: ReactNode;
  tooltip: string;
}

export function CellWithTooltip({
  content,
  tooltip,
}: CellWithTooltipProps): ReactElement {
  return (
    <span className="daisy-tooltip" data-tip={tooltip}>
      {content}
    </span>
  );
}
