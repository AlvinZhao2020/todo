import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: "study react",
          done: true,
        },
        {
          id: 2,
          text: "todo project",
          done: false,
        },
      ],
      filter: "all",
    };
  }
  render() {
    const todos = this.getVisableTodos();
    const { filter } = this.state;
    return (
      <div>
        <AddTodo addTodo = {this.addTodo}/>
        <TodoList todos={todos}  toggleTodo={this.toggleTodo}/>
        <Footer filter={filter} setFilter = {this.setFilter}/>
      </div>
    );
  }
  getVisableTodos = () => {
    const f = this.state.filter;
    return this.state.todos.filter((item) => {
      if (f === "active") {
        return !item.done;
      } else if (f === "done") {
        return item.done;
      } else {
        return true;
      }
    });
  };

  addTodo = (text) => {
    const todo = {
      id: Math.floor(Math.random()*1000),
      text: text,
      done: false,
    };
    const newTodos = Array.from(this.state.todos);
    newTodos.push(todo);
    this.setState({ todos: newTodos });
  };

  toggleTodo = id =>{
    const newTodos = this.state.todos.map(item=>{
        return item.id === id ?{...item, done:!item.done} :item
    }) 
    this.setState({todos:newTodos})
  }

  setFilter = filter =>{
      this.setState({filter:filter})
  }
}

export default App;
