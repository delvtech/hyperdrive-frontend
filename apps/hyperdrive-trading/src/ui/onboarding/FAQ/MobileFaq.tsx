import type { ReactElement } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";
import { faqData } from "src/ui/onboarding/FAQ/faqData";
export function MobileFaq(): ReactElement {
  return (
    <div className="flex flex-col gap-6 pb-12">
      <div className="flex w-full items-center justify-between border-base-100">
        <h5 className="pb-2 font-thin text-neutral-content">FAQ</h5>
      </div>
      {faqData.map((faq) => {
        return (
          <Disclosure
            key={faq.key}
            title={<h5 className="ml-2">{faq.question}</h5>}
            description={<div className="mx-2 mb-2">{faq.answer}</div>}
          />
        );
      })}
    </div>
  );
}
