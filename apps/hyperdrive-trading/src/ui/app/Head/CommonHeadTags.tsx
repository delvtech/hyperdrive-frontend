import Helmet from "react-helmet";

interface CommonHeadTagsProps {
  title?: string;
  description?: string;
}

const defaultTitle = "Hyperdrive | Fixed and Variable Rates, Reimagined.";
const defaultDescription =
  "Hyperdrive is a novel Automated Market Maker (AMM) protocol for fixed and variable rates. Hyperdrive is now LIVE on Sepolia testnet.";

export function CommonHeadTags({
  title = defaultTitle,
  description = defaultDescription,
}: CommonHeadTagsProps): JSX.Element {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimal-ui"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://testnet.hyperdrive.trade/" />
      <meta property="og:image" content="/sepolia-banner.jpg" />
    </Helmet>
  );
}
