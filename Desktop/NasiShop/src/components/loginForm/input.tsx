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
        <div className="flex flex-col ">
          <label htmlFor="">نام کاربری</label>
          <Input
            type="text"
            error={errors.username?.message}
            validation={{ ...register("username") }}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">رمز عبور</label>

          <Input
            type="password"
            error={errors.password?.message}
            validation={{ ...register("password") }}
          />
        </div>
        <Button title="ورود" type="submit" />
        <p className="text-sm">فراموشی رمز عبور</p>
      </form>
    </>
  );
}
export default LoginForm;
