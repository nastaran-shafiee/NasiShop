import { NavLink } from "react-router-dom";
import Li from "../../components/li";
import Ul from "../../components/ul/ul";

function WomenHeader() {
  return (
    <>
      <div className="w-full bg-gray h-14 text-center ">
        <div className="flex gap-8 items-center p-4 text-white">
          <Li>
            <NavLink to="/women/dress">پیراهن</NavLink>
          </Li>
          <Li>
            <NavLink to="/women/Accessory">زیورآلات</NavLink>
          </Li>
          <Li>
            <NavLink to="/women/pants">شلوار</NavLink>
          </Li>
          <Li>
            <NavLink to="/women/shirts">بلوز</NavLink>
          </Li>
          <Li>
            <NavLink to="/women/shoes">کفش</NavLink>
          </Li>
          <Li>
            <NavLink to="/women/socks">جوراب</NavLink>
          </Li>
        </div>
      </div>
    </>
  );
}
export default WomenHeader;
