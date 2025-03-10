import { RouteObject } from "react-router-dom";

import CreateBook from "./pages/create-book/CreateBook";
import EditBook from "./pages/edit-book/EditBook";
import Dashboard from "./pages/dashboard/Dashboard";
import Root from "./components/root/Root";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/book",
        element: <CreateBook />,
      },
      {
        path: "/book/:id",
        element: <EditBook />,
      },
    ],
  },
];

export default routes;
