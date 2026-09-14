/** Words separated by whitespace; punctuation on its own is not a word. */
export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}

export function calculateWpm(words: number, seconds: number): number | null {
  if (
    !Number.isFinite(words) ||
    !Number.isFinite(seconds) ||
    words <= 0 ||
    seconds <= 0 ||
    !Number.isInteger(words)
  )
    return null;
  const result = (words * 60) / seconds;
  return Number.isFinite(result) ? Math.round(result) : null;
}

export function formatTime(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}
