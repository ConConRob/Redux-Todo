import {ADD_TODO, TOGGLE_DONE} from '../actions/index'

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
console.log(ider());
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
      default:
        return state;
    }
  };
  