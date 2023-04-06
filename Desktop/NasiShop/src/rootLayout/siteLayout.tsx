import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import { useDispatch, useSelector } from "react-redux";
import { cartChange } from "../redux/fetchSlice";
import { FetchSliceData } from "../types/interface";
function SiteLayout() {
 
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default SiteLayout;
