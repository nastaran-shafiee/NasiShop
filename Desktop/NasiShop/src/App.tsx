import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { routes } from "./Routs";
const Router = createBrowserRouter(routes);

// app function
function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={Router}>
        <div className="App"></div>
      </RouterProvider>
    </>
  );
}

export default App;
