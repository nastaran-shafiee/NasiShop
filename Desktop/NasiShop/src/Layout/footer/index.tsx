import logo from "../../../public/img/2.png";
import { Icon } from "@iconify/react";
// function footer-------------------------------------------
function Footer() {
  return (
    <div className="w-full h-36 bg-header flex justify-between p-4 box-border items-center">
      <div className="w-[25%] text-White text-sm">
        <h1 className="text-lg">تماس با ما</h1>
        <div className="flex gap-2">
          <Icon icon="openmoji:location-indicator-red" width="20" height="20" />
          <p>ایران-تهران</p>
        </div>
        <div className="flex gap-2">
          <Icon icon="noto:mobile-phone" width="20" height="20" />
          <p>09375749393</p>
        </div>
        <div className="gap-2 hidden md:flex">
          <Icon icon="ic:twotone-email" width="20" height="20" />
          <p>nastaran.sh33@gmail.com</p>
        </div>
      </div>

      <img src={logo} alt="" className="w-20 h-20 md:w-32 md:h-32" />

      <div className="flex flex-wrap gap-4 h-4  w-[25%] ">
        <Icon icon="logos:facebook" width="20" height="20" />
        <Icon icon="logos:whatsapp-icon" width="20" height="20" />
        <Icon icon="logos:telegram" width="20" height="20" />
        <Icon icon="icon-park:twitter" width="20" height="20" />
        <Icon icon="skill-icons:instagram" width="20" height="20" />
        <Icon icon="logos:youtube-icon" width="20" height="20" />
      </div>
    </div>
  );
}
export default Footer;
