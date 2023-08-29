/**
 * Validates form
 * @param form - form object
 * @param requiredFields - array of required fields
 * @param hasErrorField - boolean to show if form contains an error field
 * @returns returns a boolean
 */

export function validateForm<T extends object>(
  form: T,
  requiredFields: string[],
  hasErrorField: boolean
) {
  if (hasErrorField) return false;
  for (const key of requiredFields) {
    if (key in form && (key === "" || key === undefined)) return false;
  }
  return true;
}
