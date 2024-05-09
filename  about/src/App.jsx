import React from "react";
import ReactDOM from "react-dom";

import "./index.{{CSS_EXTENSION}}";
import { TodoList } from "../../src/component/TodoList";


const App = () => (
  <div className="{{CONTAINER}}">
    <TodoList/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
