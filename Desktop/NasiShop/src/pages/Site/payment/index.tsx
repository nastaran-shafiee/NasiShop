import image from "../../../../public/img/dargah.png";
import Button from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../../api/contants";
import { ORDER_URL } from "../../../api/endpoint";
function Peyment({}) {
  const [user, setUser] = useState({});
  const [price, setprices] = useState(0);

  const products2 = JSON.parse(localStorage.getItem("Cart") || "[]");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get("username");
    const lastname = searchParams.get("lastname");
    const address = searchParams.get("address");
    const phone = searchParams.get("phone");
    const expectAt = searchParams.get("expectAt");

    const paymentObject = {
      username,
      lastname,
      address,
      phone,
      expectAt,
    };

    setUser(paymentObject);
  }, [location.search]);
  useEffect(() => {
    let totalPrice = 0;
    products2.forEach((product: any) => {
      totalPrice += product.price * product.quantity;
    });
    setprices(totalPrice);
  }, [products2]);
  // payment function--------------------------------------------------------------------------------------------------------

  function payment() {
    const order = {
      ...user,
      id: Date.now(),
      Products: products2,
      delivered: false,
      createdAt: Date.now(),
      prices: price,
    };
    instance
      .post(ORDER_URL, order)
      .then((response) => {
        console.log("Order submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
        // handle the error, if needed
      });
    localStorage.clear();
    const url = `http://localhost:5175/success?consignment=${order.id}`;
    window.location.href = url;
  }

  function cancel() {
    const url = `http://localhost:5175/fail`;
    window.location.href = url;
  }
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <img src={image} alt="" className="w-[40%]" />
      <div className="flex justify-center gap-3">
        <Button title="پرداخت" className="bg-green-500" onClick={payment} />
        <Button title="انصراف" className="bg-red-500" onClick={cancel} />
      </div>
    </div>
  );
}
export default Peyment;
