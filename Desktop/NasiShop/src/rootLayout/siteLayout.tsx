import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
function SiteLayout() {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("Cart")!);
    if (cartItems) {
      setQuantity(cartItems.length);
    } else {
      setQuantity(0);
    }
    console.log("object");
  }, [localStorage.getItem("Cart")]);
  useEffect(() => {
    console.log(quantity);
  }, [localStorage.getItem("Cart")]);
  return (
    <>
      <Header quantity={quantity} />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
export default SiteLayout;
