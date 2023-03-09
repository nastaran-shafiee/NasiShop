import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";
import { fetchData } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchSliceData, orderInterface } from "../../types/interface";
import { usePagination } from "../../hooks/pagination";
import { ORDER_URL } from "../../api/endpoint";
// order table function--------------------------------------------------------
function OrderTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 5);
  const [deliver, setDeliver] = useState<boolean | undefined>(true);
  const [design, setDesign] = useState<boolean>(false);
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  // useeffect-------------------------------------------------------------
  useEffect(() => {
    dispatch(
      fetchData({
        page: currentPage,
        limit: rowsPerPage,
        setTotalPages: setTotalPages,
        url: ORDER_URL,
        delivered: deliver,
      })
    );
  }, [dispatch, currentPage, rowsPerPage, deliver]);
  // function deliverd------------------------------------------------
  function deliverdFunction() {
    setDeliver(true);
    setDesign(false);
    setAll(false);
    setSelected("deliver");
  }
  function undeliverdFunction() {
    setDeliver(false);
    setDesign(false);
    setAll(false);
    setSelected("undeliverd");
  }
  function allFunction() {
    setDeliver(undefined);
    setDesign(false);
    setAll(true);
    setSelected("all");
  }

  return (
    <>
      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">مدیریت سفارشات</h1>
        <div className={`flex gap-6 text-gray text-[10px] cursor-pointer`}>
          <p
            onClick={deliverdFunction}
            className={selected === "deliver" ? "text-purple" : ""}
          >
            سفارش های تحویل شده
          </p>
          <p
            onClick={undeliverdFunction}
            className={selected === "undeliverd" ? "text-purple" : ""}
          >
            سفارش های در انتظارارسال
          </p>
          <p
            onClick={allFunction}
            className={selected === "all" ? "text-purple" : ""}
          >
            تمامی سفارش ها
          </p>
        </div>
      </div>
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
