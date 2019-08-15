import React from "react";

import { FormContext } from "./types";

const formContext: FormContext = {
  formValues: {},
  setFormValues: () => undefined,
  formErrors: {},
  setFormErrors: () => undefined
};

const { Provider, Consumer } = React.createContext<FormContext>(formContext);

export { Provider as FormContextProvider };
export { Consumer as FormContextConsumer };
