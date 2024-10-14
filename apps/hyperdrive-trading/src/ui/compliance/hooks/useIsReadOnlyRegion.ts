const READONLY_REGIONS = ["us"];

/**
 * A hook for determining if the user is in a read-only region.
 */
export function useIsReadOnlyRegion(): boolean | undefined {
  const urlRegion = new URL(window.location.href).searchParams
    .get("region")
    ?.toLocaleLowerCase();
  return urlRegion ? READONLY_REGIONS.includes(urlRegion) : undefined;
}
