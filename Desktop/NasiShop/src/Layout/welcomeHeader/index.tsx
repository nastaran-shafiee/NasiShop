import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
// welcome page--------------------------------------
function WelcomeHeader() {
  // return function
  return (
    <>
      <div className="w-full h-10 bg-black flex justify-between text-White items-center px-4">
        <div className="w-20 border flex justify-center">
          <Link to="/women">زنانه</Link>
        </div>
        <div className="text-2xl fontFamily">Nasi Shop</div>
        <div className="w-20 border flex justify-center">
          <Link to="/men">مردانه</Link>
        </div>
      </div>
    </>
  );
}
export default WelcomeHeader;
