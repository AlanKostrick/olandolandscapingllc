import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/about";
import Commercial from "./pages/commercial";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Layout from "./pages/layout";
import Maintenance from "./pages/maintenance";
import Residential from "./pages/residential";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/residential', element: <Residential /> },
      { path: '/commercial', element: <Commercial /> },
      { path: '/maintenance', element: <Maintenance /> },
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
