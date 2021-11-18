import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>Learning Log</h1>
      <input type="text" placeholder="" />
      <a>Add </a>
      <a>Edit </a>
      <div />
      <a>Delete</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
