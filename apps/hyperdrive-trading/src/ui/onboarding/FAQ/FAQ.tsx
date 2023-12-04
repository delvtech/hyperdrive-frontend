import classNames from "classnames";
import { ReactElement, useState } from "react";
import { faqData } from "src/ui/onboarding/FAQ/faqData";

export function FAQ(): ReactElement {
  const [selectedFAQKey, setSelectedFAQKey] = useState("faq1");
  return (
    <div className="flex max-w-6xl flex-col">
      <span className="mb-2 text-h5 font-bold">Frequently Asked Questions</span>
      <div className="flex flex-row gap-6 rounded-md bg-base-200 p-12">
        <div className="w-[30%]">
          {faqData.map((faq) => {
            return (
              <div
                key={faq.key}
                onClick={() => setSelectedFAQKey(faq.key)}
                className={classNames("my-5 cursor-pointer", {
                  "bg-base-200 opacity-40": selectedFAQKey !== faq.key,
                })}
              >
                <div>{faq.question}</div>
              </div>
            );
          })}
        </div>
        <div className="flex w-[70%] flex-col items-start justify-center">
          {faqData.map((faq) => {
            return (
              <div
                key={faq.key}
                className={classNames("mb-6", {
                  hidden: selectedFAQKey !== faq.key,
                })}
              >
                <div className="mb-1 text-h4">{faq.question}</div>
                <span>{faq.answer}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
