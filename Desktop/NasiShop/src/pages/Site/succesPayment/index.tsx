import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
//function succes payment------------------------------------
function SuccesPaymen() {
  const [param, setParam] = useState(0);
  // useefect-----------------------------------------------------
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const consignment = Number(searchParams.get("consignment"));
    setParam(consignment);
  }, [location.search]);
  // return function-------------------------------------------------
  return (
    <div className="w-full min-h-screen">
      <p className="text-3xl text-purple mt-10 mr-4">نتیجه ی پرداخت</p>
      <div className="flex justify-center gap-7 items-center mt-10">
        <Icon
          icon="ooui:success"
          width="200"
          height="200"
          className="text-green-500"
        />
        <p className="w-72 text-sm md:text-lg">
          با تشکر از پرداخت شما ,سفارش شما با شماره محصول{" "}
          <span className="text-2xl text-purple">{param}</span> ثبت شد و جهت
          هماهنگی ارسال با شما تماس گرفته خواهد شد با تشکر از خرید شما از
          فروشگاه <span className="text-2xl text-purple">نسی شاپ</span>
        </p>
      </div>
    </div>
  );
}
export default SuccesPaymen;
