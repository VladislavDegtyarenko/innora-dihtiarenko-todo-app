// Core
import { useAppSelector } from "../hooks/redux-hooks";
import { hasTodos } from "../features/todos-slice";

// UI
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import NoTodos from "./NoTodos";

// Styles
import styles from "@/scss/TodoManager.module.scss";

const TodoManager = () => {
  const hasAnyTodos = useAppSelector(hasTodos);

  if (hasAnyTodos) {
    return (
      <div className={styles.todoManager}>
        <TodoFilter />
        <TodoList />
      </div>
    );
  }

  return <NoTodos />;
};

export default TodoManager;
