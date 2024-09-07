export const faqData2 = [
  {
    question: "How can I get fixed rates?",
    answer: (
      <>
        <p>Open a Long and hold it to maturity.</p>
        <p>
          When you open a Long in Hyperdrive, you&apos;re buying tokens at a
          discount. These tokens are redeemable at maturity for their full
          value, giving you a fixed return.
        </p>
        <p>
          Opening Longs has an immediate impact on the market. If more people
          open Longs, the fixed rate goes down. If they close Longs, the fixed
          rate goes up.
        </p>
        <p>
          Users can also take speculative Long positions where they bet on the
          short-term movement of rates. Read our docs to learn more about{" "}
          <a
            className="daisy-link hover:text-white"
            rel="noreferrer"
            target="_blank"
            href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/longs-fixed-rates"
          >
            Hyperdrive Longs
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "How can I get variable rates?",
    answer: (
      <>
        <p>
          Users can get multiplied exposure to variable rates by opening a
          Short.
        </p>
        <p>
          Simply put, a Short is the opposite of a Long. When opening a Short,
          the trader pays the fixed rate to the pool (plus fees paid to LPs) and
          gets the pool’s capital (including what the trader paid) to generate
          yield for them.
        </p>
        <p>
          Opening a Short causes the market price of hy[Token] to decrease
          (which causes the fixed rate to increase), while closing a Short has
          the inverse effect.
        </p>
        <p>
          Users can take speculative Short positions or use Shorts for hedging
          other investments. Read our docs to learn more about Hyperdrive&apos;s{" "}
          <a
            className="daisy-link hover:text-white"
            rel="noreferrer"
            target="_blank"
            href="https://docs-delv.gitbook.io/hyperdrive/hyperdrive-overview/position-types"
          >
            Position Types
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "What are the benefits of supplying liquidity?",
    answer: (
      <>
        <span>
          Liquidity providers (LPs) benefit from 3 potential revenue sources:
          <ol className="list-decimal space-y-2 px-8 py-4">
            <li>
              {" "}
              Trading fees from longs and shorts being opened and closed by
              traders
            </li>{" "}
            <li>
              Variable rate on their idle capital being deployed to the
              underlying yield source{" "}
            </li>
            <li>
              Profit (or loss) resulting from automated counter-trades to
              traders&apos; Long/Short positions
            </li>
          </ol>
          <br />
          <p>
            LP capital isn&apos;t tied to a specific maturity date, so these
            benefits remain until the funds are withdrawn by the LP.
          </p>
          <br /> Learn more about{" "}
          <a
            className="daisy-link hover:text-white"
            rel="noreferrer"
            target="_blank"
            href="https://docs-delv.gitbook.io/hyperdrive/hyperdrive-overview/position-types/liquidity-provider/lp-profit-loss"
          >
            LP Profit/Loss
          </a>{" "}
          in the docs.
        </span>
      </>
    ),
  },
  {
    question: "How do LP positions work?",
    answer: (
      <>
        <p>
          Users open an LP position by providing a market’s specific base asset
          to the AMM. This increases the AMM&apos;s capacity for Longs and
          Shorts. LP capital is then used to back Long and Short positions
          opened by traders.
        </p>
        <p>
          LP liquidity is used to back open positions, but not all of it is
          being utilized at all times. The portion that is not currently backing
          open positions is known as “idle liquidity”. If LPs attempt to
          withdraw more than the system&apos;s current idle liquidity, the
          portion of their liquidity that exceeds the system&apos;s idle
          liquidity may be queued for delayed withdrawal. This liquidity will
          continue to earn trading fees until enough capital is freed up in the
          market (as traders close positions or they reach maturity) for the LP
          to complete their withdrawal process.
        </p>
        <br />
        <p>
          Learn more about{" "}
          <a
            className="daisy-link hover:text-white"
            rel="noreferrer"
            target="_blank"
            href="https://docs-delv.gitbook.io/hyperdrive/hyperdrive-overview/position-types/liquidity-provider/value-of-the-lp-position"
          >
            the value of the LP position
          </a>{" "}
          in the docs.
        </p>
      </>
    ),
  },
  {
    key: "faq5",
    question: "Can I close my Long / Short / LP position before maturity?",
    answer: (
      <>
        <p>
          Yes, Longs and Shorts can be closed at any time (except in rare cases
          where closing could be delayed). However, closing these positions
          before maturity entails selling them to the pool at the current market
          price. In other words, positions that are closed early may not get the
          initially expected rate of return (and could result in loss of yield
          and principal), since their exit value depends on market activity.
        </p>

        <p>
          Liquidity Provider (LP) positions don&apos;t have a maturity date, so
          LP funds can be withdrawn whenever there is enough idle liquidity in
          the system (i.e., liquidity that is not currently backing open
          Long/Short positions); if there isn&apos;t enough idle liquidity, the
          system will initiate a delayed withdrawal process. The LP&apos;s
          capital continues to receive the same benefits until enough liquidity
          is freed up for withdrawal.
        </p>
        <p>
          Learn more about the different{" "}
          <a
            className="daisy-link hover:text-white"
            rel="noreferrer"
            target="_blank"
            href="https://docs-delv.gitbook.io/hyperdrive/hyperdrive-overview/position-types"
          >
            Position Types
          </a>{" "}
          in the docs.
        </p>
      </>
    ),
  },
  {
    question: "Are there any trading fees?",
    answer: (
      <div className="space-y-4">
        <p>
          Users pay two types of fees when opening or closing their Long or
          Short positions:{" "}
        </p>
        <ol className="list-decimal space-y-2 px-8 py-2">
          <li>
            A Curve Fee that is dynamic and proportional to the fixed rate.
          </li>
          <li>A Flat Fee that is fixed proportional to the position size. </li>
        </ol>
        <p>
          Curve Fees are proportional to the fixed rate and the time left until
          the position’s maturity date, and are applied when the position is
          opened or closed (to the non-matured portion). Flat Fees are a fixed
          percentage of the matured position size.
        </p>
        <p>
          LPs earn Curve Fees and Flat Fees from user trades. Depending upon the
          deployment, part of these fees may go to places other than the LPs,
          such as the treasury contract of the protocol or to some other
          recipient.
        </p>
        <p>
          Learn more in the{" "}
          <a
            className="daisy-link hover:text-white"
            rel="noreferrer"
            target="_blank"
            href="https://docs-delv.gitbook.io/hyperdrive/trading/fees"
          >
            Fees
          </a>{" "}
          section of our docs.
        </p>
      </div>
    ),
  },
];
