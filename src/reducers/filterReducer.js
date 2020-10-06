import {SET_FILTER} from '../actions/index';

const filterReducer = (state = 'all', action) =>{
    switch (action.type) {
        case SET_FILTER:
            let newState = action.filter;
            return newState
        default:
            return state;
    }
}

export default filterReducer;