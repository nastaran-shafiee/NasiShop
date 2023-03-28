import img from "../../../public/img/shoe1.png";
import { Icon } from "@iconify/react";
import Table from "../../components/table";
import THead from "../../components/thead";
import Tr from "../../components/tr";
import Th from "../../components/th";
import Td from "../../components/td";
import { deleteData, fetchData, fetchData2 } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  categoryInterface,
  FetchSliceData,
  ProductInterface,
} from "../../types/interface";
import { usePagination } from "../../hooks/pagination";
import { PRODUCT_URL } from "../../api/endpoint";

import SelectBox from "../../components/selectBox";
import Button from "../../components/button";
import {
  changeAddMod,
  editMode,
  getId,
  openDeleteModal,
} from "../../redux/fetchSlice";
import { createBrowserHistory } from "@remix-run/router";

// goodtable ------------------------------------------------------------------------
function GoodsTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const addModal = useSelector(
    (state: FetchSliceData) => state.fetchSlice.addModal
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const history = createBrowserHistory();
  function openAddModal() {
    const add = true;
    dispatch(changeAddMod(add));
    dispatch(editMode({ mode: false }));
  }
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 4);
  // function filter page--------------------------------------------------
  function filterByCategory(category: string) {
    setSelectedCategory(category);
  }

  // use effect---------------------------------------------------------------------------------
  useEffect(() => {
    dispatch(
      fetchData({
        page: currentPage,
        limit: rowsPerPage,
        setTotalPages: setTotalPages,
        url: PRODUCT_URL,
        category: selectedCategory,
      })
    );
    history.push(`?page=${currentPage}`);
  }, [dispatch, currentPage, rowsPerPage, selectedCategory, data]);
  // function delete product----------------------------------------------------------------------------
  function deleteProduct(id: number) {
    dispatch(getId(id));
    dispatch(openDeleteModal(true));
  }
  //function edit mode-------------------------------------------------------------------------------
  function editProduct(item: any) {
    dispatch(editMode({ mode: true, item: item }));
    dispatch(changeAddMod(true));
  }
  // return function------------------------------------------------------------------------------------
  return (
    <>
      <div className="flex w-[95%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-3xl">مدیریت کالا ها</h1>
        <SelectBox
          className="bg-gray text-white border-none"
          onChange={(e) => filterByCategory(e.target.value)}
        />
        <Button title="افزودن کالا" onClick={openAddModal} />
      </div>

      <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 h-[16.5rem]">
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
                        src={`http://localhost:3002${item.image}`}
                        width="40"
                        height="40"
                        alt="Philip Harbach"
                        crossOrigin="anonymous"
                      />
                    </Td>
                    <Td>{item.name}</Td>
                    <Td>{item.category}</Td>
                    <Td>
                      <div className=" text-right flex gap-8">
                        <Icon
                          icon="material-symbols:delete-outline"
                          width="20"
                          height="20"
                          className="text-[red]"
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                        />
                        <Icon
                          icon="material-symbols:edit"
                          width="20"
                          height="20"
                          className="text-green-700"
                          onClick={() => {
                            editProduct(item);
                          }}
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
