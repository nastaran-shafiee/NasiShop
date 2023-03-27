import { ChangeEvent } from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
function useAddProduct() {
  const [entredValue, setEntredValue] = useState(" ");
  const [file, setFile] = useState<any>(null);
  //   handle file change------------------------------------------------
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  // validation----------------------------------------------------

  const loginSchema = yup.object({
    name: yup.string().required("پر کردن این فیلد الزامی است"),

    price: yup.number().required("پر کردن این فیلد الزامی است"),
    quentity: yup.number().required("پر کردن این فیلد الزامی است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
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
  const valueEdit = (value: string) => {
    setEntredValue(value);
  };
  const fileEdit = (value: File) => {
    setFile(value);
  };
  //   return function----------------------------------------------------------------------
  return {
    value: entredValue,
    setEntredValue,
    valueChangeHandler,
    reset,
    handleFileChange,
    file,
    register,
    handleSubmit,
    valueEdit,
    fileEdit,
    errors,
  };
}
export default useAddProduct;
