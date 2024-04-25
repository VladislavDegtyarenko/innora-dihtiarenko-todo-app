// Core
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

// UI
import Button from "./Button.tsx";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { todoAdded } from "@/features/todos-slice";
import TextInput from "./TextInput.tsx";

// Validation rules
const maxChars = 80;
const maxCharsMessage = `The task name is too long. ${maxChars} characters max.`;

// Styles
import styles from "@/scss/AddTodoForm.module.scss";

const AddTodoForm = () => {
  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const memoizedInputError = useMemo(() => {
    if (inputText.length > maxChars) {
      return maxCharsMessage;
    }

    return "";
  }, [inputText]);

  useEffect(() => {
    setInputError(memoizedInputError);
  }, [memoizedInputError]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const textTrimmed = inputText.trim();

    if (textTrimmed.length > 0 && textTrimmed.length <= maxChars) {
      dispatch(todoAdded(inputText));
      setInputText("");
    }
  };

  return (
    <form className={styles.addTodoForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Task name"
        value={inputText}
        onChange={handleChange}
      />
      <Button disabled={inputText.length === 0 || inputText.length > maxChars}>
        Add Todo
      </Button>

      {inputError && <span className={styles.errorMessage}>{inputError}</span>}
    </form>
  );
};

export default AddTodoForm;
