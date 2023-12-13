import classNames from "classnames";
import { ReactElement, useState } from "react";
import { faqData } from "src/ui/onboarding/FAQ/faqData";

export function FAQ(): ReactElement {
  const [selectedFAQKey, setSelectedFAQKey] = useState("faq1");

  const selectedFAQ = faqData.find((faq) => faq.key === selectedFAQKey);

  return (
    <div className="mt-8 flex max-w-6xl flex-col">
      <span className="gradientText mb-8 text-center text-h3">
        Frequently Asked Questions
      </span>
      <div className="flex flex-row gap-6 rounded-box bg-base-200 p-12">
        <div className="w-[30%]">
          {faqData.map((faq) => (
            <div
              key={faq.key}
              onClick={() => setSelectedFAQKey(faq.key)}
              className={classNames("my-5 cursor-pointer", {
                "bg-base-200 opacity-40": selectedFAQKey !== faq.key,
              })}
            >
              <div>{faq.question}</div>
            </div>
          ))}
        </div>
        <div className="flex min-h-[400px] w-[70%] flex-col items-start justify-center overflow-auto">
          {selectedFAQ && (
            <div className="mb-6">
              <div className="mb-1 text-h4">{selectedFAQ.question}</div>
              <span>{selectedFAQ.answer}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
