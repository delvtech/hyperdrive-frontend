import { ReactElement, ReactNode } from "react";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";

interface TransactionViewProps {
  heading?: string;
  tokenInput: ReactNode;

  setting?: ReactNode;
  primaryStats?: ReactNode;
  transactionPreview: ReactNode;
  disclaimer?: ReactNode;

  actionButton: ReactNode;
}

export function TransactionView({
  heading,
  tokenInput,
  setting,
  primaryStats,
  transactionPreview,
  disclaimer,
  actionButton,
}: TransactionViewProps): ReactElement {
  const { isFlagEnabled: isNewOpenLongFormEnabled } =
    useFeatureFlag("new-open-long-form");
  return (
    <div className="flex w-full flex-col gap-4">
      {heading !== undefined && <h5>{heading}</h5>}
      <div>
        {tokenInput}
        {setting}
      </div>
      <div className="flex flex-col gap-8">
        {primaryStats}
        {/* If the new open long form is not enabled, show the transaction preview above the action button */}
        {!isNewOpenLongFormEnabled ? (
          <div>
            <h6 className="mb-4">Preview transaction</h6>
            {transactionPreview}
          </div>
        ) : null}
        <div className="text-center">{actionButton}</div>
        {disclaimer ? <div>{disclaimer}</div> : null}
        {/* If the new open long form is enabled, show the transaction preview below the action button */}
      </div>
      {isNewOpenLongFormEnabled ? transactionPreview : null}
    </div>
  );
}
