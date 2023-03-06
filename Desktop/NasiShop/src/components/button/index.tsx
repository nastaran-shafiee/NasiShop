import { buttonInterface } from "../../types/interface";

function Button({ className, title, onClick, type }: buttonInterface) {
  return (
    <button
      className={`w-48 h-8 bg-header text-White  ${className} rounded-md`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
export default Button;
