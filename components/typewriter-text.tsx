"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  highlightWord?: string;
  typingSpeedMs?: number;
  startDelayMs?: number;
};

export default function TypewriterText({
  text,
  className,
  highlightWord,
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
  const highlightStart = highlightWord ? typed.indexOf(highlightWord) : -1;
  const highlightedText =
    highlightStart >= 0 && highlightWord ? (
      <>
        {typed.slice(0, highlightStart)}
        <span className="highlight">
          {typed.slice(highlightStart, highlightStart + highlightWord.length)}
        </span>
        {typed.slice(highlightStart + highlightWord.length)}
      </>
    ) : (
      typed
    );

  return (
    <span className={className}>
      <span>{highlightedText}</span>
      <span
        aria-hidden="true"
        className={`typewriter-cursor ${isFinished ? "typewriter-cursor--done" : ""}`}
      >
        |
      </span>
    </span>
  );
}
