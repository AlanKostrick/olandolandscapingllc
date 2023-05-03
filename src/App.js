import { RouterProvider, createHashRouter } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Layout from "./pages/layout";
import OurWork from "./pages/our-work";
import Services from "./pages/services";

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'our-work', element: <OurWork /> }
    ]
  }
]);



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
