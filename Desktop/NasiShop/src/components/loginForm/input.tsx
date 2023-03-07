import logo from "../../../public/img/2.png";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import Input from "../input";
import useAuth from "../../hooks/Auth";
import Cookies from "js-cookie";
import { useEffect } from "react";
function LoginForm() {
  const navigate = useNavigate();
  function submit1() {
    navigate("/panel/goods");
  }

  const { register, handleSubmit, errors, handleLoginUser } = useAuth();
  // return function---------------------------
  return (
    <>
      <form
        className="w-80 h-96 bg-White flex flex-col items-center gap-4 p-4 text-gray"
        onSubmit={handleSubmit(handleLoginUser)}
      >
        <h1 className="text-2xl">ورود به پنل ادمین</h1>
        <img src={logo} alt="" className="w-12 h-12" />

        <Input
          type="text"
          error={errors.username?.message}
          validation={{ ...register("username") }}
          label="نام کاربری"
        />

        <Input
          type="password"
          error={errors.password?.message}
          validation={{ ...register("password") }}
          label="رمز عبور"
        />

        <Button title="ورود" type="submit" className="w-60" />
        <p className="text-sm">فراموشی رمز عبور</p>
      </form>
    </>
  );
}
export default LoginForm;
