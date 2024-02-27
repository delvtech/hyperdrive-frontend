import { ReactElement, useState } from "react";
import Markdown from "react-markdown";
import tosContent from "src/public/tos-privacy.md";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { privacyPolicyUrl } from "src/ui/compliance/privacyPolicy";
import { termsOfUseUrl } from "src/ui/compliance/termsOfUse";
import { useTermsOfUseAndPrivacyPolicyAccepted } from "src/ui/compliance/useTermsOfUseAndPrivacyPolicyAccepted";

import { useBottomScrollListener } from "react-bottom-scroll-listener";

export function TermsOfUseAndPrivacyPolicyModal(): ReactElement {
  const {
    isTermsOfUseAndPrivacePolicyAccepted:
      isTermsOfServiceAndPrivacePolicyAccepted,
    setIsTermsOfUseAndPrivacyPolicyAccepted:
      setIsTermsOfServiceAndPrivacyPolicyAccepted,
  } = useTermsOfUseAndPrivacyPolicyAccepted();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const callback = () => {
    setButtonDisabled(false);
  };

  const scrollRef = useBottomScrollListener(callback);
  return (
    <Modal
      forceOpen={!isTermsOfServiceAndPrivacePolicyAccepted}
      modalId="tos-and-privacy-policy"
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
          <article
            ref={scrollRef}
            className="max-h-[200px] w-full max-w-5xl overflow-y-scroll rounded-md border border-neutral-content p-2"
          >
            <Markdown className="markdown p-2">
              {tosContent.toString()}
            </Markdown>
          </article>
          <button
            disabled={buttonDisabled}
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
