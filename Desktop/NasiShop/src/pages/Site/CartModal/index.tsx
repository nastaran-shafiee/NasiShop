import { useState } from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { Calendar } from "react-multi-date-picker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// modalcart---------------------------------------------------------
function ModalCart() {
  let [value, setValue] = useState(new Date());
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2);
  // yup-----------------------------------------------------------------
  const schema = yup.object({
    username: yup.string().required("پرکردن این فیلد الزامی است"),
    lastname: yup.string().required("پرکردن این فیلد الزامی است"),
    address: yup.string().required("پرکردن این فیلد الزامی است"),
    phone: yup.number().required("پرکردن این فیلد الزامی است"),
  });
  // useform-------------------------------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // submit handeler----------------------------------------------------------------------
  function submitHandler(data: any) {
    const obj = {
      ...data,
      expectAt: value,
    };
    const queryString = Object.entries(obj)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const url = `http://localhost:5173/payment?${queryString}`;
    window.location.href = url;
  }
  function dataonchane(date: any) {
    setValue(date.toDate());
  }
  // return function-------------------------------------------------------------------------
  return (
    <div className="w-full h-full bg-sort flex justify-center rounded-md mt-0 pt-8">
      <form
        action=""
        className="w-[90%] flex flex-col md:w-[80%] items-center gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex w-[100%] justify-start mb-10">
          <p className="text-2xl text-purple">نهایی کردن خرید</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
          <Input
            type="text"
            label="نام"
            className="border-none w-72"
            validation={{ ...register("username") }}
            error={errors.username?.message}
          />
          <Input
            type="text"
            label="نام خانوادگی"
            className="border-none w-72"
            validation={{ ...register("lastname") }}
            error={errors.lastName?.message}
          />
          <Input
            type="text"
            label="آدرس"
            className="border-none w-72"
            validation={{ ...register("address") }}
            error={errors.address?.message}
          />
          <Input
            type="text"
            label="تلفن همراه"
            className="border-none w-72"
            validation={{ ...register("phone") }}
            error={errors.phone?.message}
          />
          <div className="border-none w-72">
            <label className="block text-lg text-gray-700 mb-2">
              تاریخ تحویل سفارش
            </label>
            <DatePicker
              value={value}
              onChange={dataonchane}
              format="MM/DD/YYYY"
              calendar={persian}
              locale={persian_fa}
              minDate={minDate}
            />
          </div>
        </div>
        <Button type="submit" className="bg-purple mt-8 mb-8" title="پرداخت" />
      </form>
    </div>
  );
}

export default ModalCart;
