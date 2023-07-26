import { expect, test } from "vitest";
import { isString } from "./isString";

test("Check if value is a number", () => {
  expect(isString(5)).toBe(false);
  expect(isString("52")).toBe(true);
  expect(isString(true)).toBe(false);
  expect(isString("test")).toBe(true);
  expect(isString(() => 4)).toBe(false);
  expect(isString(() => "test")).toBe(true);
});
