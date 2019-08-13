import React, { useState } from "react";

import { FormValues } from "./types";

const App: React.FC = () => {
  const [state, setState] = useState<FormValues>({});

  return (
    <form>
      <input
        type="email"
        name="email"
        value={state.email || ""}
        onChange={e => {
          e.persist();
          setState(state => ({ ...state, [e.target.name]: e.target.value }));
        }}
      />
      <input
        type="password"
        name="password"
        value={state.password || ""}
        onChange={e => {
          e.persist();
          setState(state => ({ ...state, [e.target.name]: e.target.value }));
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
