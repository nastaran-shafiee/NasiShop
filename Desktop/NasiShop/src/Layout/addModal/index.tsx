import Button from "../../components/button";
import Input from "../../components/input";
import SelectBox from "../../components/selectBox";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { changeAddMod } from "../../redux/fetchSlice";
function AddModal() {
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(changeAddMod(false));
  }
  return (
    <div className="w-full h-full bg-back absolute t-0 z-50 flex justify-center mt-8 rounded-md">
      <form
        action=""
        className="w-[70%] h-[80%] bg-table flex flex-col md:w-[25%] items-center gap-4"
      >
        <div className="flex justify-between w-[90%] pt-4">
          <p>افزودن/ویرایش کالا</p>
          <Icon
            icon="mdi:close-circle"
            width="25"
            height="25"
            className="text-purple"
            onClick={closeModal}
          />
        </div>
        <Input type="file" label="تصویر کالا" />

        <Input type="text" label="نام کالا" />

        <SelectBox text="دسته بندی" />
        <Button type="submit" title="ذخیره" className="bg-purple" />
      </form>
    </div>
  );
}
export default AddModal;
