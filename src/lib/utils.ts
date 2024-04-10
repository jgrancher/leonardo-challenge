export function pad(n: number | null): string {
  if (!n) return "-";
  return n.toString().padStart(2, "0");
}
