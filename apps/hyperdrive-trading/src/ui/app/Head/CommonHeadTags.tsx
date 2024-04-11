import Helmet from "react-helmet";

interface CommonHeadTagsProps {
  title?: string;
  description?: string;
}

const defaultTitle = "Hyperdrive";
const defaultDescription = "Now Trading on Sepolia Testnet";

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
