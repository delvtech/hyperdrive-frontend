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

      <div className="mt-4 flex flex-col gap-8">
        <Well transparent elevation="flat">
          <div className="space-y-6">
            <h6 className="font-bold">Preview transaction</h6>
            {transactionPreview}
          </div>
        </Well>

        <div className="text-center">{actionButton}</div>
        {disclaimer ? <div>{disclaimer}</div> : null}
      </div>
    </div>
  );
}
