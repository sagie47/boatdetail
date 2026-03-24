"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { trackPhoneClickConversion } from "@/lib/tracking";

type CallLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
  placement: string;
};

export default function CallLink({
  children,
  placement,
  onClick,
  ...props
}: CallLinkProps) {
  return (
    <a
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
}
