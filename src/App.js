import { RouterProvider, createHashRouter } from "react-router-dom";

import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Layout from "./pages/layout";

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }
    ]
  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
