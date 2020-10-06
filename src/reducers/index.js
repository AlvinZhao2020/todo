import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER } from '../actions/index'

const todoApp =(state={},action)=>{
    switch (key) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        done: false,
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo=>{
                    todo.id === action.id? {
                        ...todo, done: !todo.done
                    } : todo
                })
            }
        case SET_TODO_TEXT:
            return{
                ...state,
                text: action.text,
            }
        case SET_FILTER:
            return{
                ...state,
                filter: action.filter
            }
                
        default:
           return state;
    }
}

export default todoApp;