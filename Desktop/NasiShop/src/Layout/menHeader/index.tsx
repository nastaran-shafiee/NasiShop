import { NavLink } from "react-router-dom";
import Li from "../../components/li";
import Ul from "../../components/ul/ul";

function MenHeader() {
  return (
    <>
      <div className="w-full bg-gray h-14 text-center ">
        <div className="flex gap-4 items-center p-4 text-white md:gap-8">
          <Li>
            <NavLink
              to="/men/:کت مردانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              کت
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/men/:اکسسوری مردانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              زیورآلات
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/men/:شلوار مردانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              شلوار
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/men/:بلوز مردانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              بلوز
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/men/:کفش مردانه"
              className={({ isActive }) => (isActive ? "activeLink1" : " ")}
            >
              کفش
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/men/:جوراب مردانه"
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
export default MenHeader;
