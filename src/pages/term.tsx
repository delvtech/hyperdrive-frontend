export function TermPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl px-10 m-auto mt-16 gap-y-12">
      <div className="flex items-center text-white gap-x-4">
        <h2 className="text-3xl font-Akira">USDC Market</h2>
        <div className="flex p-2 rounded-lg h-fit max-h-fit bg-lean">
          <span className="text-xs font-bold text-black ">Lending</span>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-lg text-white gap-y-10">
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-3 bg-slate-600">
            <button className="w-full p-4 hover:bg-racing-green hover:text-black">
              Long
            </button>
            <button className="w-full p-4 hover:bg-racing-green hover:text-black">
              Short
            </button>
            <button className="w-full p-4 hover:bg-racing-green hover:text-black">
              LP
            </button>
          </div>

          <div className="grid grid-cols-2 bg-slate-600">
            <button className="w-full p-4 hover:bg-racing-green hover:text-black">
              Open
            </button>
            <button className="w-full p-4 hover:bg-racing-green hover:text-black">
              Close
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">From Wallet</h3>

          <div className="flex w-full">
            <h4 className="mr-auto text-4xl underline">500</h4>
            <div className="p-2 bg-white">
              <span className="font-bold text-black">USDC</span>
            </div>
          </div>

          <div className="flex w-full text-white">
            <h4 className="mr-auto underline">Max</h4>
            <div>
              <span>Balance:</span>
              <span className="ml-1 font-bold">1,000,000</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl">You Receive</h3>

          <div className="flex w-full">
            <h4 className="mr-auto text-4xl underline">500</h4>
            <div className="p-2 bg-white">
              <span className="font-bold text-black">USDC</span>
            </div>
          </div>

          {/* <div className="flex w-full text-white">
            <h4 className="mr-auto underline">Max</h4>
            <div>
              <span>Balance:</span>
              <span className="ml-1 font-bold">1,000,000</span>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col w-full text-white gap-y-2">
          <div className="flex">
            <span>Matures</span>
            <span className="ml-auto font-bold">June 24th, 2023</span>
          </div>

          <div className="flex">
            <span>Balance:</span>
            <span className="ml-auto font-bold">1,000,000</span>
          </div>

          <div className="flex">
            <span>Balance:</span>
            <span className="ml-auto font-bold">1,000,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
