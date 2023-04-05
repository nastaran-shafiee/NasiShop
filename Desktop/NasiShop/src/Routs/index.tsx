import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import SiteLayout from "../rootLayout/siteLayout";
import PanelLayout from "../rootLayout/panelLayout";
import Login from "../pages/panel/login";
import NotFoundPage from "../pages/Site/404page";
import BascketCart from "../pages/Site/basketCart";

import WelcomePage from "../pages/Site/welcomePage";

import WomenPage from "../pages/Site/womenPage";

import Orders from "../pages/panel/order";
import InventoryPage from "../pages/panel/InventoryPage";
import GoodsPage from "../pages/panel/goodsPage";
import Setting from "../pages/panel/settingPage";
import WomenCategoryProducts from "../pages/Site/womenCategoryProducts";
import MenPage from "../pages/Site/menPage";
import MenCategoryProducts from "../pages/Site/menCategoryProducts";
import DetailProductPage from "../pages/Site/detailProductPages";
import ModalCart from "../pages/Site/CartModal";
// const rout--------------------------------------------
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "Cart", element: <BascketCart /> },
      { path: "user", element: <ModalCart /> },

      //women
      { path: "women", element: <WomenPage /> },
      { path: "women/:name", element: <WomenCategoryProducts /> },
      { path: "product/:id", element: <DetailProductPage /> },

      // men
      { path: "men", element: <MenPage /> },
      { path: "men/:name", element: <MenCategoryProducts /> },
      { path: "product/:id", element: <DetailProductPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
  {
    path: "/panel",
    element: <PanelLayout />,
    children: [
      {
        path: "order",
        element: <Orders />,
      },
      {
        path: "investory",
        element: <InventoryPage />,
      },
      {
        path: "goods",
        element: <GoodsPage />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "panel/login",
    element: <Login />,
  },
];
