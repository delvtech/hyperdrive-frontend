import { createFileRoute } from "@tanstack/react-router";
import { Page } from "src/ui/app/Page";
import { Leaderboard } from "src/ui/markets/Leaderboard";
import { POINTS_LEADERBOARD_ROUTE } from "src/ui/rewards/routes";
export const Route = createFileRoute(POINTS_LEADERBOARD_ROUTE)({
  component: () => (
    <Page>
      <Leaderboard />
    </Page>
  ),
});
