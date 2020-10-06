import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todos,toggleTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onClick ={()=>{toggleTodo(todo.id)}}/>
          ))}
        </ul>
      </div>
    );
  }
 
}

export default TodoList;
