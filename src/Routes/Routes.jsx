import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Logout from "../components/Logout.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

import DashBoard from "../components/DashBoard.jsx";

import LayOut from "../components/LayOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/logout",
        element: (
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        ),
      },

      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
              <DashBoard />  
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
