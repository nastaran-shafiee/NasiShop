import LoginForm from "../../../components/loginForm/input";
import logo from "../../../../public/img/2.png";

function Login() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col bg-header gap-4">
        <img src={logo} alt="" className="w-12 h-12" />
        <LoginForm />
      </div>
    </>
  );
}
export default Login;
