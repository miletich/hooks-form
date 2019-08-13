import React, { useState } from "react";

import { FormValues } from "./types";
import Field from "./Field";

const App: React.FC = () => {
  const [state, setState] = useState<FormValues>({});

  return (
    <form>
      <Field
        name="email"
        type="email"
        formState={state}
        setFormState={setState}
      />
      <Field
        type="password"
        name="password"
        formState={state}
        setFormState={setState}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
