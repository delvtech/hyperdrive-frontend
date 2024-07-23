import { ReactElement, useEffect } from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-use";

interface PlausibleProps {
  /**
   * A custom location to associate with the event.
   *
   * @see https://plausible.io/docs/custom-locations
   */
  location?: string;
}

/**
 * Adds the Plausible analytics script to the `<head>`.
 *
 * @see https://plausible.io/docs/plausible-script
 */
export function Plausible({ location }: PlausibleProps): ReactElement {
  usePageview(location);

  return (
    <Helmet>
      <script
        defer={true}
        src="https://plausible.io/js/script.manual.js"
        data-domain={window.location.host}
      ></script>
    </Helmet>
  );
}

/**
 * Triggers a new pageview event when the pathname or custom location changes.
 *
 * @see https://plausible.io/docs/script-extensions#scriptmanualjs
 */
function usePageview(customLocation?: string) {
  // track the current location to trigger new pageviews when the path changes
  const location = useLocation();

  // define the `plausible` function to manually trigger events
  useEffect(() => {
    window.plausible =
      window.plausible ||
      function (...args) {
        (window.plausible.q = window.plausible.q || []).push(...args);
      };
  }, []);

  useEffect(() => {
    if (customLocation) {
      window.plausible("pageview", {
        u: customLocation,
      });
    } else {
      // Fallback to the default behavior
      window.plausible("pageview");
    }
  }, [customLocation, location.pathname]);
}

type PlausibleEvent = "pageview";
interface PlausibleFunction {
  (
    event: PlausibleEvent,
    params?: {
      /**
       * The URL to associate with the event.
       */
      u?: string;
      [key: string]: unknown;
    },
  ): void;
  q?: unknown[];
}

// Augment the global `window` object to include the `plausible` function.
declare global {
  interface Window {
    plausible: PlausibleFunction;
  }
}
