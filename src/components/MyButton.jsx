import React from "react";
import PropTypes from "prop-types";
import "./myButton.css";

export const MyButton = ({ primary, size, children }) => {
  const isPrimary = primary ? "button--primary" : "button--secondary";
  return (
    <button className={[`button-size--${size}`, isPrimary].join(" ")}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.string.isRequired,
};

MyButton.defaultProps = {
  primary: false,
  size: "medium",
};
