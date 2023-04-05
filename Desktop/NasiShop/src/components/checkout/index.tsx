import { useEffect, useState } from "react";
import Button from "../button";

function Checkout({ mode2 }: any) {
  const [product2, setProduct2] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const products2 = JSON.parse(localStorage.getItem("Cart") || "[]");
    setProduct2(products2);
  }, [mode2]);

  useEffect(() => {
    setTotalPrice(total(product2));
    console.log(product2);
  }, [product2]);

  function total(products: any) {
    let totalPrice = 0;
    products.forEach((product: any) => {
      totalPrice += product.price * product.quantity;
    });

    return totalPrice;
  }

  const handleFinalizePurchase = () => {
    // TODO: Handle finalizing the purchase
  };

  return (
    <div className="flex flex-col bg-white p-4 gap-4">
      <p>جمع </p>
      <hr />
      <div className="flex gap-1 text-[1rem]">
        <p className="text-[1rem]">قیمت کل:</p>
        <p className="text-[1rem]">{totalPrice}</p>
      </div>
      <p>تخفیف</p>
      <Button
        title="نهایی کردن سبد خرید"
        className="bg-green-500"
        onClick={handleFinalizePurchase}
      />
    </div>
  );
}

export default Checkout;
