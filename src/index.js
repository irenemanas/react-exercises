import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./components/App";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
    <Counter />
    <ControlledInput />
  </HashRouter>,
  document.getElementById("root")
);
