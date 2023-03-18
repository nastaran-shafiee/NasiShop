import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { instance } from "../../api/contants";
import { authInterface } from "../../types/interface";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const loginUserSrvice = (data: authInterface) =>
  instance.post("/auth/login", data);

const loginSchema = yup.object({
  username: yup
    .string()

    .required("پر کردن این فیلد الزامی است")
    .min(5, "کاربری باید بیش از 4 کاراکتر باشد"),
  password: yup
    .string()
    .required("پر کردن این فیلد الزامی است")
    .min(5, "رمز عبور باید بیش از 4 کاراکتر باشد"),
});

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/panel/goods");
    }
  }, [Cookies.get("token")]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const handleLoginUser = async (data: authInterface) => {
    try {
      const res = await loginUserSrvice(data);

      if (res.data?.accessToken) {
        Cookies.set("token", res.data?.accessToken);

        navigate("/panel/goods");
      } else {
      }
    } catch (ex) {
      toast.error("شما دسترسی لازم برای ورود را ندارید");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleLoginUser,
  };
};

export default useAuth;
