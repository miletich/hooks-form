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
    {({ isSubmittable, values }) => (
      <>
        <Field name="email" type="email" validate={validateEmail} />
        <Field type="password" name="password" validate={validatePassword} />
        <Field type="number" name="age" />
        {values && values.age < 18 && (
          <Field type="email" name="parentsEmail" validate={validateEmail} />
        )}
        <button type="submit" disabled={!isSubmittable}>
          Submit
        </button>
      </>
    )}
  </Form>
);

export default App;
