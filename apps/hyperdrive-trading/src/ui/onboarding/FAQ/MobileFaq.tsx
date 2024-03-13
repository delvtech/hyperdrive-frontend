import { ReactElement } from "react";
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
            title={<span className="text-h6">{faq.question}</span>}
            description={<p className="">{faq.answer}</p>}
          />
        );
      })}
    </div>
  );
}
