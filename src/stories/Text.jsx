import React from "react";
import PropTypes from "prop-types";

/**
 * 다양한 텍스트들!!
 */
export function Text({ children, color, italic, underline }) {
  const style = {
    color: color,
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
  };
  return <span style={style}>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  italic: PropTypes.bool,
  /**
   * 텍스트에 밑줄을 보여줄 것인가?
   */
  underline: PropTypes.bool,
};

Text.defaultProps = {
  color: "black",
  italic: false,
  underline: false,
};
