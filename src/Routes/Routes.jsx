import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../page/Home/Home";
import Catalogue from "../page/Catalogue/Catalogue";
import AddService from "../page/AddService/AddService";
import PrivetsRoutes from "./PrivetRoutes/PrivetsRoutes";
import ShowService from "../page/ShowService/ShowService";
import SingleService from "../page/SingleService/SingleService";
import ShowCart from "../page/ShowCart/ShowCart";
import ManageService from "../page/ManageService/ManageService";

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
        element: <Register />,
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "catalogue",
        element: <Catalogue />,
      },
      {
        path: "addService",
        element: (
          <PrivetsRoutes>
            <AddService></AddService>
          </PrivetsRoutes>
        ),
      },
      {
        path: "/",
        element: <ShowService></ShowService>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "showService/:id",
        element: (
          <PrivetsRoutes>
            <SingleService></SingleService>
          </PrivetsRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivetsRoutes>
            <ShowCart></ShowCart>
          </PrivetsRoutes>
        ),
      },
      {
        path: "/manageService",
        element: (
          <PrivetsRoutes>
            <ManageService />
          </PrivetsRoutes>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },
    ],
  },
]);

export default Routes;
