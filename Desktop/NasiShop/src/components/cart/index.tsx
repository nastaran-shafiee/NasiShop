import { CartInterface } from "../../types/interface";
import { Icon } from "@iconify/react";
function Cart({ img, name, price, quntity }: CartInterface) {
  return (
    <div className=" w-full flex p-4 gap-6 bg-white my-4">
      <div>
        <img src={img} alt="" className="w-20 h-28" />
      </div>
      <div className=" w-[68%] flex flex-col gap-2 ">
        <p className="text-[1rem]">{name}</p>
        <p className="text-[1rem]">{price} تومان</p>

        <div className="w-24 h-6 bg-gray rounded-full flex justify-between items-center p-4 text-white text-lg">
          <button>-</button>
          <p className="text-sm">{quntity}</p>
          <button>+</button>
        </div>
      </div>
      <div className="">
        <Icon
          icon="streamline:interface-delete-1-remove-add-button-buttons-delete"
          width="20"
          height="20"
          className="text-red-700"
        />
      </div>
    </div>
  );
}
export default Cart;
