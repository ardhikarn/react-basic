import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

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

  console.log(todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} isShow={isShow} />
      <TodoForm addTodo={addTodo} isShow={isShow} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoList;
