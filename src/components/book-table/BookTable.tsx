import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useBooks } from "../../hooks";
import { dateFormat, Filter, tableHeaders } from "../../data";
import moment from "moment";
import { ApiBook } from "../../types";
import DeleteIcon from "../icons/DeleteIcon";
import ToggleOff from "../icons/ToggleOff";
import ToggleOn from "../icons/ToggleOn";
import EditIcon from "../icons/EditIcon";
import styles from "./BookTable.module.scss";

type Props = {
  onDelete: (id: ApiBook["id"]) => Promise<void>;
  onToggleActive: (id: ApiBook["id"], isActive: boolean) => void;
};

const BookTable: React.FC<Props> = ({ onDelete, onToggleActive }) => {
  const { books } = useBooks();
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filteredBooks = useMemo(() => {
    if (filter === Filter.Active) {
      return books.filter(({ isActive }) => isActive);
    }

    if (filter === Filter.Deactivated) {
      return books.filter(({ isActive }) => !isActive);
    }

    return books;
  }, [books, filter]);

  if (!filteredBooks.length) {
    return "No books";
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.filter}>
          {Object.values(Filter).map((value) => (
            <div key={value}>
              <input
                id={value}
                type="radio"
                name="filter"
                value={value}
                checked={filter === value}
                onChange={(e) => setFilter(e.currentTarget.value as Filter)}
              />
              <label
                htmlFor={value}
                style={{ textTransform: "capitalize" }}
              >
                {value}
              </label>
            </div>
          ))}
        </div>

        <div>
          Showing {filteredBooks.length} of {books.length}
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableRow}>
              {tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredBooks.map((book) => (
              <tr
                key={book.isbn}
                className={book.isActive ? styles.active : styles.deactivated}
              >
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.isbn}</td>
                <td>{moment(book.createdAt).format(dateFormat)}</td>
                <td>{book.modifiedAt ? moment(book.modifiedAt).format(dateFormat) : "--"}</td>
                <td>
                  <Link
                    className={styles.action}
                    to={`/book/${book.id}`}
                  >
                    <EditIcon />
                  </Link>
                  <button
                    className={styles.action}
                    onClick={() => onDelete(book.id)}
                    disabled={book.isActive}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    className={styles.action}
                    onClick={() => onToggleActive(book.id, book.isActive)}
                  >
                    {book.isActive ? <ToggleOn /> : <ToggleOff />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookTable;
