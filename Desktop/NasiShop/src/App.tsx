import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { routes } from "./Routs";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "./types/interface";
import { cartChange } from "./redux/fetchSlice";
// app function
function App(): JSX.Element {
  const Router = createBrowserRouter(routes);

  // return function
  return (
    <>
      <RouterProvider router={Router}>
        <div className="App"></div>
      </RouterProvider>
    </>
  );
}

export default App;
