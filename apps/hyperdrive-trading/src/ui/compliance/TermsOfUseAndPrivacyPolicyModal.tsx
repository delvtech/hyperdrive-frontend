import type { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { useTermsOfUseAndPrivacyPolicyAccepted } from "src/ui/compliance/hooks/useTermsOfUseAndPrivacyPolicyAccepted";
import { privacyPolicyUrl } from "src/ui/compliance/privacyPolicy";
import { termsOfUseUrl } from "src/ui/compliance/termsOfUse";

export function TermsOfUseAndPrivacyPolicyModal(): ReactElement {
  const {
    isTermsOfUseAndPrivacePolicyAccepted:
      isTermsOfServiceAndPrivacePolicyAccepted,
    setIsTermsOfUseAndPrivacyPolicyAccepted:
      setIsTermsOfServiceAndPrivacyPolicyAccepted,
  } = useTermsOfUseAndPrivacyPolicyAccepted();
  return (
    <Modal
      forceOpen={!isTermsOfServiceAndPrivacePolicyAccepted}
      modalId="tos-and-privacy-policy"
      className="px-4 pt-8 lg:px-0"
      modalContent={
        <div className="flex flex-col gap-5">
          <h5 className="font-bold">Terms of Use and Privacy Policy</h5>
          <p>
            You must accept the{" "}
            <a
              href={termsOfUseUrl}
              className="daisy-link-hover daisy-link daisy-link-primary"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href={privacyPolicyUrl}
              className="daisy-link-hover daisy-link daisy-link-primary"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            to use this app.
          </p>
          <button
            className="daisy-btn daisy-btn-primary"
            onClick={() => setIsTermsOfServiceAndPrivacyPolicyAccepted(true)}
          >
            Accept Terms of Use and Privacy Policy
          </button>
        </div>
      }
    />
  );
}
