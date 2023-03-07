import { ChangeEvent } from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function useAddProduct() {
  const [entredValue, setEntredValue] = useState(" ");
  const [file, setFile] = useState(null);
  //   handle file change------------------------------------------------
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  // validation----------------------------------------------------
  // const loginSchema = yup.object({
  //   name: yup.required("پر کردن این فیلد الزامی است"),
  // });
  const loginSchema = yup.object({
    name: yup
      .string()

      .required("پر کردن این فیلد الزامی است"),

    price: yup
      .number("باید عدد وارد کنید")
      .required("پر کردن این فیلد الزامی است"),
    quentity: yup
      .number("باید عدد وارد کنید")
      .required("پر کردن این فیلد الزامی است"),
  });

  //   handle valu change----------------------------------------------------

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredValue(event.target.value);
  };
  // reset function--------------------------------------------------------------------------
  const reset = () => {
    setEntredValue(" ");
    setFile(null);
  };
  //   return function----------------------------------------------------------------------
  return {
    value: entredValue,
    setEntredValue,
    valueChangeHandler,
    reset,
    handleFileChange,
    file,
  };
}
export default useAddProduct;
