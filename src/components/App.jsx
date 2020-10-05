import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const todos = [
    {
        id: 1,
        text: 'study react',
        done: true
    },
    {
        id: 2,
        text: 'todo project',
        done: false
    }
]

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList todos = {todos}/>
                <Footer/>
            </div>
        );
    }
}

export default App;