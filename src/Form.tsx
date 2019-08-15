import React, { useState } from "react";

import { FormValues, FormErrors } from "./types";
import { FormContextProvider } from "./FormContext";

const Form: React.FC = ({ children }) => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  return (
    <form>
      <FormContextProvider
        value={{ formValues, setFormValues, formErrors, setFormErrors }}
      >
        {children}
      </FormContextProvider>
    </form>
  );
};

export default Form;
