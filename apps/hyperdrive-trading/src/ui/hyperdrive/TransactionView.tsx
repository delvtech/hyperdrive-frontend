import { ReactElement, ReactNode } from "react";

interface TransactionViewProps {
  heading?: string;
  tokenInput: ReactNode;

  setting?: ReactNode;
  transactionPreview: ReactNode;
  disclaimer?: ReactNode;

  actionButton: ReactNode;
}

export function TransactionView({
  heading,
  tokenInput,
  setting,
  transactionPreview,
  disclaimer,
  actionButton,
}: TransactionViewProps): ReactElement {
  return (
    <div className="flex w-full flex-col gap-4">
      {heading !== undefined && <h5>{heading}</h5>}
      <div>
        {tokenInput}
        {setting}
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h6 className="mb-4">Preview transaction</h6>
          {transactionPreview}
        </div>

        <div className="text-center">{actionButton}</div>
        {disclaimer ? <div>{disclaimer}</div> : null}
      </div>
    </div>
  );
}
