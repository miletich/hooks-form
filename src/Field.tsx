import React, { useCallback } from "react";

import { FormContext, FormValidator } from "./types";
import withFormContext from "./withFormContext";

type ExternalProps = {
  name: string;
  type: string;
  validate?: FormValidator;
};

type Props = ExternalProps & FormContext;

const Field: React.FC<Props> = React.memo(
  ({
    name,
    type,
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    validate
  }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormValues(state => ({ ...state, [fieldName]: fieldValue }));
        validate &&
          setFormErrors(state => ({
            ...state,
            [fieldName]: validate(fieldValue)
          }));
      },
      [setFormValues, setFormErrors, validate]
    );

    return (
      <>
        <input
          name={name}
          type={type}
          value={formValues[name] || ""}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {formErrors[name] &&
          formErrors[name].length > 0 &&
          formErrors[name].map(error => <p key={String(error)}>{error}</p>)}
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.formValues[prevProps.name] ===
    nextProps.formValues[nextProps.name]
);

export default withFormContext<ExternalProps, React.ElementType<Props>>(Field);
