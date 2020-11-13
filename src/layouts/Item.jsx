import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

export const Item = ({ children, flex }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
      `}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
