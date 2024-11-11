/**
 * The status of an instance or factory in the registry.
 */
export type Status = "active" | "sunset";

/**
 * Returns the status of an instance or factory in the registry according to the
 * ElementDAO registry data schema.
 */
export function getStatus(statusId: bigint): Status {
  switch (statusId) {
    case 1n:
      return "active";
    case 2n:
      return "sunset";
    default:
      throw new Error(`Unknown status ID: ${statusId}`);
  }
}
