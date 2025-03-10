import { useNavigate } from "react-router-dom";
import { createBook } from "../../services/books";
import { Book } from "../../types";
import BookForm from "../../components/book-form/BookForm";

const CreateBook: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (book: Book) => {
    await createBook(book);

    alert("Book created!");

    navigate("..");
  };

  return (
    <BookForm
      onSubmit={handleSubmit}
      buttonText="Add a book"
    />
  );
};

export default CreateBook;
