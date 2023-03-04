import { Outlet } from "react-router-dom";
import PanelHeader from "../Layout/panelHeader";
import SubPanel from "../Layout/subpanel";
function PanelLayout() {
  return (
    <>
      <PanelHeader />
      <SubPanel />
      <Outlet></Outlet>
    </>
  );
}
export default PanelLayout;
