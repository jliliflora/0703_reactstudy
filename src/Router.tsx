import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './screens/About';
import Home from './screens/Home';
import Root from "./Root";
import NotFound from './components/NotFound';
import Author from './screens/authors/Author';
import Booktest from './screens/authors/Book-test';
import Book from './screens/authors/Book';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFound/>,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "authors/:authorName",
        element: <Author />,
        children: [
          {
            path: "book",
            element: <Booktest />
          },
          {
            path: ":book",
            element: <Book />
          }
        ]
      }
    ],
    errorElement: <NotFound/>
  },
]);
export default router;