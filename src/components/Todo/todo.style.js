import { css } from "@emotion/react";

export const todo = (primary) => {
  return css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 34px;
    margin: 16px 0 0;
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid ${primary.red};
  `;
};

export const todoText = (isCompleted) => {
  return css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    cursor: pointer;
  `;
};
