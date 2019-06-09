import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

import "./index.scss";

const DOMelement = document.querySelector("#app");

render(<App />, DOMelement);
