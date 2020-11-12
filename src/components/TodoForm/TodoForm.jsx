import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TodoForm.module.css";

export default function TodoForm({ addTodo, isShow, todos }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.trim()) {
      alert("No Blank Todo !");
      return setValue("");
    }

    if (value.length >= 25) {
      alert("Please create a shorter todo text !");
      return setValue("");
    }

    if (todos.length >= 10) {
      alert("Maximal 10 todo, you can remove other todo first");
      return setValue("");
    }

    addTodo(value);
    setValue("");
  };

  if (isShow) {
    return (
      <section className={styles.add}>
        <form className={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            value={value}
            type="text"
            className={styles.addInput}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className={styles.addBtn}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};
