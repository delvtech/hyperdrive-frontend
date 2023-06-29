import { ReactElement } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";

export function FAQ(): ReactElement {
  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="flex w-full items-center justify-between border-base-500">
        <span className="pb-2 font-rubik text-h5 text-hyper-blue-200">FAQ</span>
      </div>
      <Disclosure
        title={<span className="text-h6 font-semibold">What is a long?</span>}
        description={
          <p>
            The Dai Savings Rate (DSR) is a feature within the MakerDAO system
            that allows Dai stablecoin holders to earn interest on their
            holdings when they lock it into a DSR smart contract. The interest
            rate is variable, set by the MakerDAO community, and users can
            withdraw their Dai plus earned interest at any time, similar to a
            traditional savings account but operating on the blockchain.
          </p>
        }
      />
      <Disclosure
        title={<span className="text-h6 font-semibold">What is a short?</span>}
        description={
          <p>
            The Dai Savings Rate (DSR) is a feature within the MakerDAO system
            that allows Dai stablecoin holders to earn interest on their
            holdings when they lock it into a DSR smart contract. The interest
            rate is variable, set by the MakerDAO community, and users can
            withdraw their Dai plus earned interest at any time, similar to a
            traditional savings account but operating on the blockchain.
          </p>
        }
      />
      <Disclosure
        title={
          <span className="text-h6 font-semibold">
            What is the Dai Savings Rate?
          </span>
        }
        description={
          <p>
            The Dai Savings Rate (DSR) is a feature within the MakerDAO system
            that allows Dai stablecoin holders to earn interest on their
            holdings when they lock it into a DSR smart contract. The interest
            rate is variable, set by the MakerDAO community, and users can
            withdraw their Dai plus earned interest at any time, similar to a
            traditional savings account but operating on the blockchain.
          </p>
        }
      />
    </div>
  );
}
