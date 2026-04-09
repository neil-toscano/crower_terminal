/** Same-origin relative paths only; prevents open redirects. */
export function safeCallbackUrl(raw: string | null | undefined, fallback: string) {
  if (!raw || typeof raw !== "string") return fallback;
  const trimmed = raw.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//")) return fallback;
  return trimmed;
}
