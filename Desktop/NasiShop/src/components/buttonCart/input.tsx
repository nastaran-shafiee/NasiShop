import { ButtonCartInterface } from "../../types/interface";

function ButtonCart({ children, position }: ButtonCartInterface) {
  return (
    <div
      className={`absolute w-40 h-10 bg-White flex justify-center items-center rounded-md ${position}`}
    >
      {children}
    </div>
  );
}
export default ButtonCart;
