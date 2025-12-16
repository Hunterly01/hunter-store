import { createBrowserRouter } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Products from "../../Components/Products";
import NotFound from "../../Components/NotFound";
import HomePage from "../../Components/HomePage";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <HomePage/>,
  },
]);

export default router;
