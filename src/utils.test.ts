import { areArraysEqual } from "./utils";

describe("areArraysEqual", () => {
  it('returns "true" if two arrays are equal', () => {
    expect(areArraysEqual([], [])).toBe(true);
    expect(areArraysEqual([1, 2], [2, 1])).toBe(true);
    expect(areArraysEqual(["a", "b", "c"], ["b", "c", "a"])).toBe(true);
  });

  it('returns "false" if two arrays are not equal', () => {
    expect(areArraysEqual([true, false], [false])).toBe(false);
    expect(areArraysEqual([1, 2, 3], [2, 3, 4])).toBe(false);
  });
});
