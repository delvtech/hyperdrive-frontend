import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { faqData } from "src/ui/onboarding/FAQ/faqData";

export function FAQ(): ReactElement {
  return (
    <div className="mt-8 flex max-w-6xl flex-col">
      <span className="gradient-text mb-8 text-center text-h3">
        Frequently Asked Questions
      </span>
      <div className="flex flex-row gap-6 rounded-box bg-base-200 p-12">
        <FAQEntries />
      </div>
    </div>
  );
}

export function FAQEntries(): JSX.Element {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const [selectedFAQKey, setSelectedFAQKey] = useState("faq1");

  const selectedFAQ = faqData.find((faq) => faq.key === selectedFAQKey);
  if (isTailwindSmallScreen) {
    return (
      <div className="flex flex-col gap-y-2">
        {faqData.map((faq) => (
          <Disclosure
            key={faq.question}
            title={<span className="text-h5">{faq.question}</span>}
            description={<p className="">{faq.answer}</p>}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex min-h-[400px] max-w-6xl flex-col">
      <div className="grid grid-cols-3 gap-8">
        {/* questions */}
        <div className="col-span-1 flex flex-col text-left">
          {faqData.map(({ question, key }) => (
            <button
              key={key}
              onClick={() => setSelectedFAQKey(key)}
              className={classNames(
                "daisy-btn-ghost daisy-btn daisy-btn-wide justify-start text-left",
                {
                  "opacity-40": selectedFAQKey !== key,
                },
              )}
            >
              {question}
            </button>
          ))}
        </div>

        {/* answers */}
        <div className="col-span-2 flex flex-col">
          <span className="mb-4 text-h5 font-bold">
            {selectedFAQ?.question}
          </span>
          <div>{selectedFAQ?.answer}</div>
        </div>
      </div>
    </div>
  );
}
