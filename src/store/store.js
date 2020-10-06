import{createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {addTodo} from '../actions/index'

const store = createStore(rootReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(addTodo('redux learning'))