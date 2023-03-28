import { inputInterface } from "../../types/interface";

function Input({
  type,
  className,
  placeholder,
  error,
  validation,
  label,
  onChange,
  value,
  onKeyDown,
  onBlur,
}: inputInterface) {
  return (
    <div className="flex flex-col gap-2 ">
      {" "}
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className={`w-60 h-[2rem] border-[0.5px] ${className}`}
        placeholder={placeholder}
        {...validation}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
}
export default Input;
