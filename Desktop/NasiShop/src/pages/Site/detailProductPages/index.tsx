import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../../../api/endpoint";
import Button from "../../../components/button";
import { fetchSingleProduct, updateData } from "../../../redux/fetchAction";
import { FetchSliceData } from "../../../types/interface";
import { Icon } from "@iconify/react";
import { instance } from "../../../api/contants";
import { cartChange } from "../../../redux/fetchSlice";
// function detail product----------------------------------------------------------------------------------
function DetailProductPage() {
  const product = useSelector(
    (state: FetchSliceData) => state.fetchSlice.singleProduct
  );
  const Cart = useSelector((state: FetchSliceData) => state.fetchSlice.Cart);
  const dispatch = useDispatch();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDetailsOpen2, setIsDetailsOpen2] = useState(false);

  const [temp, setTemp] = useState<number>(0);
  const param = useParams();

  const productId = param.id?.substring(1);
  // useeffect-------------------------------------------------------------------------------------------------
  useEffect(() => {
    dispatch(fetchSingleProduct(productId, PRODUCT_URL));
  }, [dispatch, product]);

  // function toggle deatil----------------------------------------------------------------------------------------------
  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };
  const toggleDetails2 = () => {
    setIsDetailsOpen2(!isDetailsOpen2);
  };

  // increment------------------------------------------------------------------------------------------------
  const handleChangeQuantity = (amount: number) => {
    return setTemp((prevTemp) => prevTemp + amount);
  };
  // function decremnt------------------------------------------------------------------------------------
  function delete1() {
    setTemp((prevTemp) => prevTemp - 1);
  }
  // function add to cart----------------------------------------------------------------------------
  function addToCart() {
    let existingData = localStorage.getItem("Cart");

    let parsedData = existingData ? JSON.parse(existingData) : [];

    const itemIndex = parsedData.findIndex(
      (item: any) => item.id === product.id
    );

    if (itemIndex !== -1) {
      parsedData[itemIndex].quantity += temp;
      parsedData[itemIndex].totalprice =
        Number(product.price) * parsedData[itemIndex].quantity;
    } else {
      // Add the new data to the array
      parsedData.push({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: temp,
        totalprice: Number(product.price) * Number(temp),
      });
      dispatch(cartChange(1));
    }

    const updatedData = JSON.stringify(parsedData);

    localStorage.setItem("Cart", updatedData);

    const newQuantity = {
      ...product,
      quantity: Number(product.quantity) - temp,
    };

    dispatch(updateData(product.id, newQuantity, PRODUCT_URL));

    setTemp(Number(0));
  }

  // return function----------------------------------------------------------------------------------------
  return (
    <>
      <div className="w-[full] flex justify-end mt-8 mb-8">
        <div className="grid grid-cols-1 w-[100%] md:w-[80%] md:grid-cols-2 gap-12">
          <div className="flex gap-4 justify-self-center w-full">
            <div className="hidden md:flex flex-col gap-8 items-end justify-start ">
              <div className="w-16 h-16">
                {" "}
                <img
                  src={`http://localhost:3002${product.image}`}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="w-16 h-16">
                {" "}
                <img
                  src={`http://localhost:3002${product.image}`}
                  alt=""
                  className="w-full"
                />
              </div>{" "}
              <div className="w-16 h-16">
                {" "}
                <img
                  src={`http://localhost:3002${product.image}`}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full ">
              <img
                src={`http://localhost:3002${product.image}`}
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col place-self-start gap-4 m-4 md:gap-4">
            <Button
              title={`افزودن به سبد خرید ${temp}`}
              className="bg-purple"
              onClick={addToCart}
              disabled={Number(temp) === 0}
            />

            <div> {product.name}</div>
            <div>{product.price} تومان </div>
            <div
              onClick={toggleDetails}
              className="text-purple flex gap-2 items-start"
            >
              <p>جزییات محصول</p>
              <Icon
                icon="ic:baseline-keyboard-arrow-down"
                width="25"
                height="25"
              />
            </div>
            {isDetailsOpen && <div>{product.description}</div>}

            <div className="w-32 h-8 bg-gray rounded-md flex justify-between items-center p-4 text-white text-lg">
              <p>موجودی</p>
              <p>{product.quantity}</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div
                onClick={toggleDetails2}
                className="text-purple flex gap-4 items-start"
              >
                <p>انتخاب تعداد محصول</p>
                <Icon
                  icon="ic:baseline-keyboard-arrow-down"
                  width="25"
                  height="25"
                />
              </div>
              {isDetailsOpen2 && (
                <div className="flex gap-4 items-center">
                  <div className="w-28 h-8 bg-gray rounded-full flex justify-between items-center p-4 text-white text-lg pr-8">
                    <button onClick={delete1} disabled={temp === 0}>
                      -
                    </button>
                    <p>{temp}</p>
                    <button
                      onClick={() => handleChangeQuantity(+1)}
                      disabled={Number(temp) === Number(product.quantity)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-red-500 text-sm">
                    {Number(product.quantity) === Number(temp)
                      ? "موجودی تمام شد"
                      : ""}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailProductPage;
