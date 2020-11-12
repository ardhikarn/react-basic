import React, { useState } from "react";
import Paper from "../components/Paper/Paper";
import Header from "../components/Header/Header";
import TodoForm from "../components/TodoForm/TodoForm";
import Todos from "../components/Todos/Todos";
import { css } from "@emotion/react";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learning React", isCompleted: false },
    { text: "Learning React Hooks", isCompleted: false },
    { text: "Learning Styling in React", isCompleted: false },
  ]);

  const [isShow, setIsShow] = useState(false);

  const showAddToggle = () => {
    setIsShow(!isShow);
  };

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];
    setTodos(addedTodo);
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearAllTodos = () => !isShow && setTodos([]);
  return (
    <Paper>
      <div
        css={css`
          font-size: 60px;
          font-weight: bold;
          color: RED;
        `}
      >
        BISAAA COOOY
      </div>
      <Header
        showAddToggle={showAddToggle}
        isShow={isShow}
        clearAllTodos={clearAllTodos}
      />
      <TodoForm addTodo={addTodo} isShow={isShow} todos={todos} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoList;
