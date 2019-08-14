import React from "react";

export type FormValue = string | number;

export type FormError = string | void;

export type FormValues = { [key: string]: FormValue };

export type FormValidator = (value: FormValue) => Array<FormError>;

export type SetFormValues = (value: React.SetStateAction<FormValues>) => void;

export type FormContext = {
  formValues: FormValues;
  setFormValues: SetFormValues;
};
