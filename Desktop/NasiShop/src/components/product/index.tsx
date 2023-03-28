import { Icon } from "@iconify/react";

function Product({ img, name, price,onClick }) {
  return (
    <>
      <div className="mt-4">
        <img src={img} alt="" className="w-60"  onClick={onClick}/>
        <div className="pr-2">
          <p className="text-gray">{name}</p>
          <p className="text-gray text-md"> {price} تومان</p>
        </div>
      </div>
    </>
  );
}
export default Product;
