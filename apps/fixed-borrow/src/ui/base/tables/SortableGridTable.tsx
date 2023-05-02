import classNames from "classnames";
import { ReactElement, ReactNode, useState } from "react";
import { To } from "react-router-dom";
import { SortDirectionStatus } from "src/ui/base/sorting/SortDirectionStatus";
import { SortDirection } from "src/ui/base/sorting/types";
import { GridTableHeader } from "src/ui/base/tables/GridTableHeader";
import { GridTableRow } from "src/ui/base/tables/GridTableRow";
import { GridTableRowLink } from "src/ui/base/tables/GridTableRowLink";
import { ExpandableGridTableRow } from "src/ui/base/tables/GridTableRowWithExpand";

interface SortableGridTableProps<K extends string> {
  cols: Column<K>[];
  rows: Row[];
  onSort?: (sortOptions: SortOptions<K>) => void;
  emptyTableElement?: ReactNode;
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
                  className="flex items-center gap-1 text-left hover:bg-inputBg"
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

      {rows.length
        ? rows.map((row, i) => {
            if (isRowWithHref(row)) {
              return (
                <GridTableRowLink
                  key={i}
                  href={row.href}
                  className={classNames(bodyRowClassName, row.className)}
                >
                  {row.cells.map((cell, i) => (
                    <span key={i}>{cell}</span>
                  ))}
                </GridTableRowLink>
              );
            }

            if (isRowWithExpand(row)) {
              return (
                <ExpandableGridTableRow
                  key={i}
                  className={classNames(bodyRowClassName, row.className)}
                  detailsElement={row.detailsElement}
                >
                  {row.cells.map((cell, i) => (
                    <span className="h-full" key={i}>
                      {cell}
                    </span>
                  ))}
                </ExpandableGridTableRow>
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
          })
        : emptyTableElement}
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

interface BaseRow {
  cells: ReactNode[];
  className?: string;
}

interface RowWithHref extends BaseRow {
  href: To;
}

interface RowWithExpand extends BaseRow {
  detailsElement?: ReactNode;
}
export type Row = RowWithHref | RowWithExpand | BaseRow;

function isRowWithHref(row: Row): row is RowWithHref {
  return (row as RowWithHref).href !== undefined;
}

function isRowWithExpand(row: Row): row is RowWithExpand {
  return (row as RowWithExpand).detailsElement !== undefined;
}

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
    <div className="bg-base-200 rounded-b-lg p-10 text-center">
      <p className="text-lg">Nothing to show.</p>
    </div>
  );
}
