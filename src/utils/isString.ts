/**
 * Check if value is a string
 * @param value - any
 * @returns boolean value
 */

export function isString(value: any) {
  if (typeof value === "function") return typeof value() === "string";
  return typeof value === "string";
}
