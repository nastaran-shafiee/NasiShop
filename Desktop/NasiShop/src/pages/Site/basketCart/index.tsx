import Cart from "../../../components/cart";
import image from "../../../../public/img/shoe1.png";
import Checkout from "../../../components/checkout";

function BascketCart() {
  const productCart = localStorage.getItem("Cart");

  function TotalPrice() {
    const products = JSON.parse(productCart);
    let totalPrice = 0;
    products.map((product: any) => {
      totalPrice += product.totalprice;
    });

    return totalPrice;
  }
  return (
    <div className="w-full bg-sort min-h-screen	">
      <div className="w-[90%] container mx-auto px-4  md:w-[60%] ">
        <h1>سبد خرید</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <div className="col-span-2">
            {productCart ? (
              JSON.parse(productCart).map((product: any) => (
                <Cart
                  key={product.id}
                  img={`http://localhost:3002${product.image}`}
                  name={product.name}
                  price={product.price}
                  quntity={product.quantity}
                />
              ))
            ) : (
              <p className="flex justify-center items-center mt-20">
                سبد خرید شما خالی است
              </p>
            )}
          </div>
          <div className="col-span-1 mt-4 mb-4">
            <Checkout totalprice={TotalPrice()} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BascketCart;
