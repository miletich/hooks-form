import {
  composeValidators,
  isRequired,
  isValidEmail,
  hasMinLength,
  hasMaxLength,
  hasUppercaseCharacter
} from "./validators";

describe("composeValidators", () => {
  it("composes validators correctly", () => {
    expect(
      composeValidators(isRequired, isValidEmail)("d@miletich.cc")
    ).toEqual([]);
    expect(composeValidators(isRequired, isValidEmail)("miletich.cc")).toEqual([
      "Invalid email address"
    ]);
    expect(composeValidators(isRequired, isValidEmail)("")).toEqual([
      "This field is required",
      "Invalid email address"
    ]);
    expect(composeValidators()("d@tc.tc")).toEqual([]);
  });
});

describe("isRequired", () => {
  it("returns nothing when given some input", () => {
    expect(isRequired(444)).toEqual([]);
  });

  it("returns prompt text on no input", () => {
    // @ts-ignore
    expect(isRequired()).toEqual(["This field is required"]);
  });
});

describe("isValidEmail", () => {
  it("returns nothing when given a valid email", () => {
    expect(isValidEmail("d@miletich.cc")).toEqual([]);
  });

  it("returns promt text when given an invalid email", () => {
    expect(isValidEmail("d@miletich")).toEqual(["Invalid email address"]);
  });
});

describe("hasMaxLength", () => {
  const limited = hasMaxLength(3);

  it("returns nothing when given a string withing the character limit", () => {
    expect(limited("a")).toEqual([]);
    expect(limited("abc")).toEqual([]);
  });

  it("returns prompt when given a string exceeding the limit", () => {
    expect(limited("abcd")).toEqual([
      "You cannot enter more than 3 characters"
    ]);
  });
});

describe("hasMinLength", () => {
  const limited = hasMinLength(3);

  it("returns nothing when given a string withing the character limit", () => {
    expect(limited("abcd")).toEqual([]);
    expect(limited("abc")).toEqual([]);
  });

  it("returns prompt when given a string under the limit", () => {
    expect(limited("ab")).toEqual(["You must enter at least 3 characters"]);
  });
});

describe("hasUppercaseCharacter", () => {
  it("returns nothing when given a string containing an uppercase character", () => {
    expect(hasUppercaseCharacter("A")).toEqual([]);
  });

  it("returns a promt when given a string without an uppercase character", () => {
    expect(hasUppercaseCharacter("a")).toEqual([
      "It must include at least a single uppercase letter"
    ]);
  });
});
