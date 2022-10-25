import React from "react";
// import PropTypes from "prop-types";

interface Props {
  children?: React.ReactElement | string;
  color?: string;
  italic?: boolean;
  underline?: boolean;
}

export const Text = ({
  children,
  color,
  italic,
  underline,
  ...props
}: Props) => {
  const style = {
    color: color,
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
  };
  return (
    <span style={style} {...props}>
      {children}
    </span>
  );
};
