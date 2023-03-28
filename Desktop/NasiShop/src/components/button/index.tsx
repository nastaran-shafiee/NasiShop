import { buttonInterface } from "../../types/interface";

function Button({
  className,
  title,
  onClick,
  type,
  disabled,
}: buttonInterface) {
  return (
    <button
      className={`w-40 h-8 bg-header text-White ${className} rounded-md`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
export default Button;
