"use client";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import { siteConfig } from "@/lib/site";
import { trackPhoneClickConversion } from "@/lib/tracking";

type CallLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
  placement: string;
};

const CallLink = forwardRef<HTMLAnchorElement, CallLinkProps>(function CallLink({
  children,
  placement,
  onClick,
  ...props
}, ref) {
  return (
    <a
      ref={ref}
      {...props}
      href={siteConfig.phoneHref}
      onClick={(event) => {
        event.preventDefault();

        trackPhoneClickConversion({
          placement,
          phoneNumber: siteConfig.phoneIntl,
          onComplete: () => {
            window.location.href = siteConfig.phoneHref;
          },
        });

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
});

export default CallLink;
