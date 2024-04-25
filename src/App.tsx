// UI
import Header from "./components/Header";
import TodoManager from "./components/TodoManager";
import AddTodoForm from "./components/AddTodoForm";

// Global styles
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <TodoManager />
      <AddTodoForm />
    </>
  );
};

export default App;
