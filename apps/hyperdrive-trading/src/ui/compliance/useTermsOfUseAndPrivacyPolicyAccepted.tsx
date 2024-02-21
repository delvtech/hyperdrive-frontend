import { useLocalStorage } from "react-use";

export function useTermsOfServiceAndPrivacyPolicyAccepted(): {
  isTermsOfServiceAndPrivacePolicyAccepted: boolean;
  setIsTermsOfServiceAndPrivacyPolicyAccepted: (isAccepted: boolean) => void;
} {
  const [
    isTermsOfServiceAndPrivacePolicyAccepted,
    setIsTermsOfServiceAndPrivacyPolicyAccepted,
  ] = useLocalStorage("tos-and-privacy-policy-accepted", false);
  return {
    // safe to case because default value is set to false
    isTermsOfServiceAndPrivacePolicyAccepted:
      isTermsOfServiceAndPrivacePolicyAccepted as boolean,
    setIsTermsOfServiceAndPrivacyPolicyAccepted,
  };
}
