import classNames from "classnames";
import { type ReactElement, useState } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { faqData } from "src/ui/onboarding/FAQ/faqData";

export function FAQ(): ReactElement {
  return (
    <div className="mt-8 flex w-full flex-col items-center">
      <h3 className="mb-8 text-center">Frequently Asked Questions</h3>
      <div className="mx-8 flex w-[1200px] flex-row gap-6 rounded-box bg-base-200 p-12">
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
            title={<h4>{faq.question}</h4>}
            description={faq.answer}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="m-8 flex min-h-[400px] max-w-6xl flex-col">
      <div className="grid grid-cols-3 gap-8">
        {/* questions */}
        <div className="col-span-1 flex flex-col gap-4 text-left">
          {faqData.map(({ question, key }) => (
            <button
              key={key}
              onClick={() => setSelectedFAQKey(key)}
              className={classNames(
                "daisy-btn-md justify-start text-left text-md hover:opacity-100 ",
                {
                  "daisy-link font-normal opacity-80 ": selectedFAQKey !== key,
                  "font-medium ": selectedFAQKey === key,
                },
              )}
            >
              {question}
            </button>
          ))}
        </div>

        {/* answers */}
        <div className="col-span-2 flex flex-col">
          <h4 className="mb-4 font-medium">{selectedFAQ?.question}</h4>
          <div className="opacity-80">{selectedFAQ?.answer}</div>
        </div>
      </div>
    </div>
  );
}
