import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
// import styles from "./Header.module.css";
import * as styles from "./header.style";
import { useTheme } from "@emotion/react";

function Header({ showAddToggle, isShow, clearAllTodos }) {
  const theme = useTheme();

  return (
    <section css={styles.header}>
      <Button
        color="black"
        text={isShow ? "Finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
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
