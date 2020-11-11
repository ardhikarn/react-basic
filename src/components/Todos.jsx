import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

export default function Todos({ todos, completeTodo }) {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            text={todo.text}
            completeTodo={completeTodo}
            index={index}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </section>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
  completeTodo: PropTypes.func.isRequired,
};
