import {ADD_TODO, TOGGLE_DONE, DELETE_BY_ID} from '../actions/index'

const initialState = {
    todos:[]
  }
function count(){
    let count=0;
    return function (){
        return count++
    }
}  
const ider = count()
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
            todos: state.todos.concat({
                value: action.value,
                completed: false,
                id: ider()
            })
        };
      case TOGGLE_DONE:
        return {
         todos: state.todos.map(todo => {
            if(todo.id === action.value){
                return {
                    value: todo.value,
                    completed: todo.completed? false: true,
                    id: todo.id
                }
            }
            return todo
         })   
        };
      case DELETE_BY_ID:
        return {
          todos: state.todos.filter(todo => todo.id !== action.value)
        }
      default:
        return state;
    }
  };
  