import { expect, test } from "vitest";
import { setMinNumber } from "./setMinNumber";

test("Validate minimum length of string", () => {
  const validateLength = setMinNumber(5);

  expect(validateLength()).toBe(false);
  expect(validateLength(undefined)).toBe(false);
  expect(validateLength(5)).toBe(true);
  expect(validateLength(10)).toBe(true);
  expect(validateLength(-10)).toBe(false);
});
