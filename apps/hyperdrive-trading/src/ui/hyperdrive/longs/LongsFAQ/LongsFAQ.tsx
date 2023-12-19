import classNames from "classnames";
import { ReactElement, useState } from "react";
import { Disclosure } from "src/ui/base/components/Disclosure/Disclosure";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";

export const longsFaqEntries = [
  {
    question: "How do fixed rates work?",
    answer: (
      <span>
        By opening a Long and holding it to maturity.
        <br />
        <br />
        Opening a long position in Hyperdrive implies purchasing hy[Token] at a
        discount. hy[Token] is redeemable for its full face value at maturity.
        The market price you pay and the hy[Token]&rsquo;s value at maturity are
        known upfront, which results in a fixed rate of return. <br />
        <br />
        Opening longs has an immediate impact on the market. hy[Token]&rsquo;s
        market price increases, which means the fixed rate decreases.
        Conversely, closing longs has the immediate impact of decreasing the
        market price and increasing the fixed rate. <br />
        <br />
        Users can also take speculative long positions. Read our docs to learn
        more about{" "}
        <a
          className="underline"
          href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
        >
          Hyperdrive&rsquo;s Position Types
        </a>
        .
      </span>
    ),
  },
  {
    question: "Do I have to hold until maturity?",
    answer: (
      <span>
        By opening a Long and holding it to maturity.
        <br />
        <br />
        Opening a long position in Hyperdrive implies purchasing hy[Token] at a
        discount. hy[Token] is redeemable for its full face value at maturity.
        The market price you pay and the hy[Token]&rsquo;s value at maturity are
        known upfront, which results in a fixed rate of return. <br />
        <br />
        Opening longs has an immediate impact on the market. hy[Token]&rsquo;s
        market price increases, which means the fixed rate decreases.
        Conversely, closing longs has the immediate impact of decreasing the
        market price and increasing the fixed rate. <br />
        <br />
        Opening a long position in Hyperdrive implies purchasing hy[Token] at a
        discount. hy[Token] is redeemable for its full face value at maturity.
        The market price you pay and the hy[Token]&rsquo;s value at maturity are
        known upfront, which results in a fixed rate of return. <br />
        <br />
        Opening longs has an immediate impact on the market. hy[Token]&rsquo;s
        market price increases, which means the fixed rate decreases.
        Conversely, closing longs has the immediate impact of decreasing the
        market price and increasing the fixed rate. <br />
        <br />
        Users can also take speculative long positions. Read our docs to learn
        more about{" "}
        <a
          className="underline"
          href="https://delv-tech.notion.site/Position-Types-249d2fc0f16847c283b6f4df00df9bd5"
        >
          Hyperdrive&rsquo;s Position Types
        </a>
        .
      </span>
    ),
  },
];

export function PositionFAQ({
  faqEntries,
}: {
  faqEntries: { question: string; answer: string | JSX.Element }[];
}): ReactElement {
  const [selectedEntry, setSelectedEntry] = useState(0);
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  if (isTailwindSmallScreen) {
    return (
      <div className="flex flex-col gap-y-2">
        {faqEntries.map((faq) => (
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
    <div className="flex max-w-6xl flex-col">
      <div className="grid grid-cols-3 gap-8">
        {/* questions */}
        <div className="col-span-1 flex flex-col text-left">
          {faqEntries.map(({ question }, i) => (
            <button
              key={i}
              onClick={() => setSelectedEntry(i)}
              className={classNames(
                "daisy-btn-ghost daisy-btn daisy-btn-wide justify-start text-left",
                {
                  "opacity-40": selectedEntry !== i,
                },
              )}
            >
              {question}
            </button>
          ))}
        </div>

        {/* answers */}
        <div className="col-span-2 flex flex-col">
          <span className="mb-2 text-h5 font-bold">
            {faqEntries[selectedEntry].question}
          </span>
          <div className="px-2">{faqEntries[selectedEntry].answer}</div>
        </div>
      </div>
    </div>
  );
}
