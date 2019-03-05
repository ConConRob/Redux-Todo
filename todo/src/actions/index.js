export const ADD_TODO = "ADD_TODO";
export const TOGGLE_DONE = "TOGGLE_DONE";
export const DELETE_BY_ID = 'DELETE_BY_ID';
export const DELETE_ALL_COMPLETED = 'DELETE_ALL_COMPLETED';
export const ADD_TODOLIST = 'ADD_TODOLIST';
const randomId = require('random-id');

export const addTodo = value => {
  return {
    type: ADD_TODO,
    payload: {
      value,
      completed: false,
      id: randomId()
    }
  };
};

export const toggleDone = value => {
  return {
    type: TOGGLE_DONE,
    payload: value,
  };
};

export const deleteById = value => {
  return {
    type: DELETE_BY_ID,
    payload: value
  }
}

export const deleteAllCompleted = () => {
  return {
    type: DELETE_ALL_COMPLETED
  }
}

export const addTodoList = (value) => {
  return {
    type: ADD_TODOLIST,
    payload: value
  }
}