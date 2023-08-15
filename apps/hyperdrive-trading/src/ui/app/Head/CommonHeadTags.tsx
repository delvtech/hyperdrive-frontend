import Helmet from "react-helmet";
export function CommonHeadTags(): JSX.Element {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimal-ui"
      />
    </Helmet>
  );
}
