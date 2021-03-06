import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./components/App";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ControlledForm from "./components/ControlledForm";
import CallbackAsProps from "./components/CallbackAsProps";
import LifeComponent from "./components/LifeComponent";
import ConditionalRender from "./components/ConditionalRender";
import TernaryRender from "./components/TernaryRender";
import MyToDoList from "./components/MyToDoList";
import UsersOnLine from "./components/UsersOnLine";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
    <Counter />
    <ControlledInput />
    <ControlledForm />
    <CallbackAsProps />
    <LifeComponent />
    <ConditionalRender />
    <TernaryRender />
    <MyToDoList />
    <UsersOnLine />
  </HashRouter>,
  document.getElementById("root")
);
