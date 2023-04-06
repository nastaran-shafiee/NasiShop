import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../api/contants";
import { PRODUCT_URL } from "../../api/endpoint";
import { updateData } from "../../redux/fetchAction";

function Product({ img, name, price, onClick, id1, quntity }: any) {
  return (
    <>
      <div className="mt-4">
        <img src={img} alt="" className="w-60" onClick={onClick} />
        <div className="flex items-center">
          <div className="pr-2">
            <p className="text-gray">{name}</p>
            <p className="text-gray text-md"> {price} تومان</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
