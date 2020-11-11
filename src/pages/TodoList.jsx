import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learning React" },
    { text: "Learning React Hooks" },
    { text: "Learning Styling in React" },
  ]);

  const [isShow, setIsShow] = useState(false);

  const showAddToggle = () => {
    setIsShow(!isShow);
  };

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];
    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} isShow={isShow} />
      <TodoForm addTodo={addTodo} isShow={isShow} />
      <Todos todos={todos} />
    </Paper>
  );
}

export default TodoList;
