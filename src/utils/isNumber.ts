/**
 * Check if value is a number
 * @param value - any
 * @returns boolean value
 */

export function isNumber(value: any) {
  if (typeof value === "function") return typeof value() === "number";
  return typeof value === "number";
}
