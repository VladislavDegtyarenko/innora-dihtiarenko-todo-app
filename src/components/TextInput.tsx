import React from "react";
import styles from "@/scss/TextInput.module.scss";

type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = (props: TextInputProps) => {
  return <input className={styles.input} type="text" {...props} />;
};

export default TextInput;
