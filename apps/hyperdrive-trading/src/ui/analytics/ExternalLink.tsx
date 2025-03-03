import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import { ComponentPropsWithoutRef, ReactElement, useRef } from "react";
import { useAccount } from "wagmi";

interface ExternalLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  /**
   * A convenience prop to set the `target` attribute to `_blank` if `true`.
   */
  newTab?: boolean;
  /**
   * The icon to display next to the link text or `true` to use the default
   * external link icon.
   */
  icon?: ReactElement | boolean;
  /**
   * The name to use for the Plausible analytics event. Defaults to the link
   * text.
   */
  analyticsName?: string;
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
  icon,
  analyticsName,
  rel = "",
  onClick,
  children,
  className,
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
            name: analyticsName ?? ref.current?.textContent ?? undefined,
            url: rest.href,
            connectedWallet,
          },
        });
        onClick?.(e);
      }}
      className={classNames("group", className)}
    >
      {children}
      {icon === true ? (
        <ArrowTopRightOnSquareIcon className="size-4 opacity-60 group-hover:opacity-100" />
      ) : (
        icon && icon
      )}
    </a>
  );
}
