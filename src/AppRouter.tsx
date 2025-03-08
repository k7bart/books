import BookForm from "./components/book-form/BookForm";
import Dashboard from "./components/dashboard/Dashboard";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/form",
    element: <BookForm />,
  },
];

export default routes;
