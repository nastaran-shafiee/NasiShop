import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../../../api/endpoint";
import Button from "../../../components/button";
import { fetchSingleProduct } from "../../../redux/fetchAction";
import { FetchSliceData } from "../../../types/interface";
import { Icon } from "@iconify/react";
function DetailProductPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const param = useParams();

  const productId = param.id?.substring(1);
  const product = useSelector(
    (state: FetchSliceData) => state.fetchSlice.singleProduct
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(productId, PRODUCT_URL));
  }, [dispatch, product]);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const [updatedQuantity, setUpdatedQuantity] = useState(product.quantity);
  const incrementQuantity = () => {
    setUpdatedQuantity(updatedQuantity - 1);
    setCounter(counter + 1);
    console.log("hi");
  };

  const decrementQuantity = () => {
    if (updatedQuantity < product.quantity) {
      setUpdatedQuantity(updatedQuantity + 1);
      setCounter(counter - 1);
    }
  };

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
          <div className="flex flex-col place-self-start gap-4 m-4 md:gap-12">
            <Button
              title={`افزودن به سبد خرید ${counter}`}
              className="bg-purple"
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
            <div className="w-40 h-12 bg-gray rounded-full flex justify-between items-center p-4 text-white text-lg">
              <button
                onClick={decrementQuantity}
                disabled={updatedQuantity === product.quantity}
              >
                -
              </button>
              {updatedQuantity === 0 ? (
                <span>موجودی تمام شد</span>
              ) : (
                <span>{updatedQuantity}</span>
              )}

              <button
                onClick={incrementQuantity}
                disabled={updatedQuantity === 0}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailProductPage;
