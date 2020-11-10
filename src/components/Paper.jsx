import React from "react";
import PropTypes from "prop-types";

export default function Paper({ children }) {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
