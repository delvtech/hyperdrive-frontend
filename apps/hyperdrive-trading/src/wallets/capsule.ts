import {
  GetCapsuleOpts,
  OAuthMethod,
  Theme,
  getCapsuleWallet,
} from "@usecapsule/rainbowkit-wallet";

const { VITE_CAPSULE_API_KEY, VITE_CAPSULE_ENV } = import.meta.env;

const hasRequiredEnvVars = !!VITE_CAPSULE_API_KEY && !!VITE_CAPSULE_ENV;

export const getCapsuleWalletOpts: GetCapsuleOpts = {
  capsule: {
    environment: VITE_CAPSULE_ENV, // Environment.PROD for Production

    apiKey: VITE_CAPSULE_API_KEY, // get one at usecapsule.com/beta
    constructorOpts: {
      // passkey configs
      portalBackgroundColor: "#202F36",
      portalPrimaryButtonColor: "#15FFAB",
      portalTextColor: "#EFF4F6",
      portalPrimaryButtonTextColor: "#202F36",

      // email configs
      // @ts-expect-error The enum for this type is not exported
      emailTheme: "dark",
      emailPrimaryColor: "#15FFAB",
      githubUrl: "https://github.com/delvtech",
      linkedinUrl: "https://www.linkedin.com/company/delv-tech/",
      xUrl: "https://twitter.com/delv_tech",
      homepageUrl: "https://hyperdrive.trade/",
      supportUrl: "mailto:support@delv.tech",
    },
  },
  appName: "Hyperdrive",
  theme: Theme.dark,
  logo: "/hyperdrive-logo-white.svg",

  oAuthMethods: [
    OAuthMethod.GOOGLE,
    OAuthMethod.TWITTER,
    OAuthMethod.DISCORD,
    OAuthMethod.APPLE,
  ],
};
export const capsuleWallet = hasRequiredEnvVars
  ? getCapsuleWallet(getCapsuleWalletOpts)
  : undefined;
