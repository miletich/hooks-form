import React, { useState } from "react";

import { FormValues } from "./types";
import { FormContextProvider } from "./FormContext";

const Form: React.FC = ({ children }) => {
  const [state, setState] = useState<FormValues>({});

  return (
    <form>
      <FormContextProvider
        value={{ formValues: state, setFormValues: setState }}
      >
        {children}
      </FormContextProvider>
    </form>
  );
};

export default Form;
