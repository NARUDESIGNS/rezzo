import { expect, test } from "vitest";
import { setMaxNumber } from "./setMaxNumber";

test("Validate maximum length of string", () => {
  const validateLength = setMaxNumber(5);

  expect(validateLength()).toBe(true);
  expect(validateLength(undefined)).toBe(true);
  expect(validateLength(5)).toBe(true);
  expect(validateLength(10)).toBe(false);
  expect(validateLength(-10)).toBe(true);
});
