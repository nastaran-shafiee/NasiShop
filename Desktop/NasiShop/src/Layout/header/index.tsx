import logo from "../../../public/img/2.png";
import { Icon } from "@iconify/react";
import Input from "../../components/input";
import { NavLink } from "react-router-dom";
import Ul from "../../components/ul/ul";
import Nav from "../../components/nav";
import Li from "../../components/li";
// header componet---------------------------------------------------------------------------------------
function Header() {
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
                className="md:w-[90%] rounded-3xl pr-2"
              />
            </div>
            <div className="flex w-1/2 justify-between items-center md:w-3/12 pl-6">
              <Li>
                <Icon icon="mdi:cards-heart-outline" width="35" height="35" />
              </Li>
              <Li>داشبورد</Li>
              <Li>
                <NavLink to="/cart">
                  {" "}
                  <Icon icon="mdi:cart-heart" width="35" height="35" />
                </NavLink>
              </Li>
              <Li>
                <NavLink to="/">
                  {" "}
                  <img src={logo} alt="" className="w-10 h-10" />
                </NavLink>
              </Li>
            </div>
          </Ul>
        </Nav>
      </header>
    </>
  );
}
export default Header;
