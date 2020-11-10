import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

export default function Todos({ todos }) {
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo key={todo.text} text={todo.text} />;
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
};
