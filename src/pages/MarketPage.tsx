import classNames from "classnames";
import { Receipt } from "components/Receipt";
import { Tag } from "components/Tag";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { match } from "ts-pattern";

interface MarketActionButtonGroupProps {
  selectedAction: MarketAction;
  selectedOrderType: OrderType;

  onMarketActionChange: (action: MarketAction) => void;
  onOrderTypeChange: (order: OrderType) => void;
}

function MarketActionButtonGroup({
  selectedAction,
  selectedOrderType,
  onMarketActionChange,
  onOrderTypeChange,
}: MarketActionButtonGroupProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 bg-slate-800">
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "LONG",
            },
          )}
          onClick={() => onMarketActionChange("LONG")}
        >
          Long
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "SHORT",
            },
          )}
          onClick={() => onMarketActionChange("SHORT")}
        >
          Short
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedAction === "LP",
            },
          )}
          onClick={() => onMarketActionChange("LP")}
        >
          LP
        </button>
      </div>

      <div className="grid grid-cols-2 bg-slate-800">
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedOrderType === "OPEN",
            },
          )}
          onClick={() => onOrderTypeChange("OPEN")}
        >
          Open
        </button>
        <button
          className={classNames(
            "btn w-full p-4 font-bold hover:bg-racing-green hover:text-black",
            {
              "bg-lean text-black": selectedOrderType === "CLOSE",
            },
          )}
          onClick={() => onOrderTypeChange("CLOSE")}
        >
          Close
        </button>
      </div>
    </div>
  );
}

type MarketAction = "LONG" | "SHORT" | "LP";
type OrderType = "OPEN" | "CLOSE";

interface LongPositionFormProps {
  order: OrderType;
}

function LongPositionForm({ order }: LongPositionFormProps) {
  // const {} = useHyperdriveOpenLong({});

  const handleOpenLong = () => {};

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

export function MarketPage() {
  const params = useParams();
  const marketAddress = params.address;

  const [marketAction, setMarketAction] = useState<MarketAction>("LONG");
  const [orderType, setOrderType] = useState<OrderType>("OPEN");

  return (
    <div className="flex flex-col items-center w-full max-w-5xl px-10 m-auto mt-16 gap-y-12">
      <div className="flex items-center text-white gap-x-4">
        <h2 className="text-3xl font-Akira">USDC Market</h2>
        <div className="flex p-2 rounded-lg h-fit max-h-fit bg-racing-green">
          <span className="text-xs font-bold text-black ">Lending</span>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-md text-white gap-y-10">
        <MarketActionButtonGroup
          selectedAction={marketAction}
          selectedOrderType={orderType}
          onMarketActionChange={(newAction) => setMarketAction(newAction)}
          onOrderTypeChange={(newOrder) => setOrderType(newOrder)}
        />

        <LongPositionForm order={orderType} />
      </div>
    </div>
  );
}
