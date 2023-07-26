/**
 * Returns a function to validate maximum number
 * @param number - number
 * @returns returns a boolean or a validation function which returns a boolean
 * @example
 * ```javascript
 * const validateMaxNumber = setMaxNumber(5);
 * validateMaxNumber(1); // -> true
 * validateMaxNumber(10); // -> false
 * ```
 */

export function setMaxNumber(number: number) {
  return (value?: number) => {
    if (value) {
      return value <= number;
    }
    return true;
  };
}
