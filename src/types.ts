import React from "react";

export type FormValues = { [key: string]: string };

export type SetFormValues = (value: React.SetStateAction<FormValues>) => void;

export type FormContext = {
  formValues: FormValues;
  setFormValues: SetFormValues;
};
