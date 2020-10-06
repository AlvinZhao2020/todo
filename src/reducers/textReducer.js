import {SET_TODO_TEXT} from '../actions/index';

const setTextReducer = (state='',action) =>{
    switch (action.type) {
        case SET_TODO_TEXT:
            return action.text
        default:
            return state;
    }
}

export default setTextReducer;