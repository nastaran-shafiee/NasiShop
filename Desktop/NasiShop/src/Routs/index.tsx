import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Layout from "../components/layout/layou";
import NotFoundPage from "../pages/Site/404page";
import BascketCart from "../pages/Site/basketCart";
import CoatPage from "../pages/Site/coatPage";
import DressPage from "../pages/Site/dressPage";
import MenAccessoryPage from "../pages/Site/menAccessoryPage";
import MenPage from "../pages/Site/menPage";
import MenPantsPage from "../pages/Site/menPantsPage";
import MenShirtPage from "../pages/Site/menShirtPage";
import MenShoePage from "../pages/Site/menShoePage";
import MenSockPage from "../pages/Site/menSocksPage";
import WelcomePage from "../pages/Site/welcomePage";
import WomenAccessoryPage from "../pages/Site/WomenAccessoryPage";
import WomenPage from "../pages/Site/womenPage";
import WomenPantsPage from "../pages/Site/womenPantsPage";
import WomenShirtPage from "../pages/Site/womenShirtPage";
import WomenShoePage from "../pages/Site/womenShoePage";
import WomenSocksPage from "../pages/Site/womenSocksPage";
// const rout--------------------------------------------
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "Cart", element: <BascketCart /> },
      //women
      { path: "Women", element: <WomenPage /> },
      { path: "women/dress", element: <DressPage /> },
      { path: "women/Accessory", element: <WomenAccessoryPage /> },
      { path: "women/pants", element: <WomenPantsPage /> },
      { path: "women/shirts", element: <WomenShirtPage /> },
      { path: "women/shoes", element: <WomenShoePage /> },
      { path: "women/socks", element: <WomenSocksPage /> },
      // men
      { path: "men", element: <MenPage /> },
      { path: "men/Accessory", element: <MenAccessoryPage /> },
      { path: "men/pants", element: <MenPantsPage /> },
      { path: "men/shirts", element: <MenShirtPage /> },
      { path: "men/shoes", element: <MenShoePage /> },
      { path: "men/socks", element: <MenSockPage /> },
      { path: "men/coat", element: <CoatPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
];
