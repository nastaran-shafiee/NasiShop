import { NavLink } from "react-router-dom";
import Li from "../../components/li";
import Ul from "../../components/ul/ul";

function WomenHeader() {
  return (
    <>
      <div className="w-full bg-gray h-14 text-center ">
        <div className="flex gap-8 items-center p-4 text-white">
          <Li>
            <NavLink
              to="/women/:پیراهن زنانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              پیراهن
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/women/اکسسوری زنانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              زیورآلات
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/women/:شلوار زنانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              شلوار
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/women/:بلوز زنانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              بلوز
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/women/:کفش زنانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              کفش
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/women/:جوراب زنانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              جوراب
            </NavLink>
          </Li>
        </div>
      </div>
    </>
  );
}
export default WomenHeader;
