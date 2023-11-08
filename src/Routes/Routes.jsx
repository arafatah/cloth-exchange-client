import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../page/Home/Home";
import AddService from "../page/AddService/AddService";
import PrivetsRoutes from "./PrivetRoutes/PrivetsRoutes";
import ShowService from "../page/ShowService/ShowService";
import SingleService from "../page/SingleService/SingleService";
import ShowCart from "../page/ShowCart/ShowCart";
import ManageService from "../page/ManageService/ManageService";
import UpdateService from "../page/ManageService/UpdateService";
import ShowAllService from "../page/ShowService/ShowAllService";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
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
        loader: () => fetch("https://backend-server-omega.vercel.app/services"),
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
        loader: () => fetch("https://backend-server-omega.vercel.app/services"),
      },
      {
        path: "/services",
        element: <ShowAllService></ShowAllService>,
        loader: () => fetch("https://backend-server-omega.vercel.app/services"),
      },
      {
        path: "showService/:id",
        element: (
          <PrivetsRoutes>
            <SingleService></SingleService>
          </PrivetsRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://backend-server-omega.vercel.app/service/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivetsRoutes>
            <ShowCart></ShowCart>
          </PrivetsRoutes>
        ),
        loader: () => fetch("https://backend-server-omega.vercel.app/orders"),
      },
      {
        path: "/manageService",
        element: (
          <PrivetsRoutes>
            <ManageService />
          </PrivetsRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetsRoutes>
            <UpdateService />
          </PrivetsRoutes>
        ),
        loader: ({params}) => fetch(`https://backend-server-omega.vercel.app/service/${params.id}`),
      },
    ],
  },
]);

export default Routes;
