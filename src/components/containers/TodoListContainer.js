import {connect} from 'redux';
import TodoList from '../TodoList';

const getVisibleTodos =(todos,filter)=>{
    switch (filter) {
        case 'all':
            return todos
        case 'done':
            return todos.filter(t=> t.done)
        case 'active':
            return todos.filter(t=>!t.done)
        default:
            return todos;
    }
}

const mSTP =(state)=>{
    return {
        todos: getVisibleTodos(state.todos, state.filter)
    }
}
const mDTP = (dispatch)=>{
    return{

    }
}
export default connect(mSTP,mDTP)(TodoList)