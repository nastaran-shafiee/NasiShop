import Button from "../button";
import Input from "../input";

function LoginForm() {
  return (
    <>
      <div className="w-80 h-96 bg-White flex flex-col items-center gap-4 p-4 text-gray">
        <h1 className="text-2xl">ورود به پنل ادمین</h1>
        <div className="flex flex-col ">
          <label htmlFor="">نام کاربری</label>
          <Input type="text" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">رمز عبور</label>

          <Input type="password" />
        </div>
        <Button title="ورود" />
        <p className="text-sm">فراموشی رمز عبور</p>
      </div>
    </>
  );
}
export default LoginForm;
