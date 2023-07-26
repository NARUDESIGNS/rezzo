/**
 * Returns a function to validate minimum number
 * @param number - number
 * @returns returns a boolean or a validation function which returns a boolean
 * @example
 * ```javascript
 * const validateMinNumber = setMinNumber(5);
 * validateMinNumber(1); // -> false
 * validateMinNumber(10); // -> true
 * ```
 */

export function setMinNumber(number: number) {
  return (value?: number) => {
    if (value) {
      return value >= number;
    }
    return false;
  };
}
