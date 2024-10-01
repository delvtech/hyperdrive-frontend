import { ReactElement, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-use";

interface PlausibleProps {
  /**
   * A custom page to associate with the event, e.g., `/error`.
   *
   * @see https://plausible.io/docs/custom-locations
   */
  page?: string;
}

/**
 * Adds the Plausible analytics script to the `<head>` and triggers pageviews.
 *
 * @see https://plausible.io/docs/plausible-script
 */
export function Plausible({ page }: PlausibleProps): ReactElement {
  usePageview(page);

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
 * Triggers a new `"pageview"` event when the provided page or the window's
 * pathname change.
 *
 * @see https://plausible.io/docs/script-extensions#scriptmanualjs
 */
function usePageview(page?: string) {
  // track the current location to trigger new pageviews when the path changes
  const location = useLocation();

  // track the previous pageview in a ref to avoid duplicate events, even if the
  // parent component re-renders.
  const previousPage = useRef<string | undefined>();

  // define the `plausible` function to manually trigger events
  useEffect(() => {
    window.plausible ||= function (...args) {
      (window.plausible.q ||= []).push(args);
    };
  }, []);

  useEffect(() => {
    const _page = page || location.pathname;
    // Only log page view when in production
    if (_page !== previousPage.current && import.meta.env.PROD) {
      window.plausible("pageview", { u: _page });
      previousPage.current = _page;
    }
  }, [page, location.pathname]);
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
    }
  ): void;
  q?: unknown[][];
}

// Augment the global `window` object to include the `plausible` function.
declare global {
  interface Window {
    plausible: PlausibleFunction;
  }
}
