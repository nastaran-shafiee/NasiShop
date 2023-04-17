import LoginForm from "../../../components/loginForm/input";
import { ToastContainer } from "react-toastify";

function Login() {
  return (
    <>
      <ToastContainer />

      <div className="w-full h-screen flex justify-center items-center flex-col bg-header gap-4">
        <LoginForm />
      </div>
    </>
  );
}
export default Login;
