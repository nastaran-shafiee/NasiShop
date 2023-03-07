import Button from "../../components/button";
import Input from "../../components/input";
import SelectBox from "../../components/selectBox";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { changeAddMod } from "../../redux/fetchSlice";
import { createPortal } from "react-dom";
import useAddProduct from "../../hooks/addProduct";
import { FormEvent, useState } from "react";
import { createData } from "../../redux/fetchAction";
import { PRODUCT_URL } from "../../api/endpoint";

function AddModal() {
  const dispatch = useDispatch();
  // get value from input---------------------------------------------------=

  const {
    value: nameValue,
    valueChangeHandler: nameChange,
    reset: resetName,
  } = useAddProduct();
  const {
    value: priceValue,
    valueChangeHandler: priceChange,
    reset: resetPrice,
  } = useAddProduct();
  const {
    value: quntityValue,
    valueChangeHandler: quantityChange,
    reset: resetQuantity,
  } = useAddProduct();
  const {
    value: areaValue,
    valueChangeHandler: areaChanging,
    reset: resetArea,
  } = useAddProduct();
  const {
    value: selectValue,
    valueChangeHandler: categoryChanging,
    reset: resetCategory,
  } = useAddProduct();
  const {
    file: fileimg,
    handleFileChange: handleFileChanging,
    reset: resetFile,
  } = useAddProduct();
  // function send to server-----------------------------------------------------------
  function sendToServer(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", fileimg);
    formData.append("name", nameValue);
    formData.append("price", priceValue);
    formData.append("quantity", quntityValue);
    formData.append("description", areaValue);
    formData.append("category", selectValue);

    dispatch(createData(formData, PRODUCT_URL));

    resetName(),
      resetPrice(),
      resetQuantity(),
      resetArea(),
      resetCategory(),
      resetFile();
  }
  // close modal---------------------------------------------------------------
  function closeModal() {
    dispatch(changeAddMod(false));
  }
  // mpdal root------------------------------------------------------------------
  const modalRoot = document.getElementById("modal");
  // return----------------------------------------------------------------------
  return createPortal(
    <div className="w-full h-full bg-back absolute t-0 z-50 flex justify-center rounded-md mt-0 pt-8">
      <form
        action=""
        className="w-[70%] h-[98%] bg-table flex flex-col md:w-[70%] items-center gap-4"
        onSubmit={sendToServer}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
          <Input
            type="file"
            label="تصویر کالا"
            onChange={handleFileChanging}
            // value={imgValue}
          />
          <Input
            type="text"
            label="نام کالا"
            onChange={nameChange}
            value={nameValue}
          />
          <Input
            type="text"
            label="قیمت"
            onChange={priceChange}
            value={priceValue}
          />
          <Input
            type="text"
            label="موجودی"
            onChange={quantityChange}
            value={quntityValue}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="">توضیحات</label>
            <textarea
              name=""
              id=""
              className="w-60"
              value={areaValue}
              onChange={areaChanging}
            />
          </div>
          <SelectBox
            text="دسته بندی"
            onChange={categoryChanging}
            value={selectValue}
          />
        </div>
        <Button type="submit" title="ذخیره" className="bg-purple mt-8" />
      </form>
    </div>,
    modalRoot
  );
}
export default AddModal;
