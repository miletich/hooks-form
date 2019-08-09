import React from "react";

const App: React.FC = () => {
  return (
    <form>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
