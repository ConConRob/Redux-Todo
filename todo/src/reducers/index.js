import {ADD_TODO, TOGGLE_DONE} from '../actions/index'

const initialState = {
    todos:[]
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
            todos: state.todos.concat({
                value: action.value,
                completed: false
            })
        };
      case TOGGLE_DONE:
        return {
         todos: state.todos.map(todo => {
            if(todo.value === action.value){
                return {
                    value: todo.value,
                    completed: todo.value? true: false,
                }
            }
            return todo
         })   
        };
      default:
        return state;
    }
  };
  