import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Header.module.css";

function Header({ showAddToggle, isShow, clearAllTodos }) {
  return (
    <section className={styles.header}>
      <Button
        color="black"
        text={isShow ? "Finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 className={styles.headerTitle}>Todo Lists</h1>
      <Button text="Clear" color="red" onClick={clearAllTodos} align="right" />
    </section>
  );
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
  clearAllTodos: PropTypes.func.isRequired,
};

export default Header;