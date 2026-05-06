"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  typingSpeedMs?: number;
  startDelayMs?: number;
};

export default function TypewriterText({
  text,
  className,
  typingSpeedMs = 42,
  startDelayMs = 560,
}: TypewriterTextProps) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    let current = 0;
    let ticker: number | undefined;
    const starter = window.setTimeout(() => {
      ticker = window.setInterval(() => {
        current += 1;
        setVisibleChars(current);

        if (current >= text.length) {
          window.clearInterval(ticker);
        }
      }, typingSpeedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(starter);
      if (ticker) {
        window.clearInterval(ticker);
      }
    };
  }, [startDelayMs, text, typingSpeedMs]);

  const typed = text.slice(0, visibleChars);
  const isFinished = visibleChars >= text.length;

  return (
    <span className={className}>
      <span>{typed}</span>
      <span
        aria-hidden="true"
        className={`typewriter-cursor ${isFinished ? "typewriter-cursor--done" : ""}`}
      >
        |
      </span>
    </span>
  );
}
