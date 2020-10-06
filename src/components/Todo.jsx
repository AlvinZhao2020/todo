import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo,onClick} = this.props;
    return <li onClick={onClick}>{todo.text} ----- is this task done ----- {todo.done.toString()} </li>;
  }
}

export default Todo;
