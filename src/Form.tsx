import React, { useState } from "react";

import { FormValues, FormErrors } from "./types";
import { FormContextProvider } from "./FormContext";

type RenderProps = {
  isSubmittable?: boolean;
  values?: FormValues;
};

type Props = {
  children: ({ values, isSubmittable }: RenderProps) => React.ReactNode;
};

const Form: React.FC<Props> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const isFormValid = !Object.values(formErrors).flat().length;
  const isFormPristine = Object.values(formValues).flat().length === 0;
  const isSubmittable = isFormValid && !isFormPristine;

  return (
    <form>
      <FormContextProvider
        value={{ formValues, setFormValues, formErrors, setFormErrors }}
      >
        {children && children({ isSubmittable, values: formValues })}
      </FormContextProvider>
    </form>
  );
};

export default Form;
