import React from "react";
import PropTypes from "prop-types";
import styles from "./Paper.module.css";

export default function Paper({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
