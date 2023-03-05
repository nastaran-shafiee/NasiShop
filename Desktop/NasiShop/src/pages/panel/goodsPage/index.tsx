import { useEffect } from "react";
import Button from "../../../components/button";
import GoodsTable from "../../../components/goodsTable";

function GoodsPage() {
  return (
    <>
      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">مدیریت کالا ها</h1>
        <Button title="افزودن کالا" />
      </div>
      <GoodsTable />
    </>
  );
}
export default GoodsPage;
