import { selectInterface } from "../../types/interface";
import Option from "../option";
// select box function----------------------------------------------------------------

function SelectBox({
  text,
  onChange,
  value,
  className,
}: selectInterface): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="">{text}</label>
      <select
        name=""
        id=""
        className={`w-24  text-gray ${className} md:w-60`}
        onChange={onChange}
        value={value}
      >
        <option value="">دسته بندی ها</option>
        <Option value="کفش زنانه" text="کفش زنانه" />
        <Option value="کفش مردانه" text="کفش مردانه" />
        <Option value="کت مردانه" text="کت مردانه" />
        <Option value="پیراهن زنانه" text="پیراهن زنانه" />
        <Option value="اکسسوری زنانه" text="زیورآلات زنانه" />
        <Option value="اکسسوری مردانه" text="زیورالات مردانه" />
        <Option value="بلوز زنانه" text="بلوز زنانه" />
        <Option value="بلوز مردانه" text="بلوز مردانه" />
        <Option value="جوراب زنانه" text="جوراب زنانه" />
        <Option value="جوراب مردانه" text="جوراب مردانه" />
        <Option value="شلوار زنانه" text="شلوار زنانه" />
        <Option value="شلوار مردانه" text="شلوار مردانه" />
      </select>
    </div>
  );
}
export default SelectBox;
