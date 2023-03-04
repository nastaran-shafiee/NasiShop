import { inputInterface } from "../../types/interface";

function Input({ type, className, placeholder }: inputInterface) {
  return (
    <input
      type={type}
      className={`w-48 h-[1.6rem] border-[0.5px] ${className}`}
      placeholder={placeholder}
    />
  );
}
export default Input;
