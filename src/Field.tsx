import React, { useCallback } from "react";

import { FormContext, FormValidator } from "./types";
import withFormContext from "./withFormContext";
import { areArraysEqual } from "./utils";

type ExternalProps = {
  name: string;
  type: string;
  validate?: FormValidator;
  isCrossvalidated?: boolean;
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
    const fieldErrors = formErrors[name] || [];

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
        {fieldErrors.map(error => (
          <p key={error}>{error}</p>
        ))}
      </>
    );
  },

  // the component will be rerendered every time any value from the context
  // changes, unless:
  (prevProps, nextProps) => {
    const { name, isCrossvalidated, validate, setFormErrors } = nextProps;

    const prevFieldValue = prevProps.formValues[name];
    const nextFieldValue = nextProps.formValues[name];
    const hasValueChanged = prevFieldValue !== nextFieldValue;

    if (!isCrossvalidated) return !hasValueChanged;
    if (hasValueChanged) return !hasValueChanged;

    // codependent filed change check cannot be used for avoiding unnecessary
    // rerenders since the component needs to rerender twice after its
    // codependent value changes: once for the validator to pick up the
    // new codependent field value, and once more with new errors.
    const prevValidate = prevProps.validate;
    const prevPropsErrors = prevProps.formErrors[name];
    const staleValidatorErrors = prevValidate
      ? prevValidate(prevFieldValue)
      : [];

    // `prevPropsErrors` will be undefined if the field has not been changed yet,
    // thus making haveErrorsChanged `true` even if the field is untouched
    const prevErrors = prevPropsErrors ? prevPropsErrors : staleValidatorErrors;
    const nextErrors = validate ? validate(nextFieldValue) : [];
    const haveErrorsChanged = !areArraysEqual(prevErrors, nextErrors);

    haveErrorsChanged &&
      setFormErrors(state => ({
        ...state,
        [name]: nextErrors
      }));

    return !haveErrorsChanged;
  }
);

export default withFormContext<ExternalProps, React.ElementType<Props>>(Field);
