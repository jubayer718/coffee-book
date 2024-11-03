import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/Mainlayout";
import Coffees from "../pages/Coffees";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import Categories from "../conponents/Categories";
import CoffeeCards from "../conponents/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('../categories.json'),
      children: [
        {
          path: "/",
          element: <CoffeeCards></CoffeeCards>,
           loader: () => fetch('../coffees.json'),
      },
        {
          path: "/category/:category",
          element: <CoffeeCards></CoffeeCards>,
           loader: () => fetch('../coffees.json'),
      }
      ]
    }, {
      path: "/coffees",
      element: <Coffees></Coffees>
      }, {
      path: "/dashboard",
        element:<DashBoard></DashBoard>
    }]
  },
]);
export default routes;