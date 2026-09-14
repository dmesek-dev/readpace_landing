"use client";
import { useState } from "react";
import { calculateWpm } from "@/lib/reading";

export function WpmCalculator() {
  const [words, setWords] = useState("500");
  const [minutes, setMinutes] = useState("2");
  const [seconds, setSeconds] = useState("0");
  const wordCount = Number(words),
    minuteCount = Number(minutes),
    secondCount = Number(seconds);
  const validTime =
    Number.isFinite(minuteCount) &&
    Number.isFinite(secondCount) &&
    Number.isInteger(minuteCount) &&
    Number.isInteger(secondCount) &&
    minuteCount >= 0 &&
    secondCount >= 0 &&
    secondCount < 60;
  const duration = minuteCount * 60 + secondCount;
  const result = validTime ? calculateWpm(wordCount, duration) : null;
  return (
    <section className="tool-panel" aria-label="Words per minute calculator">
      <div className="calculator-grid">
        <div>
          <label htmlFor="word-count">
            Words read
            <input
              id="word-count"
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              value={words}
              onChange={(event) => setWords(event.target.value)}
              aria-describedby="calculator-help"
            />
          </label>
          <div className="time-fields">
            <label htmlFor="minutes">
              Minutes
              <input
                id="minutes"
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                value={minutes}
                onChange={(event) => setMinutes(event.target.value)}
              />
            </label>
            <label htmlFor="seconds">
              Seconds
              <input
                id="seconds"
                type="number"
                min="0"
                max="59"
                step="1"
                inputMode="numeric"
                value={seconds}
                onChange={(event) => setSeconds(event.target.value)}
              />
            </label>
          </div>
          <p id="calculator-help">
            Enter a whole word count and elapsed time. Seconds must be between 0
            and 59.
          </p>
        </div>
        <div
          className="calculator-result"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <strong>
            {result === null ? "—" : result.toLocaleString("en-US")}
          </strong>
          <span>words per minute</span>
          <p>
            {result === null
              ? "Enter positive words and time to calculate your WPM."
              : `${wordCount.toLocaleString("en-US")} words × 60 ÷ ${duration.toLocaleString("en-US")} seconds`}
          </p>
        </div>
      </div>
      <noscript>
        <p>
          Enable JavaScript for live calculations, or calculate WPM manually:
          words read × 60 ÷ seconds spent reading.
        </p>
      </noscript>
    </section>
  );
}
