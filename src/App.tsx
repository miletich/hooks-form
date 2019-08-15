import React from "react";

import Form from "./Form";
import Field from "./Field";
import {
  composeValidators,
  isRequired,
  isValidEmail,
  hasMaxLength,
  hasMinLength,
  hasUppercaseCharacter
} from "./validators";

const validateEmail = composeValidators(isRequired, isValidEmail);
const validatePassword = composeValidators(
  isRequired,
  hasMinLength(8),
  hasMaxLength(100),
  hasUppercaseCharacter
);

const App: React.FC = () => (
  <Form>
    {isSubmittable => (
      <>
        <Field name="email" type="email" validate={validateEmail} />
        <Field type="password" name="password" validate={validatePassword} />
        <button type="submit" disabled={!isSubmittable}>
          Submit
        </button>
      </>
    )}
  </Form>
);

export default App;
