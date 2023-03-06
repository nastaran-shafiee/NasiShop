import { Outlet, useNavigation } from "react-router-dom";
import PanelHeader from "../Layout/panelHeader";
import SubPanel from "../Layout/subpanel";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function PanelLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/panel/login");
    }
  }, [Cookies.get("token")]);
  return (
    <>
      <PanelHeader />
      <SubPanel />
      <Outlet></Outlet>
    </>
  );
}
export default PanelLayout;
