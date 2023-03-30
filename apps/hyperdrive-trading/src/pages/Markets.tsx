import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import { MarketsTable } from "src/ui/markets/components/MarketsTable";

export function Markets(): ReactElement {
  return (
    <div className="mx-auto flex flex-col gap-y-16 px-[4vw] py-[5vh] w-full max-w-7xl">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold sm:text-6xl font-akira text-hyper-blue-100">
            Markets
          </h2>
          <p className="text-xl font-medium sm:text-2xl text-hyper-blue-200 font-dm-sans">
            Discover fixed and variable yield markets
          </p>
        </div>

        <button className="flex items-center px-4 py-2 text-sm font-bold rounded sm:text-md gap-x-1 text-base-100 font-dm-sans bg-gradient-to-r from-hyper-pink to-hyper-green">
          <ArrowTopRightOnSquareIcon className="w-4" />
          Learn more
        </button>
      </div>

      <MarketsTable />
    </div>
  );
}
