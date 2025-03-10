import { createContext, useMemo, useState } from "react";
import { ApiBook } from "../types";

interface BooksContextType {
  books: ApiBook[];
  setBooks: React.Dispatch<React.SetStateAction<ApiBook[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [books, setBooks] = useState<ApiBook[]>([]);

  const value = useMemo(() => ({ books, setBooks }), [books]);

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};
