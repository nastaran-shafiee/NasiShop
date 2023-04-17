import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
function FailPayment() {
  return (
    <div className="w-full min-h-screen">
      <p className="text-3xl text-purple mt-10 mr-4">نتیجه ی پرداخت</p>
      <div className="flex justify-center gap-7 items-center mt-10">
        <Icon
          icon="carbon:close-filled"
          width="200"
          height="200"
          className="text-red-500"
        />
        <p className="w-72 text-sm md:text-lg">
          پرداخت موفقیت آمیز نبود.سفارش شما در انتظار پرداخت است
        </p>
      </div>
    </div>
  );
}
export default FailPayment;
