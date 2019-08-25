import { FormValue, FormError, FormValidator } from "./types";

export const composeValidators = (...validators: Array<FormValidator>) => (
  value: FormValue
) =>
  validators.reduce(
    (acc: Array<FormError>, cur: FormValidator) => [...acc, ...cur(value)],
    []
  );

export const isRequired: FormValidator = value =>
  value ? [] : ["This field is required"];

export const isValidEmail: FormValidator = value =>
  typeof value === "string" &&
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? []
    : ["Invalid email address"];

export const hasMaxLength: (limit: number) => FormValidator = limit => value =>
  typeof value === "string" && value.length <= limit
    ? []
    : [`You cannot enter more than ${limit} characters`];

export const hasMinLength: (limit: number) => FormValidator = limit => value =>
  typeof value === "string" && value.length >= limit
    ? []
    : [`You must enter at least ${limit} characters`];

export const hasUppercaseCharacter: FormValidator = value =>
  typeof value === "string" && /[A-Z]/.test(value)
    ? []
    : ["It must include at least a single uppercase letter"];

export const isSameAs: <T extends FormValue>(
  referenceFieldValue: T
) => FormValidator = referenceFieldValue => value =>
  referenceFieldValue === value ? [] : ["Entered values must match"];
