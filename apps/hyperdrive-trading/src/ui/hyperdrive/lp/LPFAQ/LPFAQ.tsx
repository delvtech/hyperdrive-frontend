export const LPFaqEntries = [
  {
    question: "What are the benefits of providing liquidity?",
    answer: (
      <div>
        <span>
          Liquidity providers (LPs) take potential revenue from 3 different
          sources: <br /> - Trading fees from longs and shorts being opened and
          closed by traders. <br /> - Variable rate on their idle capital being
          deployed to the underlying yield source. <br /> - Profit (or loss)
          resulting from taking the other side of traders’ positions.
          <br />
          Furthermore, LP capital isn&rsquo;t tied to a specific maturity date,
          so these benefits remain until the funds are withdrawn by the LP.{" "}
          <br /> Learn more about{" "}
          <a
            className="underline"
            href="https://delv-tech.notion.site/LP-Profitability-0acf6928b88c4a33875221aa15ca62d2"
          >
            LP Profitability
          </a>
          .
        </span>
      </div>
    ),
  },
  {
    question: "How do LP positions work?",
    answer: (
      <div>
        <span>
          You open an LP position by providing base asset to the AMM. This
          increases the AMM&rsquo;s capacity for longs and shorts. LP capital is
          then used to back long and short positions opened by traders.
          <br />
          <br />
          LPs can withdraw their capital at any time, but if part of it is
          currently backing open positions, the AMM will temporarily keep that
          part and give Withdrawal Shares to the LP until there is enough idle
          liquidity available to replace that capital. <br />
          <br />
          When long or short positions are closed, the liquidity used to back
          them is freed up and used to buy back Withdrawal Shares, at which
          point LPs can complete their pending withdrawal process. <br />
          <br />
          Learn more in the{" "}
          <a
            href="https://delv-tech.notion.site/LP-Shares-9d3d21330909494d83608eddf7d518c5"
            className="underline"
          >
            LP Shares
          </a>{" "}
          section of our docs.
        </span>
      </div>
    ),
  },
  {
    question: "Do I have to hold until maturity?",
    answer: (
      <span>
        By opening a Long and holding it to maturity.
        <br />
        <br />
        Opening a long position in Hyperdrive implies purchasing hy[Token] at a
        discount. hy[Token] is redeemable for its full face value at maturity.
        The market price you pay and the hy[Token]&rsquo;s value at maturity are
        known upfront, which results in a fixed rate of return. <br />
        <br />
        Opening longs has an immediate impact on the market. hy[Token]&rsquo;s
        market price increases, which means the fixed rate decreases.
        Conversely, closing longs has the immediate impact of decreasing the
        market price and increasing the fixed rate. <br />
        <br />
        Opening a long position in Hyperdrive implies purchasing hy[Token] at a
        discount. hy[Token] is redeemable for its full face value at maturity.
        The market price you pay and the hy[Token]&rsquo;s value at maturity are
        known upfront, which results in a fixed rate of return. <br />
        <br />
        Opening longs has an immediate impact on the market. hy[Token]&rsquo;s
        market price increases, which means the fixed rate decreases.
        Conversely, closing longs has the immediate impact of decreasing the
        market price and increasing the fixed rate. <br />
        <br />
        Users can also take speculative long positions. Read our docs to learn
        more about{" "}
        <a
          className="underline"
          href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
        >
          Hyperdrive&rsquo;s Position Types
        </a>
        .
      </span>
    ),
  },
];
