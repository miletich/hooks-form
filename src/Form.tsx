import React, { useState } from "react";

import { FormValues, FormErrors, FormContext } from "./types";
import { FormContextProvider } from "./FormContext";

type RenderProp = (values: {
  values?: FormValues;
  isSubmittable?: boolean;
}) => React.ReactElement;

type Props = {
  children: RenderProp;
};

const Form: React.FC<Props> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const isFormValid = !Object.values(formErrors).flat().length;
  const isFormPristine = Object.values(formValues).length === 0;
  const isSubmittable = isFormValid && !isFormPristine;

  const formContext: FormContext = {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors
  };

  return (
    <form>
      <FormContextProvider value={formContext}>
        {children({ values: formValues, isSubmittable })}
      </FormContextProvider>
    </form>
  );
};

export default Form;
