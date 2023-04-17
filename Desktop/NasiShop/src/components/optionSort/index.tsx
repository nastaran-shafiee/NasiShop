import { OptionSortInterface } from "../../types/interface";

function OptionSort({ value, className, text }: OptionSortInterface) {
  return (
    <option
      value={value}
      className={`${className} text-gray focus:bg-purple !important`}
    >
      {text}
    </option>
  );
}
export default OptionSort;
