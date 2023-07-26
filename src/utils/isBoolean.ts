/**
 * Check if value is a string
 * @param value - any
 * @returns boolean value
 */

export function isBoolean(value: any) {
  if (typeof value === "function") return typeof value() === "boolean";
  return typeof value === "boolean";
}
