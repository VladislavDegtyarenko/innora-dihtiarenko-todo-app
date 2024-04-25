import { HTMLAttributes, ReactNode } from "react";

import styles from "@/scss/Button.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "icon";
  disabled?: boolean;
};

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${variant === "icon" ? styles.iconVariant : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
