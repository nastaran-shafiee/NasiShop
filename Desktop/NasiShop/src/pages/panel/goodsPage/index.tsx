import { useEffect } from "react";
import Button from "../../../components/button";
import GoodsTable from "../../../components/goodsTable";
import AddModal from "../../../Layout/addModal";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "../../../types/interface";
import { changeAddMod } from "../../../redux/fetchSlice";
import SelectBox from "../../../components/selectBox";
import { ChangeEvent } from "react";

function GoodsPage() {
  const addModal = useSelector(
    (state: FetchSliceData) => state.fetchSlice.addModal
  );

  // add modal open function--------------------------------------------

  // filter page---------------------------------------------------------

  // return function------------------------------------------------------
  return (
    <>
      {addModal ? <AddModal /> : " "}

      <GoodsTable />
    </>
  );
}
export default GoodsPage;
