import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TodoForm({ addTodo, isShow }) {
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

  if (isShow) {
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
  } else {
    return null;
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};
