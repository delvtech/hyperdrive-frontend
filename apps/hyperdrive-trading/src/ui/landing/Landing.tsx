import { ReactElement } from "react";
import { Hero } from "src/ui/landing/Hero/Hero";
import { PoolsList } from "src/ui/markets/PoolsList";

export function Landing(): ReactElement | null {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-[900px]">
      <Hero />
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col gap-4">
          <PoolsList />
        </div>
      </div>
    </div>
  );
}
