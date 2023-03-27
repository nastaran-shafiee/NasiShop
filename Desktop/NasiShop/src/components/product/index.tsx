import { Icon } from "@iconify/react";

function Product({ img, name, price }) {
  return (
    <>
      <div className="mt-4">
        <img src={img} alt="" className="w-60" />
        <div className="pr-2">
          <p className="text-gray">{name}</p>
          <p className="text-gray text-md"> {price} تومان</p>
        </div>
      </div>
    </>
  );
}
export default Product;
