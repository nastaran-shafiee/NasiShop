import Cart from "../../../components/cart";
import image from "../../../../public/img/shoe1.png";
import Checkout from "../../../components/checkout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartChange } from "../../../redux/fetchSlice";

function BascketCart() {
  const [products, setProducts] = useState([]);
  const [mode, setMode] = useState(0);
  const [mode2, setMode2] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  // useeffect-------------------------------------------------------------------------
  useEffect(() => {
    const productCart = localStorage.getItem("Cart");
    const parsedProducts = JSON.parse(productCart!) || [];
    setProducts(parsedProducts);
    setQuantity(parsedProducts.length);
  }, [mode]);
  // total price function----------------------------------------------------------------------

  return (
    <div className="w-full bg-sort min-h-screen	">
      <div className="w-[90%] container mx-auto px-4  md:w-[60%] ">
        <h1>سبد خرید</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <div className="col-span-2">
            {products.length > 0 ? (
              products.map((product: any) => (
                <Cart
                  key={product.id}
                  img={`http://localhost:3002${product.image}`}
                  name={product.name}
                  price={product.price}
                  quntity={product.quantity}
                  id1={product.id}
                  setMode={setMode}
                  setMode2={setMode2}
                />
              ))
            ) : (
              <p className="flex justify-center items-center mt-20">
                سبد خرید شما خالی است
              </p>
            )}
          </div>
          <div className="col-span-1 mt-4 mb-4">
            <Checkout mode2={mode2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BascketCart;
