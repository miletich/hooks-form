import React, { useCallback } from "react";

import { FormValues } from "./types";

type Props = {
  formState: FormValues;
  name: string;
  type: string;
  setFormState: (value: React.SetStateAction<FormValues>) => void;
};

const Field: React.FC<Props> = React.memo(
  ({ name, type, formState, setFormState }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setFormState(state => ({ ...state, [e.target.name]: e.target.value }));
      },
      [formState[name]]
    );

    return (
      <input
        name={name}
        type={type}
        value={formState[name] || ""}
        onChange={handleChange}
      />
    );
  },
  (prevProps, nextProps) =>
    prevProps.formState[prevProps.name] === nextProps.formState[nextProps.name]
);

export default Field;