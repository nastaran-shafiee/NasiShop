import logo from "../../../public/img/2.png";
import { Icon } from "@iconify/react";
import Input from "../../components/input";
import { NavLink } from "react-router-dom";
import Ul from "../../components/ul/ul";
import Nav from "../../components/nav";
import Li from "../../components/li";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "../../types/interface";
import { cartChange } from "../../redux/fetchSlice";

// header componet---------------------------------------------------------------------------------------
function Header() {
  const Cart = useSelector((state: FetchSliceData) => state.fetchSlice.Cart);
  let number: number = localStorage.getItem("Number")
    ? parseInt(localStorage.getItem("Number")!)
    : 0;
  return (
    <>
      <header>
        <Nav>
          <Ul>
            <div className="hidden md:flex w-2/12 justify-around pl-2 items-center h-full ">
              <div className="w-1/2 h-14 border-l-2  flex items-center justify-center">
                <NavLink
                  to="/Women"
                  className={({ isActive }) => (isActive ? "activeLink" : " ")}
                >
                  زنانه
                </NavLink>
              </div>
              <div className="w-1/2 h-14 border-l-2  flex items-center justify-center">
                <NavLink
                  to="/men"
                  className={({ isActive }) => (isActive ? "activeLink" : " ")}
                >
                  مردانه
                </NavLink>
              </div>
            </div>
            <div className="w-6/12 pr-2 ">
              <Input
                type="search"
                placeholder="جست و جو ی محصولات"
                className="w-[90%] md:w-[90%] rounded-3xl pr-2"
              />
            </div>
            <div className="flex gap-4 w-1/2 justify-between items-center md:w-3/12 pl-6 ">
              <Li>
                <Icon icon="mdi:cards-heart-outline" width="30" height="30" />
              </Li>
              <Li>
                <NavLink to="/panel/login">داشبورد</NavLink>
              </Li>
              <Li>
                <div className="flex relative">
                  {number > 0 ? (
                    <div className="rounded-full bg-red-500 w-5 h-5 flex justify-center items-center text-sm absolute left-4">
                      {number}
                    </div>
                  ) : (
                    " "
                  )}
                  <NavLink to="/cart">
                    {" "}
                    <Icon icon="mdi:cart-heart" width="30" height="30" />
                  </NavLink>
                </div>
              </Li>
              <div className="hidden md:block">
                <NavLink to="/">
                  {" "}
                  <img src={logo} alt="" className="w-10 h-10" />
                </NavLink>
              </div>
            </div>
          </Ul>
        </Nav>
      </header>
    </>
  );
}
export default Header;
