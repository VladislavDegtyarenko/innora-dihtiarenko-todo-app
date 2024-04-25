import ThemeSelect from "./ThemeSelect";
import { CircleCheckBig } from "lucide-react";

// Styles
import styles from "@/scss/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <CircleCheckBig size={20} strokeWidth={2.25} />
        Todo App
      </h1>
      <div>
        <ThemeSelect />
      </div>
    </header>
  );
};

export default Header;
