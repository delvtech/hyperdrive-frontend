import { Link } from "@tanstack/react-router";
import groupBy from "lodash.groupby";
import { ReactElement } from "react";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { NoWalletConnected } from "src/ui/portfolio/NoWalletConnected";
import { PortfolioTableHeading } from "src/ui/portfolio/PortfolioTableHeading";
import { PositionContainer } from "src/ui/portfolio/PositionContainer";
import { RewardsTableDesktop } from "src/ui/portfolio/rewards/RewardsTableDesktop";
import { useUnclaimedRewards } from "src/ui/portfolio/rewards/useUnclaimedRewards";
import { Address } from "viem";

export function RewardsContainer({
  account,
}: {
  account: Address | undefined;
}): ReactElement {
  const { rewards, rewardsStatus } = useUnclaimedRewards({ account });
  const appConfig = useAppConfigForConnectedChain({ strict: false });
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

  const hasClaimableRewards = !rewards || rewards?.some((reward) => reward);

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

  const rewardsByChain = rewards
    ? groupBy(rewards, (reward) => reward.chainId)
    : [];

  return (
    <PositionContainer className="mt-10">
      {Object.entries(rewardsByChain).map(([chainId, rewards]) => {
        const chainInfo = appConfig.chains[+chainId];
        return (
          <div className="flex flex-col gap-6" key={chainId}>
            <PortfolioTableHeading
              leftElement={
                <div className="flex items-center gap-3">
                  <div className="daisy-avatar w-10">
                    <img src={chainInfo.iconUrl} className="rounded-full" />
                  </div>
                  {chainInfo.name} Rewards
                </div>
              }
              rightElement={null}
            />
            <RewardsTableDesktop account={account} rewards={rewards} />
          </div>
        );
      })}
    </PositionContainer>
  );
}
