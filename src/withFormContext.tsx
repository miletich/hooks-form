import React from "react";

import { FormContext } from "./types";
import { FormContextConsumer } from "./FormContext";

const withFormContext = <Props, Instance>(
  Component: React.RefForwardingComponent<Instance, Props & FormContext>
) =>
  React.forwardRef<Instance, Props>((props, ref) => (
    <FormContextConsumer>
      {formContext => <Component {...props} {...formContext} ref={ref} />}
    </FormContextConsumer>
  ));

export default withFormContext;
