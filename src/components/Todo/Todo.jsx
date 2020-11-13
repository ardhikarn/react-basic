import React from "react";
import PropTypes from "prop-types";
// import styles from "./Todo.module.css";
import * as styles from "./todo.style";
import { useTheme } from "@emotion/react";

function Todo({ text, completeTodo, index, isCompleted }) {
  const theme = useTheme();
  const {
    color: { primary },
  } = theme;

  return (
    <div css={styles.todo(primary)} onClick={() => completeTodo(index)}>
      <span css={styles.todoText(isCompleted)}>{text}</span>
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Todo;
