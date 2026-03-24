"use client";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import { trackEvent } from "@/lib/tracking";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventData?: Record<string, unknown>;
  href: string;
};

const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(function TrackedLink({
  children,
  eventName,
  eventData,
  onClick,
  ...props
}, ref) {
  return (
    <a
      ref={ref}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }

        trackEvent(eventName, eventData);
      }}
    >
      {children}
    </a>
  );
});

export default TrackedLink;
