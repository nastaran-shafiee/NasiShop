import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";
import { fetchData } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchSliceData, ProductInterface } from "../../types/interface";
import { PRODUCT_URL } from "../../api/endpoint";
import { usePagination } from "../../hooks/pagination";

// function investory----------------------------------------------------
function InvestoryTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  // use hook pagination-----------------------------------------------------
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 5);
  // useeffect----------------------------------------------------------------
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
  // return function--------------------------------------------------------------
  return (
    <>
      <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 h-[18rem] ">
        <Table>
          <THead>
            <Tr>
              <Th text="نام کالا" />
              <Th text="قیمت" />
              <Th text="موجودی" />
            </Tr>
          </THead>
          <tbody className="text-sm ">
            {data &&
              data.map((item: ProductInterface) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>{item.quantity}</Td>
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
export default InvestoryTable;
