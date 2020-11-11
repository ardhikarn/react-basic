import React from "react";
import PropTypes from "prop-types";

function Header({ showAddToggle, isShow }) {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {isShow ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};

export default Header;
