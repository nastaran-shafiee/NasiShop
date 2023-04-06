import { CartInterface, FetchSliceData } from "../../types/interface";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../redux/fetchAction";
import { PRODUCT_URL } from "../../api/endpoint";
import { instance } from "../../api/contants";

// function cart----------------------------------------------------------------
function Cart({
  img,
  name,
  price,
  quntity,
  id1,
  setMode,
  setMode2,
}: CartInterface) {
  const [isdone, setIsdone] = useState(false);
  const dispatch = useDispatch();
  const [quantity1, setQuantity] = useState<any>(quntity);

  //   useeffect-------------------------------------------------------------------

  // increase----------------------------------------------------------------------
  async function increaseProduct() {
    const cartItems = JSON.parse(localStorage.getItem("Cart") || "[]");
    const itemIndex = cartItems.findIndex((item: any) => item.name === name);

    try {
      const response = await instance.get(`${PRODUCT_URL}/${id1}`);

      if (Number(response.data.quantity)) {
        setIsdone(false);
        const newQuantity = {
          ...response.data,
          quantity: Number(response.data.quantity) - 1,
        };
        dispatch(updateData(id1, newQuantity, PRODUCT_URL));
        if (itemIndex !== -1) {
          cartItems[itemIndex].quantity += 1;
        }
        localStorage.setItem("Cart", JSON.stringify(cartItems));
        setQuantity(quantity1 + 1);
      } else {
        setIsdone(true);
      }
    } catch (error) {
      console.log(error);
    }
    setMode2((prevValue: number) => prevValue + 1);
  }
  // //   decrease-------------------------------------------------------------------------------------------------

  async function decreaseProduct() {
    const cartItems = JSON.parse(localStorage.getItem("Cart") || "[]");
    const itemIndex = cartItems.findIndex((item: any) => item.name === name);

    try {
      const response = await instance.get(`${PRODUCT_URL}/${id1}`);

      if (quantity1 > 1) {
        setIsdone(false);
        const newQuantity = {
          ...response.data,
          quantity: Number(response.data.quantity) + 1,
        };
        dispatch(updateData(id1, newQuantity, PRODUCT_URL));
        if (itemIndex !== -1) {
          cartItems[itemIndex].quantity -= 1;
        }
        localStorage.setItem("Cart", JSON.stringify(cartItems));
        setQuantity(quantity1 - 1);
      } else {
        deleteCart(id1);
      }
    } catch (error) {
      console.log(error);
    }
    setMode2((prevValue: number) => prevValue + 1);
  }
  //   function delete cart-------------------------------------------------------------
  async function deleteCart(id1: number) {
    const cartItems = JSON.parse(localStorage.getItem("Cart") || "[]");
    const updatedCartItems = cartItems.filter((item: any) => item.id !== id1);
    localStorage.setItem("Cart", JSON.stringify(updatedCartItems));

    try {
      const response = await instance.get(`${PRODUCT_URL}/${id1}`);
      const newQuantity = {
        ...response.data,
        quantity: Number(response.data.quantity) + quantity1,
      };
      dispatch(updateData(id1, newQuantity, PRODUCT_URL));
    } catch (error) {
      console.log(error);
    }
    setMode((prevValue: number) => prevValue + 1);
    setMode2((prevValue: number) => prevValue + 1);
  }
  // return function--------------------------------------------------------------------------
  return (
    <div className=" w-full flex p-4 gap-6 bg-white my-4">
      <div>
        <img src={img} alt="" className="w-20 h-28" />
      </div>
      <div className=" w-[68%] flex flex-col gap-2 ">
        <p className="text-[1rem]">{name}</p>
        <p className="text-[1rem]">{price} تومان</p>
        <div className="flex gap-6">
          <div className="w-24 h-6 bg-gray rounded-full flex justify-between items-center p-4 text-white text-lg">
            <button onClick={decreaseProduct}>-</button>
            <p className="text-sm">{quantity1}</p>
            <button onClick={increaseProduct}>+</button>
          </div>
          {isdone ? (
            <p className="text-red-500 text-[1rem]">موجودی تمام شد</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="">
        <Icon
          icon="streamline:interface-delete-1-remove-add-button-buttons-delete"
          width="20"
          height="20"
          className="text-red-700"
          onClick={() => {
            deleteCart(id1);
          }}
        />
      </div>
    </div>
  );
}
export default Cart;
