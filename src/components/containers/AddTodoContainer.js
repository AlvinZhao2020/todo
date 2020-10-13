import AddTodo from '../AddTodo'
import {connect} from 'redux'
import {setTodoText,addTodo} from '../../actions/index'
const mSTP = (state)=>({
    text:state.text
})

const mDTP = dispatch =>({
    
})
