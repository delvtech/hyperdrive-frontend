import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import Button from "src/ui/base/components/Button";
import { Pill } from "src/ui/base/components/Pill";

export function Trade(): ReactElement {
  return (
    <div className="flex max-w-6xl m-auto">
      <div className="flex flex-col p-10 bg-base-200 gap-y-16">
        {/* Header */}
        <div className="flex items-center">
          <h2 className="mr-auto text-3xl font-bold text-off-white font-quantico">
            Trade
          </h2>
          <div>
            <Cog6ToothIcon className="h-5 stroke-2 stroke-off-white" />
          </div>
        </div>

        {/* Trade button group */}
        <div className="space-y-2">
          <div className="flex">
            <Button active className="w-full" onClick={() => {}}>
              Long
            </Button>
            <Button className="w-full" onClick={() => {}}>
              Short
            </Button>
            <Button className="w-full" onClick={() => {}}>
              LP
            </Button>
          </div>

          <div className="flex">
            <Button active className="w-full" onClick={() => {}}>
              Open
            </Button>
            <Button className="w-full" onClick={() => {}}>
              Close
            </Button>
          </div>
        </div>

        {/* You Pay Section */}
        <div className="space-y-4">
          <h3 className="text-2xl text-off-white font-quantico">You Pay</h3>

          <div className="flex flex-col p-4 border rounded bg-base-400 gap-y-2 border-blue-stroke">
            <div className="flex">
              <input
                className="text-2xl font-bold bg-transparent font-rubik text-off-white"
                value={"120000"}
              />

              <div className="flex items-center px-2 py-1 cursor-pointer bg-base-500 gap-x-2">
                <img
                  className="h-6"
                  src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024"
                />
                <h4 className="text-2xl text-off-white font-quantico">DAI</h4>
                <ChevronDownIcon className="h-6 stroke-off-white fill-off-white" />
              </div>
            </div>

            <div className="flex">
              <p className="mr-auto font-rubik text-giga-blue-100">
                1 DAI = $1.00
              </p>
              <p className="font-rubik text-giga-blue-100">
                Balance 120,000
                <span className="ml-1 underline cursor-pointer">Max</span>
              </p>
            </div>
          </div>
        </div>

        {/* New Position Section */}
        <div className="space-y-4">
          <h3 className="text-2xl text-off-white font-quantico">
            New Position
          </h3>

          <div className="flex flex-col p-4 border rounded bg-base-400 gap-y-4 border-blue-stroke">
            <div className="flex items-center">
              <h3 className="mr-4 text-2xl font-bold text-off-white font-rubik">
                Maker DSR Long
              </h3>
              <Pill className="h-6">6 months</Pill>
            </div>

            <div className="flex flex-col gap-y-1">
              <div className="flex">
                <p className="mr-auto tracking-wide font-rubik text-giga-blue-100">
                  Cost Basis
                </p>
                <p className="font-bold tracking-wide font-rubik text-text-bright">
                  120000 DAI
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto font-rubik text-giga-blue-100">Matures</p>
                <p className="font-bold tracking-wide font-rubik text-text-bright">
                  July 23rd, 2023
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto font-rubik text-giga-blue-100">
                  Fixed APR
                </p>
                <p className="font-bold tracking-wide font-rubik text-text-bright">
                  1.50%
                </p>
              </div>
              <div className="flex">
                <p className="mr-auto font-rubik text-giga-blue-100">
                  Claimable at Maturity
                </p>
                <p className="font-bold tracking-wide font-rubik text-text-bright">
                  120500 DAI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Receipt */}
        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <p className="mr-auto tracking-wide font-rubik text-text-bright">
              Total Cost
            </p>
            <p className="font-bold tracking-wide font-rubik text-text-bright">
              120000 DAI
            </p>
          </div>
          <div className="flex">
            <p className="mr-auto font-rubik text-text-bright">Slippage</p>
            <p className="font-bold tracking-wide font-rubik text-text-bright">
              $10.42 (-0.10%)
            </p>
          </div>
          <div className="flex">
            <p className="mr-auto font-rubik text-text-bright">
              Est. Network Fee
            </p>
            <p className="font-bold tracking-wide font-rubik text-text-bright">
              0.003 ETH ($1.16)
            </p>
          </div>
        </div>

        {/* Order Action Button */}
        <Button
          className="w-full px-0 py-4 text-xl font-bold hover:bg-hyper-pink bg-hyper-green text-base-200"
          onClick={() => {}}
        >
          Open Long
        </Button>
      </div>
    </div>
  );
}
