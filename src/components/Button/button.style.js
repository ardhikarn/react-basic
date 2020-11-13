import { css } from "@emotion/react";

export const button = ({ color, align }) => {
  let textColor;
  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
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
    width: 24%;
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;
    color: ${textColor};
    padding: 6px 16px;
    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
    text-align: ${align};
  `;
};
