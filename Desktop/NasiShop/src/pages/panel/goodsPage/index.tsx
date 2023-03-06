import { useEffect } from "react";
import Button from "../../../components/button";
import GoodsTable from "../../../components/goodsTable";
import AddModal from "../../../Layout/addModal";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "../../../types/interface";
import { changeAddMod } from "../../../redux/fetchSlice";
function GoodsPage() {
  const addModal = useSelector(
    (state: FetchSliceData) => state.fetchSlice.addModal
  );
  const dispatch = useDispatch();
  // add modal open function--------------------------------------------
  function openAddModal() {
    const add = true;
    dispatch(changeAddMod(add));
  }
  return (
    <>
      {addModal ? <AddModal /> : " "}

      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">مدیریت کالا ها</h1>
        <Button title="افزودن کالا" onClick={openAddModal} />
      </div>
      <GoodsTable />
    </>
  );
}
export default GoodsPage;
