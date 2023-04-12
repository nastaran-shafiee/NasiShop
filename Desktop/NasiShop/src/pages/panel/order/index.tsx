import OrderTable from "../../../Layout/oredrTable";
import { useDispatch, useSelector } from "react-redux";
import OrderModal from "../../../Layout/orderModal";
import { FetchSliceData } from "../../../types/interface";
import { useState } from "react";
function Orders() {
  const addModal = useSelector(
    (state: FetchSliceData) => state.fetchSlice.orderMode
  );

  return (
    <>
      {addModal ? <OrderModal /> : " "}
      <OrderTable />
    </>
  );
}
export default Orders;
