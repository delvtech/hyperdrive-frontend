import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { useRewardsData } from "src/ui/portfolio/rewards/useRewardsData";
import { useAccount } from "wagmi";

export function RewardsContainer(): ReactElement {
  const { address: account } = useAccount();
  const { rewards, rewardsStatus } = useRewardsData({ account });

  if (!account) {
    return <NoWalletConnected />;
  }

  if (rewardsStatus === "loading") {
    return (
      <PositionContainer>
        <LoadingState
          heading="Loading your Rewards..."
          text="Searching for Rewards, calculating current value..."
        />
      </PositionContainer>
    );
  }

  if (rewardsStatus === "error") {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="Error loading your Rewards"
          text="Please refresh the page and try again."
        />
      </PositionContainer>
    );
  }

  const hasClaimableRewards = rewards?.some((reward) => reward);

  if (!hasClaimableRewards) {
    return (
      <PositionContainer className="my-28">
        <NonIdealState
          heading="No Rewards"
          text={
            <p className="max-w-xl">
              Open a position in Hyperdrive to begin earning rewards.
            </p>
          }
          action={
            <Link className="daisy-btn daisy-btn-primary rounded-full" to="/">
              View Pools
            </Link>
          }
        />
      </PositionContainer>
    );
  }

  return <PositionContainer className="mt-10">TODO</PositionContainer>;
}
