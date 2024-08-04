import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Table } from "@tanstack/react-table";

export function Pagination<T>({
  tableInstance,
}: {
  tableInstance: Table<T>;
}): JSX.Element {
  return (
    <div className="flex h-24 items-center justify-center gap-2">
      <button
        className="daisy-btn daisy-btn-circle"
        onClick={() => tableInstance.previousPage()}
        disabled={!tableInstance.getCanPreviousPage()}
      >
        <ArrowLeftIcon className="h-5" />
      </button>
      <span className="flex items-center gap-1">
        <p>Page</p>
        <p>
          {tableInstance.getState().pagination.pageIndex + 1} of{" "}
          {tableInstance.getPageCount()}
        </p>
      </span>
      <button
        className="daisy-btn daisy-btn-circle"
        onClick={() => tableInstance.nextPage()}
        disabled={!tableInstance.getCanNextPage()}
      >
        <ArrowRightIcon className="h-5" />
      </button>
    </div>
  );
}
