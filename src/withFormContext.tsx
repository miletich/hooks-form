import React from "react";

import { FormContext } from "./types";
import { FormContextConsumer } from "./FormContext";

const withFormContext = <Props, Instance>(
  Component: React.RefForwardingComponent<Instance, Props & FormContext>
) =>
  React.forwardRef<Instance, Props>((props, ref) => (
    <FormContextConsumer>
      {({ formValues, setFormValues }) => (
        <Component
          {...props}
          ref={ref}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
    </FormContextConsumer>
  ));

export default withFormContext;
