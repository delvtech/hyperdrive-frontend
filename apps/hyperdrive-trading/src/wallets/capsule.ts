import {
  GetCapsuleOpts,
  OAuthMethod,
  getCapsuleWallet,
} from "@usecapsule/rainbowkit-wallet";
import { CreateWalletFn } from "src/wallets/CreateWalletFn";

const { VITE_CAPSULE_API_KEY, VITE_CAPSULE_ENV } = import.meta.env;

const hasRequiredEnvVars = !!VITE_CAPSULE_API_KEY && !!VITE_CAPSULE_ENV;

export const getCapsuleWalletOpts: GetCapsuleOpts = {
  capsule: {
    environment: VITE_CAPSULE_ENV, // Environment.PROD for Production

    apiKey: VITE_CAPSULE_API_KEY, // get one at usecapsule.com/beta
    constructorOpts: {
      // email configs
      githubUrl: "https://github.com/delvtech",
      linkedinUrl: "https://www.linkedin.com/company/delv-tech/",
      xUrl: "https://twitter.com/delv_tech",
      homepageUrl: window.location.origin,
      supportUrl: "mailto:support@delv.tech",
    },
  },
  theme: {
    backgroundColor: "#141414",
    foregroundColor: "#FFFFFF",
    customPalette: {
      tileButton: {
        surface: { default: "#141414" },
      },
      input: { surface: { default: "#141414" } },
    },
  },
  onRampConfig: {
    asset: "ETH",
    providers: [{ id: "STRIPE" }],
  },
  appName: "Hyperdrive",
  logo: "/capsule-wordmark.png",
  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE,
  ],
};

export const capsuleWallet: CreateWalletFn | undefined = hasRequiredEnvVars
  ? ({ projectId }) => {
      const capsuleWallet = getCapsuleWallet(getCapsuleWalletOpts);
      const wallet = capsuleWallet({ projectId });
      return {
        ...wallet,

        // override the rainbowkit name and icon options
        name: "Capsule",
        iconUrl: "/capsule-logo.png",
      };
    }
  : undefined;
