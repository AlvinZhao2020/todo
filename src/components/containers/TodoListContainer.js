import { connect } from "react-redux";
import { toggleTodo } from "../../actions";
import TodoList from "../TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "done":
      return todos.filter((t) => t.done);
    case "active":
      return todos.filter((t) => !t.done);
    default:
      return new Error("unknow filter" + filter);
  }
};

const mSTP = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter),
  };
};
const mDTP = (dispatch) => {
  return {
    toggoleTodo: (id) => dispatch(toggleTodo(id)),
  };
};
export default connect(mSTP, mDTP)(TodoList);
