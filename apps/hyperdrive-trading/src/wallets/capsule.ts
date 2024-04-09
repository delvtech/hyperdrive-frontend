import {
  GetCapsuleOpts,
  OAuthMethod,
  Theme,
  getCapsuleWallet,
} from "@usecapsule/rainbowkit-wallet";

const { VITE_CAPSULE_API_KEY, VITE_CAPSULE_ENV } = import.meta.env;

export const getCapsuleWalletOpts: GetCapsuleOpts = {
  capsule: {
    environment: VITE_CAPSULE_ENV, // Environment.PROD for Production

    apiKey: VITE_CAPSULE_API_KEY, // get one at usecapsule.com/beta
    constructorOpts: {}, // TODO
  },
  appName: "Hyperdrive",
  theme: Theme.dark,
  logo: "/logo.svg",

  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE,
  ],
};
export const capsuleWallet = getCapsuleWallet(getCapsuleWalletOpts);
