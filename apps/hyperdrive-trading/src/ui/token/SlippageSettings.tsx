export function SlippageSettings(): JSX.Element {
  return (
    <>
      <span className="ml-1">Max. Slippage</span>
      <div className="flex flex-row items-center justify-between">
        <div className="daisy-tabs daisy-tabs-xs my-4">
          <button
            onClick={(e) => e.preventDefault()}
            className="daisy-tab text-sm"
          >
            Auto
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="daisy-tab text-sm"
          >
            Custom
          </button>
        </div>
        <div className="relative">
          <input
            min={0}
            placeholder="0.5"
            className="daisy-input daisy-input-bordered h-8 max-w-24 text-sm"
          />
          <span className="absolute right-2 top-2 text-neutral-content">%</span>
        </div>
      </div>
    </>
  );
}
