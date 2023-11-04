import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={Routes}>
        <App />
      </RouterProvider>
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
