import React from "react";
import PropTypes from "prop-types";
// import styles from "./Paper.module.css";
import * as styles from "./paper.style";
import { useTheme } from "@emotion/react";

export default function Paper({ children }) {
  const theme = useTheme();

  return (
    <div css={styles.container(theme)}>
      <div css={styles.frame(theme)}>{children}</div>
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
