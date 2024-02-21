import { useLocalStorage } from "react-use";

export function useTermsOfUseAndPrivacyPolicyAccepted(): {
  isTermsOfUseAndPrivacePolicyAccepted: boolean;
  setIsTermsOfUseAndPrivacyPolicyAccepted: (isAccepted: boolean) => void;
} {
  const [
    isTermsOfUseAndPrivacePolicyAccepted,
    setIsTermsOfUseAndPrivacyPolicyAccepted,
  ] = useLocalStorage("terms-of-use-and-privacy-policy-accepted", false);
  return {
    // safe to case because default value is set to false
    isTermsOfUseAndPrivacePolicyAccepted:
      isTermsOfUseAndPrivacePolicyAccepted as boolean,
    setIsTermsOfUseAndPrivacyPolicyAccepted,
  };
}
