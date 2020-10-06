import {combineReducers} from 'redux'
import filterReducer  from './filterReducer';
import setTextReducer from './textReducer';
import todoReducer from './todosReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    todos: todoReducer,
    text: setTextReducer,
})

export default rootReducer;