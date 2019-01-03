import React, { Component } from "react";

import { Link } from "react-router-dom";
class TodoDetail extends Component {
  state = {
    todo: {}
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        "http://localhost:8000/api/" + this.props.match.params.id
      );
      const todo = await res.json();
      this.setState({
        todo
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <h3>{this.state.todo.title}</h3>
        <span>{this.state.todo.description}</span>
        <br />
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default TodoDetail;
