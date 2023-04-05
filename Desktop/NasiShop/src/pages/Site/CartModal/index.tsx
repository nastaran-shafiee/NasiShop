import Button from "../../../components/button";
import Input from "../../../components/input";
import SelectBox from "../../../components/selectBox";

function ModalCart() {
  return (
    <div className="w-full h-full bg-sort   flex justify-center rounded-md mt-0 pt-8">
      <form
        action=""
        className="w-[90%]   flex flex-col md:w-[80%] items-center gap-4"
      >
        <div className="flex w-[100%] justify-start mb-10">
          <p className="text-2xl text-purple">نهایی کردن خرید</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
          <Input type="text" label="نام" className="border-none w-72" />
          <Input
            type="text"
            label="نام خانوادگی"
            className="border-none w-72"
          />
          <Input type="text" label="آدرس" className="border-none w-72" />
          <Input type="text" label="تلفن همراه" className="border-none w-72" />
          <Input
            type="text"
            label="تاریخ تحویل سفارش"
            className="border-none w-72"
          />
        </div>
        <Button type="submit" className="bg-purple mt-8 mb-8" title="پرداخت" />
      </form>
    </div>
  );
}
export default ModalCart;
