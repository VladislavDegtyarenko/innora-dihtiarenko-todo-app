import { StickyNote } from "lucide-react";
import styles from "@/scss/NoTodos.module.scss";

const NoTodos = () => {
  return (
    <div className={styles.noTodos}>
      <StickyNote size={32} strokeWidth={1} />
      <h2>No todos.</h2>
      <p>Start adding a new one...</p>
    </div>
  );
};

export default NoTodos;
