import { expect, test } from "vitest";
import { setMinLength } from "./setMinLength";

test("Validate minimum length of string", () => {
  const validateLength = setMinLength(5);
  expect(validateLength()).toBe(false);
  expect(validateLength(undefined)).toBe(false);
  expect(validateLength("test")).toBe(false);
  expect(validateLength("narudesigns")).toBe(true);
  expect(validateLength("123")).toBe(false);
  expect(validateLength("123456")).toBe(true);
});
