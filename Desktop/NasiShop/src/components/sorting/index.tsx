import OptionSort from "../optionSort";
import Sort from "../sort";

function Sorting() {
  return (
    <div className="w-[95%] grid grid-cols-2 justify-center md:grid-cols-4 bg-sort h-16 items-center gap-8 p-2 rounded-xl">
      <Sort>
        <OptionSort text="مرتب براساس" value="" />
        <OptionSort text="قیمت از زیاد به کم" value="highPrice" />
        <OptionSort text="قسمت ز کم به زیاد" value="low price" />
      </Sort>
      <Sort>
        <OptionSort text="تخفیفات" value="" />

        <OptionSort text="زیر 40%" value="highPrice" />
        <OptionSort text=" بالای 40%" value="low price" />
        <OptionSort text=" بدون تخفیفات" value="low price" />
      </Sort>{" "}
      <Sort>
        <OptionSort text="مرتب براساس" value="" />

        <OptionSort text="قیمت های زیر یک ملیون" value="highPrice" />
        <OptionSort text="قیمت های بالای یک ملیون" value="low price" />
      </Sort>{" "}
      <Sort>
        <OptionSort text="مرتب براساس" value="" />

        <OptionSort text="قیمت از زیاد به کم" value="highPrice" />
        <OptionSort text="قسمت ز کم به زیاد" value="low price" />
      </Sort>
    </div>
  );
}
export default Sorting;
