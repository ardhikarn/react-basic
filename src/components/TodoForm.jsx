import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.trim()) {
      alert("No Blank Todo !");
      return setValue("");
    }

    addTodo(value);
    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          value={value}
          type="text"
          className="add-input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
