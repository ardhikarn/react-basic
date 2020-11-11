import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TodoForm({ addTodo }) {
  const [valuet, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!valuet || !valuet.trim()) {
      alert("No Blank Todo !");
      return setValue("");
    }

    addTodo(valuet);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          value={valuet}
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
