// Core
import { useAppSelector } from "@/hooks/redux-hooks";

// UI
import TodoCard from "./TodoItem";
import { getCurrentFilter, getFilteredTodos } from "@/features/todos-slice";

// Styles
import styles from "@/scss/TodoList.module.scss";

const TodoList = () => {
  const filteredTodos = useAppSelector(getFilteredTodos);
  const currentFilter = useAppSelector(getCurrentFilter);

  const todosHeading =
    filteredTodos.length > 0
      ? `${currentFilter} todos: ${filteredTodos.length}`
      : `No ${currentFilter} todos`;

  return (
    <div className={styles.todoList}>
      <h2>{todosHeading}</h2>
      <ul>
        {filteredTodos.map(({ name, completed, id }) => {
          return (
            <TodoCard key={id} id={id} name={name} completed={completed} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
