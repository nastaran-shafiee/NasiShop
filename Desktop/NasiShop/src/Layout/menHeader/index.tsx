import { NavLink } from "react-router-dom";
import Li from "../../components/li";
import Ul from "../../components/ul/ul";

function MenHeader() {
  return (
    <>
      <div className="w-full bg-gray h-14 text-center ">
        <div className="flex gap-8 items-center p-4 text-white">
          <Li>
            <NavLink to="/men/coat">کت</NavLink>
          </Li>
          <Li>
            <NavLink to="/men/Accessory">زیورآلات</NavLink>
          </Li>
          <Li>
            <NavLink to="/men/pants">شلوار</NavLink>
          </Li>
          <Li>
            <NavLink to="/men/shirts">بلوز</NavLink>
          </Li>
          <Li>
            <NavLink to="/men/shoes">کفش</NavLink>
          </Li>
          <Li>
            <NavLink to="/men/socks">جوراب</NavLink>
          </Li>
        </div>
      </div>
    </>
  );
}
export default MenHeader;
