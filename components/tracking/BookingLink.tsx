"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { trackBookingClickConversion } from "@/lib/tracking";

type BookingLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
  placement: string;
};

export default function BookingLink({
  children,
  placement,
  rel,
  target,
  ...props
}: BookingLinkProps) {
  const relValue = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      {...props}
      href={siteConfig.bookingUrl}
      target={target ?? "_blank"}
      rel={relValue}
      onClick={(event) => {
        trackBookingClickConversion({
          placement,
          destination: siteConfig.bookingUrl,
        });
        props.onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
