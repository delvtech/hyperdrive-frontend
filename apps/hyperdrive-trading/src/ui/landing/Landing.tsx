import { ReactElement } from "react";
import { Hero } from "src/ui/landing/Hero/Hero";
import { PoolsList } from "src/ui/markets/PoolsList";

export function Landing(): ReactElement | null {
  return (
    <div className="mx-[2vw] flex flex-col gap-4 lg:w-[900px]">
      <Hero />
      <PoolsList />
    </div>
  );
}
