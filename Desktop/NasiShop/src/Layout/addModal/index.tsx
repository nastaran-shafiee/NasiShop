import Button from "../../components/button";
import Input from "../../components/input";
import SelectBox from "../../components/selectBox";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { changeAddMod } from "../../redux/fetchSlice";
import { createPortal } from "react-dom";
import useAddProduct from "../../hooks/addProduct";
import { FormEvent, useEffect, useState } from "react";
import { createData, updateData } from "../../redux/fetchAction";
import { PRODUCT_URL } from "../../api/endpoint";
import { FetchSliceData } from "../../types/interface";

function AddModal() {
  const dispatch = useDispatch();
  const editMode = useSelector(
    (state: FetchSliceData) => state.fetchSlice.editMode
  );
  const editProduct = useSelector(
    (state: FetchSliceData) => state.fetchSlice.editProduct
  );
  // get value from input---------------------------------------------------=
  const { register, handleSubmit, errors } = useAddProduct();
  // name input-------------------------------------------------
  const {
    value: nameValue,
    valueChangeHandler: nameChange,
    reset: resetName,
    valueEdit: nameEdit,
  } = useAddProduct();
  // price input------------------------------------
  const {
    value: priceValue,
    valueChangeHandler: priceChange,
    reset: resetPrice,
    valueEdit: priceEdit,
  } = useAddProduct();
  // quntity input----------------------------------------------
  const {
    value: quntityValue,
    valueChangeHandler: quantityChange,
    reset: resetQuantity,
    valueEdit: quantityEdit,
  } = useAddProduct();
  // area input----------------------------------------------------
  const {
    value: areaValue,
    valueChangeHandler: areaChanging,
    reset: resetArea,
    valueEdit: areaEdit,
  } = useAddProduct();
  // select iput-----------------------------------
  const {
    value: selectValue,
    valueChangeHandler: categoryChanging,
    reset: resetCategory,
    valueEdit: categoryEdit,
  } = useAddProduct();
  // file input----------------------------------------
  const {
    file: fileimg,
    handleFileChange: handleFileChanging,
    reset: resetFile,
    fileEdit: fileEdit,
  } = useAddProduct();
  // function send to server-----------------------------------------------------------
  function sendToServer() {
    if (!editMode) {
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
    } else {
      const updatedFormData = new FormData();
      updatedFormData.append("id", editProduct.id); // pass the id of the item to be updated
      updatedFormData.append("image", fileimg);
      updatedFormData.append("name", nameValue);
      updatedFormData.append("price", priceValue);
      updatedFormData.append("quantity", quntityValue);
      updatedFormData.append("description", areaValue);
      updatedFormData.append("category", selectValue);
      dispatch(updateData(editProduct.id, updatedFormData, PRODUCT_URL));
      resetName(),
        resetPrice(),
        resetQuantity(),
        resetArea(),
        resetCategory(),
        resetFile();
      closeModal();
    }
  }
  // close modal---------------------------------------------------------------
  function closeModal() {
    dispatch(changeAddMod(false));
  }
  // useeffect for edit mode------------------------------------------------
  useEffect(() => {
    if (editMode) {
      nameEdit(editProduct.name);
      priceEdit(editProduct.price);
      quantityEdit(editProduct.quantity);
      areaEdit(editProduct.description);
      categoryEdit(editProduct.category);
      console.log(editProduct);
    }
  }, [editMode]);
  // mpdal root------------------------------------------------------------------
  const modalRoot = document.getElementById("modal") as HTMLElement;
  // return----------------------------------------------------------------------
  return createPortal(
    <div className="w-full h-full bg-back absolute t-0 z-50 flex justify-center rounded-md mt-0 pt-8">
      <form
        action=""
        className="w-[70%] h-[98%] bg-table flex flex-col md:w-[70%] items-center gap-4"
        onSubmit={handleSubmit(sendToServer)}
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
            error={errors.name?.message}
            validation={{ ...register("name") }}
          />
          <Input
            type="text"
            label="قیمت"
            onChange={priceChange}
            value={priceValue}
            error={errors.price?.message}
            validation={{ ...register("price") }}
          />
          <Input
            type="text"
            label="موجودی"
            onChange={quantityChange}
            value={quntityValue}
            error={errors.quentity?.message}
            validation={{ ...register("quentity") }}
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
        <Button
          type="submit"
          title={editMode ? "آپدیت" : "ذخیره"}
          className="bg-purple mt-8"
        />
      </form>
    </div>,
    modalRoot
  );
}
export default AddModal;
