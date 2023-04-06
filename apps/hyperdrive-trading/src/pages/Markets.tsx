import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import { MarketsTable } from "src/ui/markets/components/MarketsTable";

export function Markets(): ReactElement {
  return (
    <div className="mx-auto flex flex-col gap-y-20 px-[4vw] py-[5vh] w-full max-w-7xl">
      <div className="space-y-8">
        <div>
          <h2 className="font-bold font-akira text-hyper-blue-100 text-h3 sm:text-h2 leading-h3 sm:leading-h2">
            Markets
          </h2>
          <h5 className="max-w-2xl font-medium text-hyper-blue-200 font-dm-sans text-h6 sm:text-h5 leading-h6 sm:leading-h5">
            Advanced yield markets featuring no preset expiration dates, no
            fragmented liquidity, and no LP rollovers — aka everlasting
            liquidity.
          </h5>
        </div>

        <button className="flex items-center px-4 py-2 font-bold rounded gap-x-1 text-base-100 font-dm-sans bg-gradient-to-r from-hyper-pink to-hyper-green">
          <ArrowTopRightOnSquareIcon className="w-4" />
          <p>Learn more</p>
        </button>
      </div>

      <MarketsTable />
    </div>
  );
}
