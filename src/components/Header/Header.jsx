import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
// import styles from "./Header.module.css";
import * as styles from "./header.style";
import { useTheme } from "@emotion/react";
import { Container } from "../../layouts/Container";
import { Item } from "../../layouts/Item";

function Header({ showAddToggle, isShow, clearAllTodos }) {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button
            color="black"
            text={isShow ? "Finish" : "Add"}
            onClick={showAddToggle}
            align="left"
          />
        </Item>
        <Item flex={3}>
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>
        <Item flex={1} align="right">
          <Button
            text="Clear"
            color="red"
            onClick={clearAllTodos}
            align="right"
          />
        </Item>
      </Container>
    </section>
  );
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
  clearAllTodos: PropTypes.func.isRequired,
};

export default Header;
