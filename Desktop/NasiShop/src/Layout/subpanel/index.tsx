import { NavLink } from "react-router-dom";
import Li from "../../components/li";
function SubPanel() {
  return (
    <div className="w-full h-14 text-center bg-gray2">
      <div className="flex gap-8 items-center p-4 text-white justify-center text-sm  md:text-[2rem]">
        <Li>
          <NavLink
            to="/panel/goods"
            className={({ isActive }) => (isActive ? "activeLink1" : " ")}
          >
            کالاها
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/panel/investory "
            className={({ isActive }) => (isActive ? "activeLink1" : " ")}
          >
            موجودی و قیمت
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/panel/order"
            className={({ isActive }) => (isActive ? "activeLink1" : " ")}
          >
            سفارش ها
          </NavLink>
        </Li>
        <Li>
          <NavLink
            to="/panel/setting"
            className={({ isActive }) => (isActive ? "activeLink1" : " ")}
          >
            تنظیمات
          </NavLink>
        </Li>
      </div>
    </div>
  );
}
export default SubPanel;
