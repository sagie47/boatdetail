"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackEvent } from "@/lib/tracking";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventData?: Record<string, unknown>;
  href: string;
};

export default function TrackedLink({
  children,
  eventName,
  eventData,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventData);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
