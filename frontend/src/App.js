import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoList from "./components/todo-list";
import TodoDetail from "./components/todo-detail";

class App extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={TodoList} />
          <Route path="/detail/:id" component={TodoDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
