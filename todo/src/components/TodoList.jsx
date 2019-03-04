import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleDone } from "../actions";
import styled from "styled-components";
import Input from "./Input";

const StyledTodoList = styled.div`
  color: red;
`;

export class TodoList extends React.Component {
  render() {
    return (
      <StyledTodoList>
        <Input submitFunction={this.props.addTodo} />
        <ul>
          {this.props.todos.map(todo => (
            <li>{todo.value}</li>
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
  { addTodo, toggleDone }
)(TodoList);
