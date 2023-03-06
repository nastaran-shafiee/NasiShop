import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";
import { fetchData } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchSliceData, orderInterface } from "../../types/interface";
import { usePagination } from "../../hooks/pagination";
import { ORDER_URL } from "../../api/endpoint";
// order table function--------------------------------------------------------
function OrderTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 5);

  useEffect(() => {
    dispatch(
      fetchData({
        page: currentPage,
        limit: rowsPerPage,
        setTotalPages: setTotalPages,
        url: ORDER_URL,
      })
    );
  }, [dispatch, currentPage, rowsPerPage]);

  return (
    <>
      <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 h-[18rem]">
        <Table>
          <THead>
            <Tr>
              <Th text="نام کاربر" />
              <Th text="مجموع مبالغ" />
              <Th text="تاریخ ثبت سفارش" />
              <Th />
            </Tr>
          </THead>
          <tbody className="text-sm ">
            {data &&
              data.map((item: orderInterface) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.username}</Td>
                    <Td>{item.prices}</Td>
                    <Td>{item.createdAt}</Td>
                    <Td>وصعیت سفارش</Td>
                  </Tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <div className="flex justify-center mt-5">
        {renderPaginationButtons()}
      </div>
    </>
  );
}
export default OrderTable;
