import { useEffect } from "react";
import { useBooks } from "../../hooks";
import { deleteBook, fetchBooks, toggleIsBookActive } from "../../services/books";
import { ApiBook } from "../../types";
import BookTable from "../../components/book-table/BookTable";
import Footer from "../../components/footer/Footer";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  const { setBooks } = useBooks();

  useEffect(() => {
    (async () => {
      try {
        const books = await fetchBooks();

        setBooks(books);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setBooks]);

  const handleDelete = async (id: ApiBook["id"]) => {
    try {
      await deleteBook(id);

      alert("Book deleted successfully");

      const books = await fetchBooks();

      setBooks(books);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = async (id: ApiBook["id"], isActive: boolean) => {
    try {
      await toggleIsBookActive(id, !isActive);

      const books = await fetchBooks();

      setBooks(books);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  return (
    <>
      <main className={styles.container}>
        <BookTable
          onDelete={handleDelete}
          onToggleActive={handleToggle}
        />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
