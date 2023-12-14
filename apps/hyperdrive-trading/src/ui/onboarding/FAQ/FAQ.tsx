import classNames from "classnames";
import { ReactElement, useState } from "react";
import { faqData } from "src/ui/onboarding/FAQ/faqData";

export function FAQ(): ReactElement {
  const [selectedFAQKey, setSelectedFAQKey] = useState("faq1");

  const selectedFAQ = faqData.find((faq) => faq.key === selectedFAQKey);

  return (
    <div className="mt-8 flex max-w-6xl flex-col">
      <span className="gradient-text mb-8 text-center text-h3">
        Frequently Asked Questions
      </span>
      <div className="flex flex-row gap-6 rounded-box bg-base-200 p-12">
        <div className="flex w-[40%] flex-col justify-center">
          {faqData.map((faq) => (
            <div
              key={faq.key}
              onClick={() => setSelectedFAQKey(faq.key)}
              className={classNames(" cursor-pointer", {
                "bg-base-200 px-2 py-4": selectedFAQKey !== faq.key,
                "rounded-lg bg-gray-600 px-2 py-4": selectedFAQKey === faq.key,
              })}
            >
              <div>{faq.question}</div>
            </div>
          ))}
        </div>
        <div className="flex min-h-[400px] w-[70%] flex-col items-start justify-center overflow-auto">
          {selectedFAQ && (
            <div className="mb-6">
              <div className="mb-2 text-h4 text-gray-400">
                {selectedFAQ.question}
              </div>
              <span>{selectedFAQ.answer}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
