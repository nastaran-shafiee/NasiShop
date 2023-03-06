import { optionInterface } from "../../types/interface";

function Option({ value, text }: optionInterface) {
  return <option value={value}>{text}</option>;
}
export default Option;
