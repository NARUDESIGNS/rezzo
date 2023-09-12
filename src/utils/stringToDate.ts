/**
 * Converts string to date
 * @param dateString - string
 * @returns date value
 * @example
 * // Example usage:
  const dateString = '05/03/2023'; // DD/MM/YYYY format
  const date = stringToDate(dateString);
 */

export function stringToDate(dateString: string) {
  const [day, month, year] = dateString.split("/");
  // Note: Months are 0-based in JavaScript Date objects, so we subtract 1 from the month
  return new Date(Number(year), Number(month) - 1, Number(day));
}
