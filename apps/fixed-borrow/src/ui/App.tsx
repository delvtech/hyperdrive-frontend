import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Stat } from "./base/Stat/Stat";

type TermDuration = "90_DAYS" | "180_DAYS" | "270_DAYS";

export default function App(): ReactElement {
  const [duration, setDuration] = useState<TermDuration | undefined>();
  return (
    <div className="space-y-14 p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold">Fixed Borrow</h1>
        <h4 className="mb-3 text-xl">Built by Delve</h4>
        <ConnectButton />
      </div>

      <div className="flex h-full justify-center">
        <div className="flex flex-col items-center gap-12">
          {/* Collateral */}
          <div className="daisy-form-control w-full">
            <label className="daisy-label">
              <span className="daisy-label-text">Collateral</span>
              <span className="daisy-label-text">
                Currently locked: 5.02 ETH
              </span>
            </label>
            <label className="daisy-input-group">
              <span>ETH</span>
              <input
                type="text"
                placeholder="10"
                className="daisy-input-bordered daisy-input w-full"
              />
            </label>
          </div>

          {/* Debt */}
          <div className="daisy-form-control w-full">
            <label className="daisy-label">
              <span className="daisy-label-text">Debt</span>
              <span className="daisy-label-text">Current debt: 3,001 DAI</span>
            </label>
            <label className="daisy-input-group">
              <span>DAI</span>
              <input
                type="text"
                placeholder="10"
                className="daisy-input-bordered daisy-input w-full"
              />
            </label>
          </div>

          {/* Hyperdrive Short */}
          <div className="flex w-full flex-col gap-4">
            <div className="daisy-form-control">
              <label className="daisy-label">
                <span className="daisy-label-text">Hyperdrive Short</span>
                <span className="daisy-label-text">
                  Existing shorts: (
                  <button className="daisy-link">
                    {/* TODO: Make a modal open up on click to show your shorts */}
                    5
                  </button>
                  )
                </span>
              </label>
              <label className="daisy-input-group">
                <span className="shrink-0">You Pay</span>
                <input
                  type="text"
                  disabled
                  className="daisy-input-bordered daisy-input w-full"
                />
                <span>DAI</span>
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDuration("90_DAYS")}
                className={classNames("daisy-btn ", {
                  "daisy-btn-outline daisy-btn-active":
                    duration && duration === "90_DAYS",
                })}
              >
                3 months
              </button>
              <button
                onClick={() => setDuration("180_DAYS")}
                className={classNames("daisy-btn", {
                  "daisy-btn-outline daisy-btn-active":
                    duration && duration === "180_DAYS",
                })}
              >
                6 months
              </button>
              <button
                onClick={() => setDuration("270_DAYS")}
                className={classNames("daisy-btn", {
                  "daisy-btn-outline daisy-btn-active":
                    duration && duration === "270_DAYS",
                })}
              >
                9 months
              </button>
            </div>
          </div>
          <div className="daisy-stats daisy-stats-vertical justify-center text-center lg:daisy-stats-horizontal lg:text-start">
            <Stat
              title="Collat. Ratio"
              value="152%"
              description="Min ratio: 100%"
            />

            <Stat
              title="Liquidation Price"
              value="$1,200"
              description="Current price: $1600"
            />
            <Stat
              title="Borrow Rate (APY)"
              value="1.25%"
              description={
                <>
                  View on{" "}
                  <a href="#" className="daisy-link">
                    Spark
                  </a>
                </>
              }
            />
          </div>
          <button className="daisy-btn-info daisy-btn-wide daisy-btn">
            Submit transaction
          </button>
        </div>
      </div>
    </div>
  );
}
