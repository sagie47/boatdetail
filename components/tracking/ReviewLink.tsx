"use client";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import { siteConfig } from "@/lib/site";

import TrackedLink from "./TrackedLink";

type ReviewLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  children: ReactNode;
  placement: string;
};

const ReviewLink = forwardRef<HTMLAnchorElement, ReviewLinkProps>(function ReviewLink({
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
    <TrackedLink
      ref={ref}
      {...props}
      href={siteConfig.reviewUrl}
      target={resolvedTarget}
      rel={relValue}
      eventName="review_click"
      eventData={{ placement }}
    >
      {children}
    </TrackedLink>
  );
});

export default ReviewLink;
