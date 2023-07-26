import { expect, test } from "vitest";
import { isNumber } from "./isNumber";

test("Check if value is a number", () => {
  expect(isNumber(5)).toBe(true);
  expect(isNumber("52")).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(typeof 5 === "number")).toBe(false);
  expect(isNumber(() => 4)).toBe(true);
});
