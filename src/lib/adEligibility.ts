export function isAdEligiblePath(pathname: string | null, eligiblePaths: readonly string[]) {
  return pathname !== null && eligiblePaths.includes(pathname);
}
