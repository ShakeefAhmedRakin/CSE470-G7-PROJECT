import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Root from "./pages/Root";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Allbuses from "./pages/Allbuses/Allbuses";
import BusDetails from "./pages/BusDetails/BusDetails";
import PrivateRoute from "./Routes/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-buses",
        element: <Allbuses></Allbuses>,
      },
      {
        path: "/bus/:id",
        element: (
          <PrivateRoute>
            <BusDetails></BusDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
