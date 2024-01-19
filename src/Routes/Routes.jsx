import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Product/Product";
import Cart from "../Pages/Cart/Cart";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Checkout from "../Pages/Checkout/Checkout";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardUser from "../Pages/Dashboard/DashboardUser";
import CreateProduct from "../components/Home/shared/Create/CreateProduct";
import Update from "../components/Home/shared/Update/Update";
import AllUsers from "../components/Home/shared/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardUser></DashboardUser>,
      },
      {
        path: "/dashboard/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/dashboard/update",
        element: <Update />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
