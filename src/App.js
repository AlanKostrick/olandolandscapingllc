import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Layout from "./pages/layout";
import Services from "./pages/services";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
