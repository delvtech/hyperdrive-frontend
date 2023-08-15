export interface PortfolioActions {
  getActiveLongs: () => void;
  getClosedLongs: () => void;
  getActiveShorts: () => void;
  getClosedShorts: () => void;

  getActiveWithdrawalShares: () => void;
  getClosedWithdrawalShares: () => void;

  getActiveLpShares: () => void;

  getClosedLpShares: () => void;
}
