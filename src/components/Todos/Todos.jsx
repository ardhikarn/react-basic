import React from "react";
import Todo from "../Todo/Todo";
import PropTypes from "prop-types";
import styles from "./Todos.module.css";

export default function Todos({ todos, completeTodo }) {
  return (
    <section className={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
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
      {todos.length === 0 && (
        <div className={styles.todoPlaceholderText}>
          Add todo by clicking{" "}
          <span className={styles.addBtnPlaceholderText}>Add</span> button on
          the top left corner
        </div>
      )}
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