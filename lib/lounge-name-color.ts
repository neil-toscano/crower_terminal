/** Color estable por usuario (se repite cada 5): mismo id → mismo color siempre. */
const LOUNGE_NAME_COLORS = [
  "text-sky-400",
  "text-emerald-400",
  "text-amber-400",
  "text-violet-400",
  "text-rose-400",
  "text-red-400",
  "text-orange-400",
  "text-yellow-400",
  "text-lime-400",
  "text-green-400",
  "text-teal-400",
  "text-cyan-400",
  "text-indigo-400",
  "text-purple-400",
  "text-fuchsia-400",
  "text-pink-400",
] as const;

export function loungeNameColorClass(userId: string): string {
  let h = 0;
  for (let i = 0; i < userId.length; i++) {
    h = Math.imul(31, h) + userId.charCodeAt(i);
  }
  return LOUNGE_NAME_COLORS[Math.abs(h) % LOUNGE_NAME_COLORS.length];
}
