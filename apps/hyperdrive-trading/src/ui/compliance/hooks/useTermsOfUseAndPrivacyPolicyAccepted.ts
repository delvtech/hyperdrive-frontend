import { useLocalStorage } from "react-use";

export function useTermsOfUseAndPrivacyPolicyAccepted(): {
  isTermsOfUseAndPrivacyPolicyAccepted: boolean;
  setIsTermsOfUseAndPrivacyPolicyAccepted: (isAccepted: boolean) => void;
} {
  const [
    isTermsOfUseAndPrivacyPolicyAccepted,
    setIsTermsOfUseAndPrivacyPolicyAccepted,
  ] = useLocalStorage("terms-of-use-and-privacy-policy-accepted", false);
  return {
    // safe to case because default value is set to false
    isTermsOfUseAndPrivacyPolicyAccepted:
      isTermsOfUseAndPrivacyPolicyAccepted as boolean,
    setIsTermsOfUseAndPrivacyPolicyAccepted,
  };
}
