import { ReactElement } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";

export function FAQ(): ReactElement {
  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="flex w-full items-center justify-between border-base-100">
        <span className="pb-2 text-h5 font-thin text-neutral-content">FAQ</span>
      </div>
      <Disclosure
        title={<span className="text-h6">What is a long?</span>}
        description={
          <p className="text-neutral-content">
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
        title={<span className="text-h6">What is a short?</span>}
        description={
          <p className="text-neutral-content">
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
        title={<span className="text-h6 ">What is the Dai Savings Rate?</span>}
        description={
          <p className="text-neutral-content">
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
