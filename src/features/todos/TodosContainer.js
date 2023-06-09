import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";

function TodoContainer() {
  const todos = useSelector((state) => state.todos.entities);
  const todoList = todos.map((todo, index) => <Todo key={index} text={todo} />);

  return (
    <div>
      <p>Your ToDo List:</p>
      <ul>{todoList}</ul>;
    </div>
  );
}

export default TodoContainer;
