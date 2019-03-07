import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleDone,
  deleteById,
  deleteAllCompleted,
  addTodoList
} from "../actions";
import styled from "styled-components";
import Input from "./Input";

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    display: flex;
    justify-content: center;
    button {
      background: none;
    }
  }
`;

const StyledListItem = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  p {
    text-decoration: ${props => (props.isCompleted ? "line-through" : "none")};
  }
  button {
    background: none;
    height: 40px;
  }
`;

export class TodoList extends React.Component {
  componentDidMount() {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      this.props.addTodoList(JSON.parse(localTodos));
    }
  }
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.props.todos));
  }
  render() {
    return (
      <StyledTodoList>
        <h1>TODOS</h1>
        <div className="top">
          <Input submitFunction={this.props.addTodo} />
          <button onClick={this.props.deleteAllCompleted}>CLEAR</button>
        </div>
        <ul>
          {this.props.todos.map((todo, index) => (
            <StyledListItem key={index} isCompleted={todo.completed}>
              <p onClick={() => this.props.toggleDone(todo.id)}>{todo.value}</p>
              <button onClick={() => this.props.deleteById(todo.id)}>
                DELETE
              </button>
            </StyledListItem>
          ))}
        </ul>
      </StyledTodoList>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleDone, deleteById, deleteAllCompleted, addTodoList }
)(TodoList);
