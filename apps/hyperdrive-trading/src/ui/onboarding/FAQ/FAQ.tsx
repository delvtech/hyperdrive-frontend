import { ReactElement } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";

export function FAQ(): ReactElement {
  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="flex w-full items-center justify-between border-base-100">
        <span className="pb-2 text-h5 font-bold">FAQ</span>
      </div>
      <Disclosure
        title={<span className="text-h6">How can I get fixed rates?</span>}
        description={
          <span>
            By opening a Long and holding it to maturity. Opening a long
            position in Hyperdrive implies purchasing Longs at a discount. These
            tokens are redeemable for their full face value at maturity. The
            market price you pay and the Long&rsquo;s value at maturity are
            known upfront, which results in a fixed rate of return. Opening
            Longs has an immediate impact on the market. The Longs&rsquo; market
            price increases, which means the fixed rate decreases. Conversely,
            closing Longs has the immediate impact of decreasing the market
            price and increasing the fixed rate. Users can also take speculative
            long positions. Read our docs to learn more about{" "}
            <a
              className="underline"
              href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
            >
              Hyperdrive&rsquo;s Position Types
            </a>
          </span>
        }
      />
      <Disclosure
        title={<span className="text-h6">What is a short?</span>}
        description={
          <span>
            Simply put, a short is the opposite of a long. Opening a short
            implies purchasing Short tokens at their market price which is the
            same as the Long token&rsquo;s discount (i.e., the fixed rate
            applied to the position size). Shorts accrue variable interest (APY)
            on the full size of the position being shorted. Opening a Short
            causes the market price of Shorts to increase (which also means the
            market price of Longs decreases), while closing shorts has the
            inverse effect. Users can take speculative short positions or use
            Shorts for hedging other investments. Read our docs to learn more
            about{" "}
            <a
              className="underline"
              href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
            >
              Hyperdrive&rsquo;s Position Types
            </a>
            .
          </span>
        }
      />
      <Disclosure
        title={
          <span className="text-h6">
            What are the benefits of providing liquidity?
          </span>
        }
        description={
          <span>
            Liquidity providers (LPs) take potential revenue from 3 different
            sources: <br /> - Trading fees from Longs and Shorts being opened
            and closed by traders. <br /> - Variable rate on their idle capital
            being deployed to the underlying yield source. <br /> - Profit (or
            loss) resulting from taking the other side of traders’ positions.
            Furthermore, LP capital isn&rsquo;t tied to a specific maturity
            date, so these benefits remain until the funds are withdrawn by the
            LP. <br /> Learn more about{" "}
            <a
              className="underline"
              href="https://delv-tech.notion.site/LP-Profitability-0acf6928b88c4a33875221aa15ca62d2"
            >
              LP Profitability
            </a>
          </span>
        }
      />
      <Disclosure
        title={
          <span className="text-h6">
            Can I close my position before maturity?
          </span>
        }
        description={
          <span>
            Yes, Longs and Shorts can be closed at any time (except in rare
            cases, learn more in the{" "}
            <a
              href="https://delv-tech.notion.site/AMM-Checkpoints-11eefd1e09974551949803e16fe48afa"
              className="underline"
            >
              docs
            </a>
            ). However, closing these positions before maturity implies selling
            them to the AMM at the current market price. In other words,
            positions that are closed early won&rsquo;t get the initially
            expected rate of return, since their exit value depends on market
            activity. Liquidity Provider (LP) positions don&rsquo;t have a
            maturity date, so LP funds can be withdrawn at any time as long as
            they&rsquo;re not currently backing other long or short positions;
            if they are, LPs will receive Withdrawal Shares that represent
            pending withdrawals that still share the same benefits of regular LP
            capital. Learn more in the{" "}
            <a
              href="https://delv-tech.notion.site/LP-Shares-9d3d21330909494d83608eddf7d518c5"
              className="underline"
            >
              LP Shares
            </a>{" "}
            section of our docs.
          </span>
        }
      />
    </div>
  );
}
