import img from "../../../public/img/shoe1.png";
import { Icon } from "@iconify/react";
import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";
import { fetchData } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { FetchSliceData, ProductInterface } from "../../types/interface";
import { usePagination } from "../../hooks/pagination";
import { PRODUCT_URL } from "../../api/endpoint";
// goodtable ------------------------------------------------------------------------
function GoodsTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 4);

  useEffect(() => {
    dispatch(
      fetchData({
        page: currentPage,
        limit: rowsPerPage,
        setTotalPages: setTotalPages,
        url: PRODUCT_URL,
      })
    );
  }, [dispatch, currentPage, rowsPerPage]);

  return (
    <>
      {" "}
      <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 h-[17rem]">
        <Table>
          <THead>
            <Tr>
              <Th text="عکس" />
              <Th text="نام کالا" />
              <Th text="دسته بندی" />
              <Th />
            </Tr>
          </THead>
          <tbody className="text-sm ">
            {data &&
              data.map((item: ProductInterface) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <img
                        className="rounded-full w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"
                        src={img}
                        width="40"
                        height="40"
                        alt="Philip Harbach"
                      />
                    </Td>
                    <Td>{item.name}</Td>
                    <Td>{item.category}</Td>
                    <Td>
                      <div className=" text-right flex gap-3">
                        <Icon
                          icon="material-symbols:delete-outline"
                          width="20"
                          height="20"
                        />
                        <Icon
                          icon="material-symbols:edit"
                          width="20"
                          height="20"
                        />
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
export default GoodsTable;
