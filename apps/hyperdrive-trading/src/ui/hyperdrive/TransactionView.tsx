import { ReactElement, ReactNode } from "react";
import { Well } from "src/ui/base/components/Well/Well";

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
    <div className="flex w-full flex-col gap-5">
      {heading !== undefined && <h5>{heading}</h5>}
      {tokenInput}
      {setting}
      <div className="mt-4 flex flex-col gap-8">
        <Well transparent elevation="flat">
          <div className="space-y-6">
            <h5 className="font-medium">Preview transaction</h5>
            {transactionPreview}
          </div>
        </Well>

        <div className="text-center">{actionButton}</div>
        {disclaimer ? <div>{disclaimer}</div> : null}
      </div>
    </div>
  );
}
