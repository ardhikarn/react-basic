import React, { useState } from "react";
import PropTypes from "prop-types";
// import styles from "./TodoForm.module.css";
import * as styles from "./todoForm.style";
import { useTheme } from "@emotion/react";
import { Container } from "../../layouts/Container";
import { Item } from "../../layouts/Item";
import Button from "../Button/Button";

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

  const theme = useTheme();

  if (isShow) {
    return (
      <section className="todoForm-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                value={value}
                type="text"
                css={styles.addInput(theme)}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Item>
            <Item>
              <Button text="Add" />
            </Item>
          </Container>
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
