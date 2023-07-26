import { expect, test } from "vitest";
import { setMaxLength } from "./setMaxLength";

test("Validate maximum length of string", () => {
  const validateLength = setMaxLength(5);
  expect(validateLength()).toBe(true);
  expect(validateLength(undefined)).toBe(true);
  expect(validateLength("test")).toBe(true);
  expect(validateLength("narudesigns")).toBe(false);
  expect(validateLength("123")).toBe(true);
  expect(validateLength("123456")).toBe(false);
});
