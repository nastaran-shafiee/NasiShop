import { buttonInterface } from "../../types/interface";

function Button({ className, title, onClick }: buttonInterface) {
  return (
    <button
      className={`w-48 h-8 bg-header text-White  ${className} rounded-md`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
export default Button;
