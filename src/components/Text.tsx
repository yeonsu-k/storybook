import React from "react";
import styles from "./css/Text.module.css";

interface Props {
  value: string;
  type:
    | "caption"
    | "text"
    | "groupTitle"
    | "groupTitleBold"
    | "textTitle"
    | "textTitleBold"
    | "pageTitle"
    | "pageTitleBold"
    | "title"
    | "titleBold";
}

const Text = ({ value, type }: Props) => {
  return (
    <>
      <span className={`${styles[type]}`}>{value}</span>
    </>
  );
};

Text.defaultProps = {
  value: "내용이 들어갑니다.",
  type: "text",
};

export default Text;
