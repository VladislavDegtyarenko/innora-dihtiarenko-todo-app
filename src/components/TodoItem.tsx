// Core
import { memo } from "react";
import { useAppDispatch } from "@/hooks/redux-hooks";

// UI
import { todoToggled, todoDeleted } from "@/features/todos-slice";
import Button from "./Button.tsx";
import { X } from "lucide-react";

// Types
import { TodoItem } from "@/types/types";

// Styles
import styles from "@/scss/TodoItem.module.scss";

const TodoCard = memo(({ id, name, completed }: TodoItem) => {
  const dispatch = useAppDispatch();

  const toggleCompleted = () => {
    dispatch(todoToggled(id));
  };

  const handleDelete = () => {
    dispatch(todoDeleted(id));
  };

  return (
    <li className={styles.todoItem}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleCompleted}
          className={styles.checkbox}
        />
        <span className={`${completed ? styles.completed : ""}`}>{name}</span>
      </label>
      <Button variant="icon" onClick={handleDelete}>
        <X size={14} strokeWidth={1.75} />
      </Button>
    </li>
  );
});

export default TodoCard;
