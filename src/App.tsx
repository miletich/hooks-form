import React from "react";

import Form from "./Form";
import Field from "./Field";
import {
  composeValidators,
  isRequired,
  isValidEmail,
  hasMaxLength,
  hasMinLength,
  hasUppercaseCharacter,
  isSameAs
} from "./validators";
import { FormValue } from "./types";

const validateEmail = composeValidators(isRequired, isValidEmail);
const validatePassword = composeValidators(
  isRequired,
  hasMinLength(8),
  hasMaxLength(100),
  hasUppercaseCharacter
);

const App: React.FC = () => (
  <Form>
    {({ values = {}, isSubmittable }) => {
      const validateRepeatPassword = composeValidators(
        validateEmail,
        isSameAs<string extends any ? FormValue : never>(values.email)
      );

      return (
        <>
          <Field type="email" name="email" validate={validateEmail} />
          <Field
            type="email"
            name="confirmEmail"
            validate={validateRepeatPassword}
            isCrossvalidated
          />
          <Field type="password" name="password" validate={validatePassword} />
          <Field type="number" name="age" />
          {values.age < 18 && (
            <Field type="email" name="parentsEmail" validate={validateEmail} />
          )}
          <button type="submit" disabled={!isSubmittable}>
            Submit
          </button>
        </>
      );
    }}
  </Form>
);

export default App;
