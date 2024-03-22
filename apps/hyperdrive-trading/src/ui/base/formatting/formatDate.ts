export function formatDate(dateInMs: number): string {
  return new Date(dateInMs).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
