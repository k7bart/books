import { FormEventHandler } from "react";
import { useInputValue } from "../../hooks";
import { Category } from "../../data";
import { Book } from "../../types";

type Props = {
  book?: Book;
  buttonText: string;
  onSubmit: (book: Book) => Promise<void>;
};

export const BookForm: React.FC<Props> = ({ book, buttonText, onSubmit }) => {
  const [title, handleChangeTitle] = useInputValue(book?.title);
  const [author, handleChangeAuthor] = useInputValue(book?.author);
  const [category, handleChangeCategory] = useInputValue(book?.category || "default");
  const [isbn, handleChangeIsbn] = useInputValue(book?.isbn);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (category === "default") {
      alert("Please select a category");
      return;
    }

    onSubmit({ title, author, category, isbn });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={handleChangeTitle}
        placeholder="Book title"
        required
      />
      <input
        value={author}
        onChange={handleChangeAuthor}
        placeholder="Author name"
        required
      />
      <select
        value={category}
        onChange={handleChangeCategory}
        required
      >
        <option
          value="default"
          disabled
        >
          Select category
        </option>
        {Object.values(Category).map((value) => (
          <option
            key={value}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
      <input
        value={isbn}
        onChange={handleChangeIsbn}
        type="number"
        placeholder="ISBN"
        required
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default BookForm;
