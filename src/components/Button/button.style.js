import { css } from "@emotion/react";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary },
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }

  // let textAlign;
  // switch (align) {
  //   case "left":
  //     textAlign = "#left";
  //     break;
  //   case "right":
  //     textAlign = "#right";
  //     break;
  //   default:
  //     textAlign = "#left";
  // }

  return css`
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;
    color: ${textColor};
    padding: 6px 16px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
    text-align: ${align};
    &:active {
      text-shadow: 1px 1px 2px ${textColor};
    }
  `;
};
