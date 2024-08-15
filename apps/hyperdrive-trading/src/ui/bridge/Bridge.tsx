import { SquidWidget } from "@0xsquid/widget";
import { ReactElement } from "react";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const integratorId = import.meta.env.VITE_SQUID_ID as string;

export function Bridge(): ReactElement {
  return (
    <div className="m-6 flex flex-col items-center justify-center space-y-6">
      <SquidWidget
        config={{
          integratorId,
          companyName: "Delv",
          slippage: 1.5,
          theme: {
            // borders
            "content-100": "#1a1b1f",
            "content-200": "#ff0000", // 🤷‍♂️
            // text
            "content-300": "#ffffff",
            "content-400": "#ff0000", // 🤷‍♂️
            // sub text
            "content-500": "#959bb2",
            // placeholder
            "content-600": "#959BB2",
            "content-700": "#ff0000", // 🤷‍♂️
            // lighter background
            "content-800": "#1b272c",
            // background
            "content-900": "#12191d",
            // label text
            "accent-400": "#959BB2",
            // aacent text
            "accent-500": "#15ffab",
            // button color
            "status-positive": "#15ffab",
            "status-negative": "#FF494A",
            "status-warning": "#FFB155",
          },
          enableExpress: true,
          apiUrl: "https://v2.api.squidrouter.com",
          comingSoonChainIds: [],
          titles: {
            swap: "Swap",
            swapDetails: "Swap Details",
            settings: "Settings",
            wallets: "Wallets",
            tokens: "Select Token",
            chains: "Select Chain",
            history: "History",
            transaction: "Transaction",
            allTokens: "Select Token",
            destination: "Destination address",
          },
          priceImpactWarnings: {
            warning: 3,
            critical: 5,
          },
          showOnRampLink: true,
        }}
      />
    </div>
  );
}

export default Bridge;
