/**
 * Returns a function to validate maximum length of string
 * @param maxLength - number
 * @returns returns a boolean or a validation function which returns a boolean
 * @example
 * ```javascript
 * const validateMaxLength = setMaxLength(5);
 * validateMaxLength('test'); // -> true
 * validateMaxLength('narudesigns'); // -> false
 * ```
 */

export function setMaxLength(maxLength: number) {
  return (value?: string) => {
    if (value) {
      return value.length <= maxLength;
    }

    return true;
  };
}
