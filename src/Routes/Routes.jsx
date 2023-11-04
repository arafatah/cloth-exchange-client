import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../page/Home/Home";
import Catalogue from "../page/Catalogue/Catalogue";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "catalogue",
        element: <Catalogue/>
      }
    ],
  },
]);

export default Routes;
