import { ReactElement } from "react";

const config = {
  integratorId: "squid-swap-widget-v2",
  companyName: "Squid",
  style: {
    widgetContainer: {
      className: "squid-widget-animated-container",
    },
    neutralContent: "#ffffff",
    baseContent: "#ffffff",
    base100: "#1a272c",
    base200: "#11191d",
    base300: "#000000",
    error: "#ED6A5E",
    warning: "#FFB155",
    success: "#2EAEB0",
    primary: "#18ffab",
    secondary: "#18ffab",
    secondaryContent: "#F7F6FB",
    neutral: "#11191d",
    roundedBtn: "26px",
    roundedCornerBtn: "999px",
    roundedBox: "1rem",
    roundedDropDown: "20rem",
  },
  infiniteApproval: false,
  enableExpress: true,
  apiUrl: "https://apiplus.squidrouter.com",
  comingSoonChainIds: [],
  onChainQuoting: false,
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
};

// convert to search params, remove trailing '=' sign from config.
const squidConfig = encodeURIComponent(JSON.stringify(config)).toString();

export function Bridge(): ReactElement {
  return (
    <div className="m-6 flex flex-col space-y-6">
      <iframe
        height="684px"
        width="440px"
        src={`https://v2.widget.squidrouter.com/iframe?config=${squidConfig}`}
      />
    </div>
  );
}

export default Bridge;
