import { ReactElement } from "react";
import { Hero } from "src/ui/landing/Hero/Hero";
import { PoolsList } from "src/ui/markets/PoolsList";

export function Landing(): ReactElement | null {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-[900px]">
      <Hero />
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col gap-4">
          {/* TODO: Implement filter buttons
             <div className="flex items-center gap-3">
              <button className="daisy-btn daisy-btn-sm gap-1.5 rounded-full">
                All Terms
                <ChevronDownIcon className="ml-1 size-4 text-neutral-content" />
              </button>
              <button className="daisy-btn daisy-btn-sm gap-1.5 rounded-full">
                All Assets
                <ChevronDownIcon className="ml-1 size-4 text-neutral-content" />
              </button>
              <button className="daisy-btn daisy-btn-sm gap-1.5 rounded-full">
                All Chains
                <ChevronDownIcon className="ml-1 size-4 text-neutral-content" />
              </button>
            </div> */}
          <PoolsList />
        </div>
      </div>
    </div>
  );
}
