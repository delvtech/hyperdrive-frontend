import { SquidWidget } from "@0xsquid/widget";
import { ReactElement } from "react";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const integratorId = import.meta.env.VITE_SQUID_ID as string;

export function Bridge(): ReactElement {
  return (
    <div className="m-6 flex flex-col space-y-6">
      <SquidWidget
        config={{
          integratorId,
          companyName: "Custom",
          style: {
            widgetContainer: {
              className: "squid-widget-animated-container",
            },
            neutralContent: "#959BB2",
            baseContent: "#eff4f6",
            base100: "#1a1b1f",
            base200: "#1b272c",
            base300: "#263138",
            error: "#ED6A5E",
            warning: "#FFB155",
            success: "#2EAEB0",
            primary: "#15ffab",
            secondary: "#71B4BD",
            secondaryContent: "#191c29",
            neutral: "#1a1b1f",
            roundedBtn: "25px",
            roundedCornerBtn: "999px",
            roundedBox: "6px",
            roundedDropDown: "6px",
          },
          slippage: 1.5,
          infiniteApproval: false,
          enableExpress: true,
          apiUrl: "https://api.squidrouter.com",
          comingSoonChainIds: [],
          titles: {
            swap: "Swap",
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
