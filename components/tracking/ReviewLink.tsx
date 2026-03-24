"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { siteConfig } from "@/lib/site";

import TrackedLink from "./TrackedLink";

type ReviewLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
  placement: string;
};

export default function ReviewLink({
  children,
  placement,
  rel,
  target,
  ...props
}: ReviewLinkProps) {
  const relValue = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <TrackedLink
      {...props}
      href={siteConfig.reviewUrl}
      target={target ?? "_blank"}
      rel={relValue}
      eventName="review_click"
      eventData={{ placement }}
    >
      {children}
    </TrackedLink>
  );
}
