import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <div className="flex h-screen flex-col items-center p-8">
      <h4 className="text-xl font-bold">Built by Delve</h4>

      <div className="daisy-hero h-full">
        <div className="daisy-hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Fixed Borrow</h1>
            <p className="py-6">
              Get a fixed rate loan by borrowing DAI on Spark, then hedging the
              borrow rate with a Hyperdrive Short.
            </p>
            <button className="daisy-btn-primary daisy-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
