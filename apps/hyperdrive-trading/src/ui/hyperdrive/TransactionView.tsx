import { ReactElement, ReactNode } from "react";
import { Well } from "src/ui/base/components/Well/Well";

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
    <div className="flex flex-col gap-4">
      {heading !== undefined && <h5 className="font-bold">{heading}</h5>}
      {tokenInput}

      <div className="mt-4 flex flex-col gap-6">
        <Well elevation="flat">
          <div className="space-y-4">
            <span className="text-h6 font-bold">Preview transaction</span>
            {transactionPreview}
          </div>
        </Well>

        {disclaimer ? (
          <p className="text-center text-body">{disclaimer}</p>
        ) : null}

        {actionButton}
      </div>
    </div>
  );
}
