export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';


export const addTodo = (value) => {
  return {
      type: ADD_TODO,
      value
    };
};

export const toggleDone = (value) => {
  return {
      type: TOGGLE_DONE,
      value
    };
};
