import { formatUnits } from "ethers/lib/utils.js";
import { Market, OrderType, Token } from "hyperdrive/types";
import { useState } from "react";
import { match } from "ts-pattern";
import { formatBalance } from "utils";
import { useAccount, useBalance } from "wagmi";
import { Receipt } from "./Receipt";
import { Tag } from "./Tag";

interface LongPositionFormProps {
  order: OrderType;
  market: Market;
}

interface TokenInputProps {
  token: Token;
  currentBalance: string;
  onChange: (value: string) => void;
}

function TokenInput({ token, onChange, currentBalance }: TokenInputProps) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col p-4 border-2 rounded border-lean gap-y-2">
      <div className="flex items-center text-white gap-x-2">
        <div className="grow basis-0">
          <input
            value={input}
            className="w-full text-5xl font-bold bg-transparent"
            placeholder="0"
            onChange={(event) => {
              const value = event.target.value;
              setInput(value);
              onChange(value);
            }}
          />
        </div>
        <Tag text={token.symbol}>
          <img
            className="inline mr-1"
            src={token.logoUrl}
            height={16}
            width={16}
          />
        </Tag>
      </div>

      <div className="flex w-full text-white">
        {currentBalance === input ? (
          <button
            className="mr-auto underline disabled:opacity-50"
            // disabled={!currentBalance}
            onClick={() => {
              setInput("0");
              onChange("0");
            }}
          >
            Clear
          </button>
        ) : (
          <button
            className="mr-auto underline disabled:opacity-50"
            disabled={!currentBalance}
            onClick={() => {
              setInput(formatUnits(currentBalance, token.decimals));
              onChange(currentBalance);
            }}
          >
            Max
          </button>
        )}
        <div className="flex items-center">
          <span className="mr-1">Balance:</span>
          <span className="font-bold">
            {formatBalance(formatUnits(currentBalance, token.decimals))}
          </span>
        </div>
      </div>
    </div>
  );
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

          <TokenInput
            token={market.baseToken}
            currentBalance={baseTokenBalance?.toString() ?? "0"}
            onChange={() => {}}
          />
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
