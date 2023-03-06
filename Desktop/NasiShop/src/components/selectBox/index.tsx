import { selectInterface } from "../../types/interface";
import Option from "../option";
function SelectBox({ text }: selectInterface) {
  return (
    <div className="flex flex-col ">
      <label htmlFor="">{text}</label>
      <select name="" id="" className="w-48">
        <option value=""></option>
        <Option value={1} text="کفش زنانه" />
        <Option value={2} text="کفش مردانه" />
        <Option value={3} text="کت مردانه" />
        <Option value={4} text="پیراهن زنانه" />
        <Option value={5} text="زیورآلات زنانه" />
        <Option value={6} text="زیورالات مردانه" />
        <Option value={7} text="بلوز زنانه" />
        <Option value={8} text="بلوز مردانه" />
        <Option value={9} text="جوراب زنانه" />
        <Option value={10} text="جوراب مردانه" />
        <Option value={11} text="شلوار زنانه" />
        <Option value={12} text="شلوار مردانه" />
      </select>
    </div>
  );
}
export default SelectBox;
