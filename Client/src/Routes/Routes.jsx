import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration/Registration";
import FindBlood from "../Pages/FindBlood/FindBlood";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "find-blood",
        element: <FindBlood></FindBlood>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
