"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GlobalEffects() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanupObserver: (() => void) | undefined;

    const runRevealPass = () => {
      const reveals = document.querySelectorAll(".reveal");

      if (!("IntersectionObserver" in window)) {
        reveals.forEach((element) => element.classList.add("visible"));
        return undefined;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );

      reveals.forEach((element) => {
        element.classList.remove("visible");
        observer.observe(element);
      });

      return () => observer.disconnect();
    };

    const timer = window.setTimeout(() => {
      cleanupObserver = runRevealPass();
    }, 40);

    return () => {
      window.clearTimeout(timer);
      cleanupObserver?.();
    };
  }, [pathname]);

  return null;
}
