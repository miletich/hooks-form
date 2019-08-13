import React, { useCallback } from "react";

import { FormContext } from "./types";
import withFormContext from "./withFormContext";

type ExternalProps = {
  name: string;
  type: string;
};

type Props = ExternalProps & FormContext;

const Field: React.FC<Props> = React.memo(
  ({ name, type, formValues, setFormValues }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
      },
      [setFormValues]
    );

    return (
      <input
        name={name}
        type={type}
        value={formValues[name] || ""}
        onChange={handleChange}
      />
    );
  },
  (prevProps, nextProps) =>
    prevProps.formValues[prevProps.name] ===
    nextProps.formValues[nextProps.name]
);

export default withFormContext<ExternalProps, React.ElementType<Props>>(Field);
