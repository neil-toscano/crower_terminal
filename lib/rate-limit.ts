type RateLimitOptions = {
  maxHits: number;
  windowMs: number;
  countHitsSince: (since: Date) => Promise<number>;
  message: string;
};

type RateLimitResult =
  | { ok: true }
  | { ok: false; error: string; retryAfterSeconds: number };

export async function enforceRateLimit(options: RateLimitOptions): Promise<RateLimitResult> {
  const since = new Date(Date.now() - options.windowMs);
  const hits = await options.countHitsSince(since);

  if (hits < options.maxHits) {
    return { ok: true };
  }

  return {
    ok: false,
    error: options.message,
    retryAfterSeconds: Math.ceil(options.windowMs / 1000),
  };
}
