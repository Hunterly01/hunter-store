import { createBrowserRouter } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Products from "../../Components/Products";
import NotFound from "../../Components/NotFound";

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
    element: <Products />,
  },
]);

export default router;
