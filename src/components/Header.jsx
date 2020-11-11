import React from "react";
import PropTypes from "prop-types";

function Header({ showAddToggle, isShow, clearAllTodos }) {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {isShow ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color" onClick={clearAllTodos}>
        Clear All
      </button>
    </section>
  );
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
  clearAllTodos: PropTypes.func.isRequired,
};

export default Header;
