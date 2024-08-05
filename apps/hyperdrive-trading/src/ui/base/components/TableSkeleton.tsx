import type { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";

export function TableSkeleton({
  numColumns,
  numRows = 1,
}: {
  numColumns: number;
  numRows?: number;
}): ReactElement {
  return (
    <>
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: numColumns }).map((_, colIndex) => (
            <td key={colIndex}>
              <Skeleton />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
