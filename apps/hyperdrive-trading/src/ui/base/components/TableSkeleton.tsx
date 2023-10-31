import Skeleton from "react-loading-skeleton";

export function TableSkeleton({
  numColumns,
}: {
  numColumns: number;
}): JSX.Element {
  return (
    <tr>
      {Array.from({ length: numColumns }).map((_, i) => (
        <td key={i}>
          <Skeleton />
        </td>
      ))}
    </tr>
  );
}
