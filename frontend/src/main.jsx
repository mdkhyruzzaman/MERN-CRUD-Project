import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { AddBook } from "./pages/AddBook.jsx";
import { Home } from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book-list",
        element: <Home />,
      },
      {
        path: "/create",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
