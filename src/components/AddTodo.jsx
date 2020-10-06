import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <div>
        <input value={this.state.text} onChange = {this.handleInput}/>
        <button onClick ={this.handleClick}>add</button>
      </div>
    );
  }
  handleClick = ()=>{
    this.props.addTodo(this.state.text)
    this.setState({text:''})
  }
  handleInput = (e)=>{
    this.setState({text: e.target.value})
  }
}

export default AddTodo;
