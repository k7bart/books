import { ChangeEventHandler, useCallback, useContext, useState } from "react";
import { BooksContext } from "../context/books";

export const useInputValue = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return [value, handleChange, setValue] as const;
};

export const useBooks = () => {
  const value = useContext(BooksContext);

  if (!value) {
    throw new Error("useBooks has to be used within <BooksContext.Provider>");
  }

  return value;
};
