import { ReactElement, ReactNode } from "react";

interface TransactionViewProps {
  heading?: string;
  tokenInput: ReactNode;
  transactionPreview: ReactNode;
  disclaimer?: ReactNode;

  actionButton: ReactNode;
}

export function TransactionView({
  heading,
  tokenInput,
  transactionPreview,
  disclaimer,
  actionButton,
}: TransactionViewProps): ReactElement {
  return (
    <div className="flex flex-col gap-4 text-neutral-content">
      {heading !== undefined && <h5 className="font-bold">{heading}</h5>}
      {tokenInput}

      <div className="mt-4 flex flex-col gap-8">
        <div className="space-y-6">
          <h6 className="font-bold">Preview transaction</h6>
          {transactionPreview}
        </div>

        {disclaimer ? <p className="text-center">{disclaimer}</p> : null}

        <div className="text-center">{actionButton}</div>
      </div>
    </div>
  );
}
