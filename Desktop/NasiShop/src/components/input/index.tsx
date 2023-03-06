import { inputInterface } from "../../types/interface";

function Input({
  type,
  className,
  placeholder,
  error,
  validation,
  label,
}: inputInterface) {
  return (
    <div className="flex flex-col ">
      {" "}
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className={`w-48 h-[1.6rem] border-[0.5px] ${className}`}
        placeholder={placeholder}
        {...validation}
      />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
}
export default Input;
