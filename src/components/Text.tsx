import React from "react";
import styles from "./css/Text.module.css";

interface Props {
  value: string;
  type: "caption" | "text" | "groupTitle" | "textTitle" | "pageTitle" | "title";
  bold?: boolean;
}

const Text = ({ value, type, bold }: Props) => {
  const style = {
    fontWeight: bold ? "600" : "400",
  };
  return (
    <>
      <span className={`${styles[type]}`} style={style}>
        {value}
      </span>
    </>
  );
};

Text.defaultProps = {
  value: "내용이 들어갑니다.",
  type: "sample",
  bold: false,
};

export default Text;
