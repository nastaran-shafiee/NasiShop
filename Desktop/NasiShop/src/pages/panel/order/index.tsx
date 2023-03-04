import OrderTable from "../../../components/oredrTable";

function Orders() {
  return (
    <>
      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">مدیریت سفارشات</h1>
      </div>
      <OrderTable />
    </>
  );
}
export default Orders;
