import { ReactNode, useEffect } from "react";
import Helmet from "react-helmet";
import { Address } from "viem";

/**
 * Adds the Plausible analytics script to the `<head>` and the `plausible`
 * function to the `window` object.
 *
 * @see https://plausible.io/docs/script-extensions#scriptmanualjs
 */
export function Plausible(): ReactNode {
  // define the `plausible` function to manually trigger events
  useEffect(() => {
    window.plausible ||= function (...args) {
      (window.plausible.q ||= []).push(args);
    } as PlausibleFunction;
  }, []);

  return import.meta.env.PROD ? (
    <Helmet>
      <script
        defer={true}
        src="https://plausible.io/js/script.manual.js"
        data-domain={window.location.host}
      ></script>
    </Helmet>
  ) : null;
}

/**
 * Parameters for Plausible events keyed by the event name.
 *
 * Add custom events and their params here to add them to the `window.plausible`
 * function args type.
 *
 * @see https://plausible.io/docs/custom-event-goals
 */
export interface PlausibleEventParamsMap {
  pageview: {
    /**
     * The URL to associate with the event.
     *
     * @see https://plausible.io/docs/custom-locations
     */
    u?: string;
  };

  termsAndPrivacyView: void;
  termsAndPrivacyAccept: void;

  walletConnect: void;
  walletDisconnect: void;

  externalLinkClick: {
    props: {
      name?: string;
      url: string;
    };
  };

  filterChange: {
    props: {
      /**
       * The name of the filter that was changed.
       */
      name: string;
      /**
       * The new value of the filter.
       */
      value: string;
    };
  };

  positionCtaClick: {
    props: {
      chainId: number;
      poolAddress: Address;
      positionType: PositionType;
      /**
       * The name of the stat being shown with the CTA, as it appears in the UI.
       * @example "Fixed APR" | "Yield Multiplier" | "LP APY (1d)"
       */
      statName: string;
      /**
       * The decimal string value of the stat being shown with the CTA with full
       * precision.
       * @example "0.123456789012345678"
       */
      statValue: string;
    };
  };

  faqOpen: {
    props: {
      /**
       * The name of the FAQ section that was opened.
       */
      name: string;
    };
  };

  positionTypeChange: {
    props: {
      chainId: number;
      poolAddress: Address;
      positionType: PositionType;
      prevPositionType: PositionType;
    };
  };

  formChange: {
    props: {
      /**
       * The name of the form that was changed.
       */
      formName: string;
      /**
       * The name of the input that was changed.
       */
      inputName: string;
      /**
       * The new value of the input.
       */
      inputValue: string;
      /**
       * The chain ID associated with the form.
       */
      chainId: number;
      /**
       * The address of the pool associated with the form.
       */
      poolAddress: Address;
    };
  };

  transactionDetailsOpen: {
    props: {
      chainId: number;
      poolAddress: Address;
      positionType: PositionType;
      positionSize: string;
      feeAmount: string;
    };
  };

  transactionSubmit: {
    props: {
      transactionHash: string;
      transactionsType: TransactionType;
      positionType: PositionType;
      poolAddress: Address;
      chainId: number;
    };
  };

  transactionSuccess: {
    props: {
      transactionHash: string;
      transactionsType: TransactionType;
      positionType: PositionType;
      poolAddress: Address;
      chainId: number;
    };
  };
}

export type PlausibleEvent = keyof PlausibleEventParamsMap;

export interface PlausibleFunction {
  <T extends PlausibleEvent>(
    event: T,
    ...args: PlausibleEventParamsMap[T] extends void
      ? []
      : [params: PlausibleEventParamsMap[T]]
  ): void;
  q?: unknown[][];
}

// Augment the global `window` object to include the `plausible` function.
declare global {
  interface Window {
    plausible: PlausibleFunction;
  }
}

type PositionType = "long" | "short" | "lp";
type TransactionType = "open" | "close";
