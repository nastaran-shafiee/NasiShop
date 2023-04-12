import Table from "../../components/table";
import THead from "../../components/thead";
import Tr from "../../components/tr";
import Th from "../../components/th";
import Td from "../../components/td";
import { fetchData } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchSliceData, orderInterface } from "../../types/interface";
import { usePagination } from "../../hooks/pagination";
import { ORDER_URL } from "../../api/endpoint";
import { createBrowserHistory } from "@remix-run/router";
import { orderModeFunction } from "../../redux/fetchSlice";

// order table function--------------------------------------------------------
function OrderTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  let mode3 = useSelector((state: FetchSliceData) => state.fetchSlice.mode2);
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 5);
  const [deliver, setDeliver] = useState<boolean | undefined>(undefined);
  const [design, setDesign] = useState<boolean>(false);
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const history = createBrowserHistory();

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
  }, [dispatch, currentPage, rowsPerPage, deliver, mode3]);

  // function deliverd------------------------------------------------
  function deliverdFunction() {
    setDeliver(true);
    setDesign(false);
    setAll(false);
    setSelected("deliver");
  }
  //umdeliverd function-------------------------------------------------------
  function undeliverdFunction() {
    setDeliver(false);
    setDesign(false);
    setAll(false);
    setSelected("undeliverd");
  }
  // all function----------------------------------------------------------------
  function allFunction() {
    setDeliver(undefined);
    setDesign(false);
    setAll(true);
    setSelected("all");
  }
  // order modal function-----------------------------------------------------
  function orderModal(id1: number) {
    dispatch(orderModeFunction({ mode: true, id: id1 }));
  }

  // return function---------------------------------------------------------------
  return (
    <>
      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">مدیریت سفارشات</h1>
        <div className={`flex gap-6 text-gray cursor-pointer`}>
          <p
            onClick={deliverdFunction}
            className={selected === "deliver" ? "text-purple" : " "}
          >
            تحویل شده
          </p>
          <p
            onClick={undeliverdFunction}
            className={selected === "undeliverd" ? "text-purple" : ""}
          >
            در انتظارارسال
          </p>
          <p
            onClick={allFunction}
            className={selected === "all" ? "text-purple" : ""}
          >
            همه
          </p>
        </div>
      </div>
      <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 h-[16rem]">
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
                    <Td>
                      <>{item.username}</>
                    </Td>
                    <Td>
                      <>{item.prices}</>
                    </Td>
                    <Td>
                      <>
                        {" "}
                        {new Date(item.createdAt).toLocaleDateString("fa-IR", {
                          hour: undefined,
                          minute: undefined,
                          second: undefined,
                        })}
                      </>
                    </Td>

                    <Td>
                      <div
                        onClick={() => {
                          orderModal(item.id);
                        }}
                        className="text-sm cursor-pointer"
                      >
                        بررسی سفارش
                      </div>
                    </Td>
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
