/**
 * Returns a function to validate minimum length of string
 * @param minLength - number
 * @returns returns a boolean or a validation function which returns a boolean
 * @example
 * ```javascript
 * const validateMinLength = setMinLength(5);
 * validateMinLength('test'); // -> false
 * validateMinLength('narudesigns'); // -> true
 * ```
 */

export function setMinLength(minLength: number) {
  return (value?: string) => {
    if (value) {
      return value.length >= minLength;
    }

    return false;
  };
}
