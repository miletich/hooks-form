import React, { useState } from "react";

import { FormValues } from "./types";
import Field from "./Field";
import { FormContextProvider } from "./FormContext";

const App: React.FC = () => {
  const [state, setState] = useState<FormValues>({});

  return (
    <form>
      <FormContextProvider
        value={{ formValues: state, setFormValues: setState }}
      >
        <Field name="email" type="email" />
        <Field type="password" name="password" />
        <button type="submit">Submit</button>
      </FormContextProvider>
    </form>
  );
};

export default App;
