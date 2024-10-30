import { ReactElement, useEffect } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
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

  useEffect(() => {
    if (!isTermsOfServiceAndPrivacePolicyAccepted) {
      window.plausible("termsAndPrivacyView");
    }
  }, [isTermsOfServiceAndPrivacePolicyAccepted]);

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
            <ExternalLink
              href={termsOfUseUrl}
              className="daisy-link-hover daisy-link daisy-link-primary"
              newTab
            >
              Terms of Use
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink
              href={privacyPolicyUrl}
              className="daisy-link-hover daisy-link daisy-link-primary"
              newTab
            >
              Privacy Policy
            </ExternalLink>{" "}
            to use this app.
          </p>
          <button
            className="daisy-btn daisy-btn-primary"
            onClick={() => {
              window.plausible("termsAndPrivacyAccept");
              setIsTermsOfServiceAndPrivacyPolicyAccepted(true);
            }}
          >
            Accept Terms of Use and Privacy Policy
          </button>
        </div>
      }
    />
  );
}
