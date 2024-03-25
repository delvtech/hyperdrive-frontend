export function formatDate(dateInMs: number): string {
  const date = new Date(dateInMs);
  const month = date.toLocaleString("default", { month: "short" });
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
