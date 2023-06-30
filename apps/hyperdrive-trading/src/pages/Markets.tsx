import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import { MarketsTableLarge } from "src/ui/markets/MarketsTableLarge";

export function Markets(): ReactElement {
  return (
    <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-y-20 px-[3vw] py-[5vh]">
      <div className="space-y-8">
        <div>
          <h2 className="font-lato text-h3 font-bold leading-h3 sm:text-h2 sm:leading-h2">
            Markets
          </h2>
          <h5 className="max-w-2xl text-h6 font-medium leading-h6 text-neutral-content sm:text-h5 sm:leading-h5">
            Advanced yield markets featuring no preset expiration dates, no
            fragmented liquidity, and no LP rollovers — aka everlasting
            liquidity.
          </h5>
        </div>

        <button className="flex items-center gap-x-1 rounded bg-gradient-to-r from-primary via-[#afd5ff] to-success px-4 py-2 font-bold text-base-100">
          <ArrowTopRightOnSquareIcon className="w-4" />
          <p>Learn more</p>
        </button>
      </div>

      <MarketsTableLarge />
    </div>
  );
}
