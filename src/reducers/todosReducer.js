import {ADD_TODO,TOGGLE_TODO} from '../actions/index'

const todoReducer = (state=[],action)=>{
    switch (action.type) {
        case ADD_TODO:
            return [...state,
                {
                    text:action.text,
                    done:false
                }
            ]
        case TOGGLE_TODO:
            return state.map(
                todo =>{
                    // todo.id === action.id? {...todo,done:!todo.done} : todo
                }
            )
        default:
            return state;
    }
}
export default todoReducer