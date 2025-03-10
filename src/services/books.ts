import { apiBaseUrl } from "../data";
import { ApiBook, Book } from "../types";

const headers = { "Content-Type": "application/json" };

export const fetchBooks = async () => {
  const result = await fetch(`${apiBaseUrl}/books`);
  const data = await result.json();

  return data as ApiBook[];
};

export const fetchBook = async (id: ApiBook["id"]) => {
  const response = await fetch(`${apiBaseUrl}/books/${id}`);
  const data = await response.json();

  return data as ApiBook;
};

export const createBook = async (book: Book) => {
  await fetch(`${apiBaseUrl}/books`, {
    method: "POST",
    headers,
    body: JSON.stringify(book),
  });
};

export const updateBook = async (id: ApiBook["id"], book: Book) => {
  await fetch(`${apiBaseUrl}/books/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(book),
  });
};

export const toggleIsBookActive = async (id: ApiBook["id"], isActive: boolean) => {
  await fetch(`${apiBaseUrl}/books/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ isActive }),
  });
};

export const deleteBook = async (id: ApiBook["id"]) => {
  await fetch(`${apiBaseUrl}/books/${id}`, { method: "DELETE" });
};
