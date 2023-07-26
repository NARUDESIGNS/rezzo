import { expect, test } from "vitest";
import { isBoolean } from "./isBoolean";

test("Check if value is boolean", () => {
  expect(isBoolean(5)).toBe(false);
  expect(isBoolean(5 < 2)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean(typeof 5 === "number")).toBe(true);
  expect(isBoolean(() => 4)).toBe(false);
  expect(isBoolean(() => false)).toBe(true);
});
