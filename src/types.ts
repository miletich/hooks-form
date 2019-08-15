import React from "react";

export type FormValue = string | number;

export type FormValues = { [key: string]: FormValue };

export type SetFormValues = (value: React.SetStateAction<FormValues>) => void;

export type FormError = string | undefined;

export type FormErrors = { [key: string]: Array<FormError> };

export type SetFormErrors = (values: React.SetStateAction<FormErrors>) => void;

export type FormValidator = (value: FormValue) => Array<FormError>;

export type FormContext = {
  formValues: FormValues;
  setFormValues: SetFormValues;
  formErrors: FormErrors;
  setFormErrors: SetFormErrors;
};
