import { useEffect } from "react";
import Button from "../../../components/button";
import GoodsTable from "../../../Layout/goodsTable";
import AddModal from "../../../Layout/addModal";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "../../../types/interface";
import { changeAddMod } from "../../../redux/fetchSlice";
import SelectBox from "../../../components/selectBox";
import { ChangeEvent } from "react";
import DeleteMoadal from "../../../Layout/deleteModal";

function GoodsPage() {
  const addModal = useSelector(
    (state: FetchSliceData) => state.fetchSlice.addModal
  );
  const deleteModal = useSelector(
    (state: FetchSliceData) => state.fetchSlice.deleteModal
  );

  // add modal open function--------------------------------------------

  // filter page---------------------------------------------------------

  // return function------------------------------------------------------
  return (
    <>
      {addModal ? <AddModal /> : " "}
      {deleteModal ? <DeleteMoadal /> : " "}

      <GoodsTable />
    </>
  );
}
export default GoodsPage;
