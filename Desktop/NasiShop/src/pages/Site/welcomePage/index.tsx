import WelcomeHeader from "../../../Layout/welcomeHeader";
import image1 from "../../../../public/img/imageWelcom1.avif";
import image2 from "../../../../public/img/imageWelcome2.avif";
import ButtonCart from "../../../components/buttonCart/input";
import { NavLink } from "react-router-dom";
// welcome page-----------------------------------------------------
function WelcomePage() {
  return (
    <>
      <WelcomeHeader />
      <div className="relative">
        <ButtonCart position="top-[30%] left-[20%] md:left-[40%] w-60 h-16 ">
          <h1 className="text-3xl md:text-5xl">Nasi shop</h1>
        </ButtonCart>
        <ButtonCart position="top-[45%] left-[32%] md:left-[52%]">
          <NavLink className="black text-3xl md:text-4xl" to="/men">
            مردانه
          </NavLink>
        </ButtonCart>
        <ButtonCart position="top-[58%] left-[32%] md:top-[45%] left-[35.5%]">
          <NavLink className="black text-3xl md:text-4xl" to="/women">
            زنانه
          </NavLink>
        </ButtonCart>
        <picture>
          <source media="(max-width:768px)" srcSet={image2} />
          <img src={image1} alt="" className="w-full h-18" />
        </picture>
      </div>
    </>
  );
}
export default WelcomePage;
