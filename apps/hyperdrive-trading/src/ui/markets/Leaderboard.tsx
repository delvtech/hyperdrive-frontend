import { ReactElement } from "react";
import { Fade } from "react-awesome-reveal";
import LoadingState from "src/ui/base/components/LoadingState";

export function Leaderboard(): ReactElement | null {
  // TODO Implement the hook for fetching leaderboard data
  const { leaderboard, status } = { status: "loading", leaderboard: {} };

  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[1080px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h4 font-medium md:text-h4">
          Miles Leaderboard
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Showing the top miles earners across all pools
        </p>
      </div>
      <div className="flex w-full flex-wrap gap-8">
        {status === "loading" && !leaderboard ? (
          <div className="flex w-full justify-center">
            <LoadingState
              heading="Loading pools..."
              text="Calculating yield rates, pool data, and rewards..."
            />
          </div>
        ) : leaderboard ? (
          <Fade triggerOnce duration={500}>
            <div>leaderboard here</div>
          </Fade>
        ) : null}
      </div>
    </div>
  );
}

function useMilesLeaderboard() {
  return;
}
