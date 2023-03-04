import InvestoryTable from "../../../components/investory";
import Button from "../../../components/button";
function InventoryPage() {
  return (
    <>
      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">
          مدیریت موجودی و قیمت
        </h1>
        <Button title="ذخیره" />
      </div>
      <InvestoryTable />
    </>
  );
}
export default InventoryPage;
