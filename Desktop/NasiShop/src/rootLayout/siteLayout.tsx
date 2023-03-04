import { Outlet } from "react-router-dom";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default SiteLayout;
