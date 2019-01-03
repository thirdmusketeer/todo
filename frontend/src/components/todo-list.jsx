import React, { Component } from "react";
import { Link } from "react-router-dom";

class TodoList extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/api/");
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <div>
            <Link to={{ pathname: "/detail/" + todo.id }}>{todo.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
