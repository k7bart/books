import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBook, updateBook } from "../../services/books";
import { Book } from "../../types";
import BookForm from "../../components/book-form/BookForm";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const book = await fetchBook(id);

        setBook(book);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    })();
  }, [id]);

  const handleSubmit = async (book: Book) => {
    if (!id) return;

    await updateBook(id, book);

    alert("Book edited!");

    navigate("..");
  };

  if (!book) return null;

  return (
    <BookForm
      book={book}
      buttonText="Edit Book"
      onSubmit={handleSubmit}
    />
  );
};

export default EditBook;
