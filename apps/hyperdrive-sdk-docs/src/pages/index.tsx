import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.scss";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      data-theme="dark"
      className={clsx("hero hero--primary", styles.hero)}
    >
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={clsx("hero__title", styles.title)}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.button,
              )}
              to="/docs/sdk/"
            >
              Get Started
            </Link>
          </div>
        </div>
        <img src="/img/hero-car-bg-dark.svg" className={styles.heroImageDark} />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      // description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
