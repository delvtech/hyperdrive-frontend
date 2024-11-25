import { ComponentPropsWithoutRef, ReactElement, useRef } from "react";
import { useAccount } from "wagmi";

interface ExternalLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  /**
   * A convenience prop to set the `target` attribute to `_blank` if `true`.
   */
  newTab?: boolean;
}

/**
 * A link to an external site that tracks clicks with Plausible and ensures the
 * `rel` attribute includes `noopener`.
 *
 * If linking to a site not owned by DELV, consider using `rel="noreferrer"` to
 * additionally hide the referrer header from the linked site.
 *
 * @see [MDN - rel=noopener](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener)
 */
export function ExternalLink({
  target,
  newTab = target === "_blank",
  rel = "",
  onClick,
  children,
  ...rest
}: ExternalLinkProps): ReactElement {
  const ref = useRef<HTMLAnchorElement>(null);
  const { address: connectedWallet } = useAccount();

  return (
    <a
      {...rest}
      ref={ref}
      target={newTab ? "_blank" : target}
      rel={`${rel} noopener`}
      onClick={(e) => {
        window.plausible("externalLinkClick", {
          props: {
            name: ref.current?.textContent ?? undefined,
            url: rest.href,
            connectedWallet,
          },
        });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
