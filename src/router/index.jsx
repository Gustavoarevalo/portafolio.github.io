import { createBrowserRouter } from "react-router-dom";
import Layoutpublic from "../layout/layoutp";
import About from "../pages/about";
import Contact from "../pages/contact";
import Skill_tell from "../pages/skill";
import Home from "../pages/home";
import Notfund from "../pages/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutpublic />,
    errorElement: <Notfund />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skill",
        element: <Skill_tell />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
