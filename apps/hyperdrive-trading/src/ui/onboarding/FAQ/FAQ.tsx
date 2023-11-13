import { ReactElement, useState } from "react";

export function FAQ(): ReactElement {
  const [selectedFAQKey, setSelectedFAQKey] = useState("faq1");

  return (
    <div className="flex flex-col">
      <span className="mb-2 text-h5 font-bold">Frequently Asked Questions</span>
      <div className="flex flex-row gap-6 rounded-md bg-base-200 p-12">
        <div className="w-[30%]">
          <div
            onClick={() => setSelectedFAQKey("faq1")}
            className={`${
              selectedFAQKey !== "faq1" && "bg-base-200 opacity-40"
            } my-5 cursor-pointer`}
          >
            <div>How can I get fixed rates?</div>
          </div>
          <div
            onClick={() => setSelectedFAQKey("faq2")}
            className={`${
              selectedFAQKey !== "faq2" && "bg-base-200 opacity-40"
            } my-5 cursor-pointer`}
          >
            <div>What is a short?</div>
          </div>
          <div
            onClick={() => setSelectedFAQKey("faq3")}
            className={`${
              selectedFAQKey !== "faq3" && "bg-base-200 opacity-40"
            } my-5 cursor-pointer`}
          >
            <div>What are the benefits of providing liquidity?</div>
          </div>
          <div
            onClick={() => setSelectedFAQKey("faq4")}
            className={`${
              selectedFAQKey !== "faq4" && "bg-base-200 opacity-40"
            } my-5 cursor-pointer`}
          >
            <div>Can I close my long/short/LP position before maturity?</div>
          </div>
          <div
            onClick={() => setSelectedFAQKey("faq5")}
            className={`${
              selectedFAQKey !== "faq5" && "bg-base-200 opacity-40"
            } my-5 cursor-pointer`}
          >
            <div>How do LP positions work?</div>
          </div>
        </div>

        <div className="flex w-[70%] flex-col items-start justify-center">
          {selectedFAQKey === "faq1" && (
            <div>
              <div className="mb-1 text-h4">How can I get fixed rates?</div>
              <span>
                By opening a Long and holding it to maturity. <br />
                <br />
                Opening a long position in Hyperdrive implies purchasing
                hy[Token] at a discount. hy[Token] is redeemable for its full
                face value at maturity. The market price you pay and the
                hy[Token]&rsquo;s value at maturity are known upfront, which
                results in a fixed rate of return. <br />
                <br />
                Opening longs has an immediate impact on the market.
                hy[Token]&rsquo;s market price increases, which means the fixed
                rate decreases. Conversely, closing longs has the immediate
                impact of decreasing the market price and increasing the fixed
                rate. <br />
                <br />
                Users can also take speculative long positions. Read our docs to
                learn more about{" "}
                <a
                  className="underline"
                  href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
                >
                  Hyperdrive&rsquo;s Position Types
                </a>
                .
              </span>
            </div>
          )}
          {selectedFAQKey === "faq2" && (
            <div>
              <div className="mb-1 text-h4">What is a short?</div>
              <span>
                Simply put, a short is the opposite of a long. Opening a short
                implies short-selling hy[Token] at its current market price,
                thus paying an amount equivalent to the hy[Token]&rsquo;s
                discount (i.e., the fixed rate applied to the position size)
                upfront, while accruing the variable interest (APY) on the full
                size of the position being shorted for the duration it&rsquo;s
                held. <br />
                <br />
                Opening a short causes the market price of hy[Token] to
                decrease, while closing a short has the inverse effect. <br />
                <br />
                Users can take speculative short positions or use shorts for
                hedging other investments. Read our docs to learn more about{" "}
                <a
                  className="underline"
                  href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
                >
                  Hyperdrive&rsquo;s Position Types
                </a>
                .
              </span>
            </div>
          )}
          {selectedFAQKey === "faq3" && (
            <div>
              <div className="mb-1 text-h4">
                What are the benefits of providing liquidity?
              </div>
              <span>
                Liquidity providers (LPs) take potential revenue from 3
                different sources: <br /> - Trading fees from longs and shorts
                being opened and closed by traders. <br /> - Variable rate on
                their idle capital being deployed to the underlying yield
                source. <br /> - Profit (or loss) resulting from taking the
                other side of traders’ positions.
                <br />
                Furthermore, LP capital isn&rsquo;t tied to a specific maturity
                date, so these benefits remain until the funds are withdrawn by
                the LP. <br /> Learn more about{" "}
                <a
                  className="underline"
                  href="https://delv-tech.notion.site/LP-Profitability-0acf6928b88c4a33875221aa15ca62d2"
                >
                  LP Profitability
                </a>
                .
              </span>
            </div>
          )}
          {selectedFAQKey === "faq4" && (
            <div>
              <div className="mb-1 text-h4">
                Can I close my long/short/LP position before maturity?
              </div>
              <span>
                Yes, longs and shorts can be closed at any time (except in rare
                cases, learn more in the{" "}
                <a
                  href="https://delv-tech.notion.site/AMM-Checkpoints-11eefd1e09974551949803e16fe48afa"
                  className="underline"
                >
                  docs
                </a>
                ). However, closing these positions before maturity implies
                selling them to the AMM at the current market price. In other
                words, positions that are closed early won&rsquo;t get the
                initially expected rate of return, since their exit value
                depends on market activity. <br />
                <br />
                Liquidity Provider (LP) positions don&rsquo;t have a maturity
                date, so LP funds can be withdrawn at any time as long as
                they&rsquo;re not currently backing other long or short
                positions; if they are, LPs will receive Withdrawal Shares that
                represent pending withdrawals that still share the same benefits
                of regular LP capital. Learn more in the{" "}
                <a
                  href="https://delv-tech.notion.site/LP-Shares-9d3d21330909494d83608eddf7d518c5"
                  className="underline"
                >
                  LP Shares
                </a>{" "}
                section of our docs.
              </span>
            </div>
          )}
          {selectedFAQKey === "faq5" && (
            <div>
              <div className="mb-1 text-h4">How do LP positions work?</div>
              <span>
                You open an LP position by providing base asset to the AMM. This
                increases the AMM&rsquo;s capacity for longs and shorts. LP
                capital is then used to back long and short positions opened by
                traders.
                <br />
                <br />
                LPs can withdraw their capital at any time, but if part of it is
                currently backing open positions, the AMM will temporarily keep
                that part and give Withdrawal Shares to the LP until there is
                enough idle liquidity available to replace that capital. <br />
                <br />
                When long or short positions are closed, the liquidity used to
                back them is freed up and used to buy back Withdrawal Shares, at
                which point LPs can complete their pending withdrawal process.{" "}
                <br />
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
          )}
        </div>
      </div>
    </div>
  );
}
