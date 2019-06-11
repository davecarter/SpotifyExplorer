import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/App";

import "./index.scss";

const DOMelement = document.querySelector("#app");

hydrate(
  <Router>
    <App />
  </Router>,
  DOMelement
);

export default App;
