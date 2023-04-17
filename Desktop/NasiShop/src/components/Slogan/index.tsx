import { useState } from "react";
function Slogan({ header }: any) {
  const [expanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded(!expanded);
  }
  const paragraphStyle = `self-center ${
    expanded ? "" : "truncate"
  } max-w-full overflow-hidden transition-all duration-300 ease-in-out`;

  return (
    <>
      <div className="w-[95%] flex justify-center m-4">
        <div className="flex w-[50%] flex-col items-center justify-center">
          <h1 className="text-purple text-2xl">{header}</h1>
          <p className={paragraphStyle} onClick={handleExpand}>
            <span className="text-purple">نسی شاپ </span>
            برای هر روز و هر شب شما است. مهم نیست که چه کسی هستید، اهل کجا هستید
            و چه کاری انجام می دهید، برند جهانی ما اینجا برای شماست، طراحی های
            منحصر به فرد، آخرین روندها، و در همه محدوده های مناسب مارا کشف کنید{" "}
            <span className="text-purple">ایجاد توسط ما طراحی توسط شما</span>
            <span className="cursor-pointer text-purple">
              {expanded ? " کمتر" : " ...بیشتر"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Slogan;
