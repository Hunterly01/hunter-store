import { createBrowserRouter } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import HomePage from "../../Components/HomePage";
import ProductDetails from "../../Components/ProductDetails";
import NotFound from "../../Components/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
