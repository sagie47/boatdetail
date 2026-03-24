"use client";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import { siteConfig } from "@/lib/site";
import { trackBookingClickConversion } from "@/lib/tracking";

type BookingLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
  placement: string;
};

const BookingLink = forwardRef<HTMLAnchorElement, BookingLinkProps>(function BookingLink({
  children,
  placement,
  rel,
  target,
  ...props
}, ref) {
  const resolvedTarget = target ?? "_blank";
  const relValue =
    rel ?? (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      ref={ref}
      {...props}
      href={siteConfig.bookingUrl}
      target={resolvedTarget}
      rel={relValue}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }

        trackBookingClickConversion({
          placement,
          destination: siteConfig.bookingUrl,
        });
      }}
    >
      {children}
    </a>
  );
});

export default BookingLink;
