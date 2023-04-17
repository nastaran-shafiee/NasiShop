import Li from "../../components/li";
import Nav from "../../components/nav";
import Ul from "../../components/ul/ul";
import logo from "../../../public/img/2.png";
import { Link } from "react-router-dom";
function PanelHeader() {
  return (
    <>
      <header className="">
        <Nav>
          <Ul padding="px-8">
            <Li>
              <Link to="/" className="text-sm md:text-md lg:text-xl">
                بازگشت به سایت
              </Link>
            </Li>

            <Li>
              <img src={logo} alt="" className="w-12 h-12" />
            </Li>
            <Li>مدیریت نسی شاپ </Li>
          </Ul>
        </Nav>
      </header>
    </>
  );
}
export default PanelHeader;
