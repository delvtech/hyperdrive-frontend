import { formatUnits } from "ethers/lib/utils.js";
import { Market, OrderType } from "hyperdrive/types";
import { match } from "ts-pattern";
import { useAccount, useBalance } from "wagmi";
import { Receipt } from "./Receipt";
import { Tag } from "./Tag";

interface LongPositionFormProps {
  order: OrderType;
  market: Market;
}

export function LongPositionForm({ order, market }: LongPositionFormProps) {
  const { address } = useAccount();
  const { data: baseTokenData } = useBalance({
    address,
    token: market.baseToken.address,
  });
  const baseTokenBalance = baseTokenData?.value;

  return match(order)
    .with("OPEN", () => (
      <>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">From Wallet</h3>

          <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">500</h4>
            <Tag text="USDC">
              <img
                className="inline mr-1"
                src={"/src/public/logos/usdc-logo.png"}
                height={16}
                width={16}
              />
            </Tag>
          </div>

          <div className="flex w-full text-white">
            <h4 className="mr-auto underline">Max</h4>
            <div className="flex items-center">
              <span className="mr-1">Balance:</span>
              {baseTokenBalance && (
                <span className="font-bold">
                  {formatUnits(baseTokenBalance, 18)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">You Receive</h3>

          <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">560</h4>
            <Tag text="Long" className="mr-1" />
            <Tag text="June 21st, 2023" />
          </div>
        </div>
        <Receipt
          data={{
            Matures: "June 24th, 2023",
            "Average Exchange Rate": "0.95",
          }}
        />
        <button className="font-bold text-black btn-lg btn hover:bg-racing-green bg-lean">
          Open Long
        </button>
      </>
    ))
    .with("CLOSE", () => (
      <>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">From Position</h3>

          <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">500</h4>
            <Tag text="USDC">
              <img
                className="inline mr-1"
                src={"/src/public/logos/usdc-logo.png"}
                height={16}
                width={16}
              />
            </Tag>
          </div>

          <div className="flex w-full text-white">
            <h4 className="mr-auto underline">Max</h4>
            <div className="flex items-center">
              <span className="mr-1">Balance:</span>
              <span className="font-bold">1,000,000</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">You Receive</h3>

          <div className="flex items-center w-full">
            <h4 className="mr-auto text-5xl font-bold">560</h4>
            <Tag text="Long" className="mr-1" />
            <Tag text="June 21st, 2023" />
          </div>
        </div>
        <Receipt
          data={{
            Matures: "June 24th, 2023",
            "Average Exchange Rate": "0.95",
          }}
        />
        <button className="font-bold text-black btn-lg btn bg-racing-green hover:bg-lean">
          Close Long
        </button>
      </>
    ))
    .exhaustive();
}
