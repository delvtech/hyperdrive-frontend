import { useEffect } from "react";
import Helmet from "react-helmet";
import { useChainId } from "wagmi";

const defaultTitle = "Hyperdrive | Fixed and Variable Rates, Reimagined.";
const defaultDescription =
  "Hyperdrive is a novel Automated Market Maker (AMM) protocol for fixed and variable rates. Hyperdrive is now LIVE on Sepolia testnet.";

export function CommonHeadTags(): JSX.Element {
  const chainId = useChainId();

  const domain =
    chainId === 1 ? "app.hyperdrive.box" : "testnet.hyperdrive.box";

  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://plausible.io/js/script.js";
    script.dataset.domain = domain;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [domain]);

  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimal-ui"
      />
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${domain}`} />
      <meta property="og:image" content="/sepolia-banner.jpg" />
    </Helmet>
  );
}
