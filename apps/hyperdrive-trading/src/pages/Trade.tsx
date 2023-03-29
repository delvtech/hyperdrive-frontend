import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import Button from "src/ui/base/components/Button";
import { Pill } from "src/ui/base/components/Pill";

export function Trade(): ReactElement {
  return (
    <div className="flex border-t grow border-hyper-blue-300">
      <div className="flex flex-col w-full md:max-w-md col-span-1 border-r bg-base-100 border-hyper-blue-300 shrink-0 basis=[500px]">
        <div className="flex flex-col p-8 border-b border-hyper-blue-300 gap-y-12">
          {/* Header */}
          <div className="flex items-center">
            <h2 className="mr-auto text-xl font-bold text-hyper-blue-100 font-akira">
              Trade
            </h2>
            <div>
              <Cog6ToothIcon className="h-5 stroke-2 stroke-hyper-blue-100" />
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
          <div className="space-y-4 text-hyper-blue-100 font-rubik">
            <h3 className="text-xl text-hyper-blue-100 font-quantico">
              You Pay
            </h3>

            <div className="flex flex-col p-4 border rounded bg-base-200 gap-y-2 border-hyper-blue-300">
              <div className="flex">
                <input
                  autoFocus
                  className="w-full text-3xl font-semibold bg-transparent placeholder:text-hyper-blue-200 focus:outline-dashed outline-hyper-blue-200"
                  placeholder="0"
                />

                <div className="flex items-center px-2 py-1 rounded cursor-pointer min-w-fit gap-x-2 hover:bg-hyper-blue-400">
                  <img
                    className="h-6"
                    src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024"
                  />
                  <h4 className="text-2xl font-quantico">DAI</h4>
                  <ChevronDownIcon className="w-6 h-6 stroke-hyper-blue-100 fill-hyper-blue-100" />
                </div>
              </div>

              <div className="flex text-hyper-blue-200">
                <p className="mr-auto">1 DAI = $1.00</p>
                <p>
                  Balance 120,000
                  <span className="ml-1 underline cursor-pointer hover:text-hyper-blue-400">
                    Max
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* New Position Section */}
          <div className="space-y-4 text-hyper-blue-100 font-rubik">
            <h3 className="text-xl font-quantico">New Position</h3>
            <div className="flex flex-col p-4 border rounded bg-base-300 gap-y-4 border-hyper-blue-300">
              <div className="flex items-center">
                <h3 className="mr-4 text-2xl font-semibold">Maker DSR Long</h3>
                <Pill className="h-6">6 months</Pill>
              </div>

              <div className="flex flex-col tracking-wide gap-y-1">
                <div className="flex">
                  <p className="mr-auto">Cost Basis</p>
                  <p className="font-semibold tracking-wide">120000 DAI</p>
                </div>
                <div className="flex">
                  <p className="mr-auto">Matures</p>
                  <p className="font-semibold tracking-wide">July 23rd, 2023</p>
                </div>
                <div className="flex">
                  <p className="mr-auto">Fixed APR</p>
                  <p className="font-semibold tracking-wide">1.50%</p>
                </div>
                <div className="flex">
                  <p className="mr-auto">Claimable at Maturity</p>
                  <p className="font-semibold tracking-wide">120500 DAI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Action Button */}
          <Button
            variant="Trade"
            className="w-full px-0 py-4 text-xl"
            onClick={() => {}}
          >
            Open Long
          </Button>
        </div>
      </div>
    </div>
  );
}
