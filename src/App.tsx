import React from "react";

import Form from "./Form";
import Field from "./Field";

const App: React.FC = () => (
  <Form>
    <Field name="email" type="email" />
    <Field type="password" name="password" />
    <button type="submit">Submit</button>
  </Form>
);

export default App;
