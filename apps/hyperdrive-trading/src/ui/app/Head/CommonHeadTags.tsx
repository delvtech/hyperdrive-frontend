import Helmet from "react-helmet";

interface CommonHeadTagsProps {
  title?: string;
  description?: string;
}

const defaultTitle = "Hyperdrive Trading";
const defaultDescription =
  "Hyperdrive is the next research leap from the Delv team on variable and fixed rate primitives. No preset expiration dates, no fragmented liquidity, and no LP rollovers, aka everlasting liquidity.";

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
      <meta property="og:site_name" content={defaultTitle} />
      {/* TODO: Add og:image, og:url, og:title, og:description twitter:image twitter:card twitter:site icon */}
    </Helmet>
  );
}
