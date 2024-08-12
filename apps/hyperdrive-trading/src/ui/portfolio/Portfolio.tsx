import { ReactElement } from "react";
import { usePortfolioLongsData } from "./usePortfolioLongsData";

export function Portfolio(): ReactElement {
  const { data } = usePortfolioLongsData();
  // console.log(data, "data");
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 py-8">
      <h1>Hello Portfolio</h1>
    </div>
  );
}
