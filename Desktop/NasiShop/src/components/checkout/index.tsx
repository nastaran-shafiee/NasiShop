import Button from "../button";

function Checkout({ totalprice }: any) {
  return (
    <div className="flex flex-col bg-white p-4 gap-4">
      <p>جمع کل </p>
      <hr />
      <div className="flex gap-1 text-[1rem]">
        <p className="text-[1rem]">قیمت کل:</p>
        <p className="text-[1rem]">{totalprice} </p>
      </div>
      <p>تخفیفات</p>
      <Button title="نهایی کردن سبد خرید" className="bg-green-500" />
    </div>
  );
}
export default Checkout;
