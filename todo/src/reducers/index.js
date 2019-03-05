import {ADD_TODO, TOGGLE_DONE, DELETE_BY_ID, DELETE_ALL_COMPLETED, ADD_TODOLIST} from '../actions/index'

const initialState = {
    todos:[]
  }
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
            todos: state.todos.concat(action.payload)
        };
      case TOGGLE_DONE:
        return {
         todos: state.todos.map(todo => {
            if(todo.id === action.payload){
                return {
                    ...todo,
                    completed: todo.completed? false: true,
                    
                }
            }
            return todo
         })   
        };
      case DELETE_BY_ID:
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      case DELETE_ALL_COMPLETED:
        return {
          todos: state.todos.filter(todo => !todo.completed)
        };
      case ADD_TODOLIST:
        return{
          todos: action.payload
        }
      default:
        return state;
    }
  };
  