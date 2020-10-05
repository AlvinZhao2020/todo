import React, { Component } from 'react';

class Todo extends Component {

    render() {
        const {todo} = this.props
        return (
            <li >
                {todo.text} 
            </li>
        );
    }
}

export default Todo;