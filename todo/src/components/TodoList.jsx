import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleDone } from "../actions";
import styled from "styled-components";
import Input from "./Input";

const StyledTodoList = styled.div`
  color: red;
`;

const StyledListItem = styled.li`
  text-decoration: ${props => (props.isCompleted ? "line-through" : "none")};
`;

export class TodoList extends React.Component {
  render() {
    return (
      <StyledTodoList>
        <Input submitFunction={this.props.addTodo} />
        <ul>
          {this.props.todos.map((todo, index) => (
            <StyledListItem
              key={index}
              onClick={() => this.props.toggleDone(todo.id)}
              isCompleted={todo.completed}
            >
              {todo.value}
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
  { addTodo, toggleDone }
)(TodoList);
