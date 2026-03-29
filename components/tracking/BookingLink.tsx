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
  const bookingDestination = siteConfig.bookingEnabled
    ? siteConfig.bookingUrl
    : siteConfig.bookingFallbackUrl;
  const isExternal = /^https?:\/\//i.test(bookingDestination);
  const resolvedTarget = target ?? (isExternal ? "_blank" : "_self");
  const relValue =
    rel ?? (isExternal && resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      ref={ref}
      {...props}
      href={bookingDestination}
      target={resolvedTarget}
      rel={relValue}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }

        trackBookingClickConversion({
          placement,
          destination: bookingDestination,
        });
      }}
    >
      {children}
    </a>
  );
});

export default BookingLink;
