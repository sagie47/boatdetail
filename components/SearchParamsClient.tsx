"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchParamsClient() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("section") === "quote") {
      const quoteSection = document.getElementById("quote");
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return null;
}
