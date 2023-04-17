import Table from "../../components/table";
import THead from "../../components/thead";
import Tr from "../../components/tr";
import Th from "../../components/th";
import Td from "../../components/td";
import { fetchData } from "../../redux/fetchAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchSliceData, ProductInterface } from "../../types/interface";
import { PRODUCT_URL } from "../../api/endpoint";
import { usePagination } from "../../hooks/pagination";
import { useState } from "react";
import Button from "../../components/button";
import { setFetchData } from "../../redux/fetchSlice";
import { instance } from "../../api/contants";
import Input from "../../components/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserHistory } from "@remix-run/router";
// function investory----------------------------------------------------

function InvestoryTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const newData1 = JSON.parse(JSON.stringify(data));
  const [color, setColor] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const isButtonDisabled = !isDirty;
  const history = createBrowserHistory();
  // use hook pagination-----------------------------------------------------
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 4);
  const [editedData, setEditedData] = useState<ProductInterface[]>([]);
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
    history.push(`?page=${currentPage}`);
  }, [dispatch, currentPage, rowsPerPage]);
  // handelquntitychange function--------------------------------------------------------
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    property: string
  ) => {
    setColor(true);
    setIsDirty(true);
    const newData = [...data];
    const updatedItem = {
      ...newData[index],
      [property]: Number(e.target.value),
    };
    newData[index] = updatedItem;
    setEditedData((prevData) => [...prevData, updatedItem]);
    dispatch(setFetchData(newData));
  };

  // return function--------------------------------------------------------------
  return (
    <>
      <div className="flex w-[90%] justify-between pr-6 mt-8">
        <h1 className="text-purple text-sm md:text-2xl">
          مدیریت موجودی و قیمت
        </h1>
        <Button
          disabled={isButtonDisabled}
          title="ذخیره"
          onClick={() => {
            Promise.all(
              editedData.map((item) => {
                return instance.patch(`${PRODUCT_URL}/${item.id}`, item);
              })
            )
              .then(() => {
                toast.success("تغییرات شما با موفقیت ذخیره شد");
                setEditedData([]);
                setIsDirty(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          className={!isDirty ? "bg-slate-200" : " "}
        />
      </div>

      <div className="w-full max-w-[90%] mx-auto bg-white shadow-lg rounded-sm mt-5 h-[18rem] ">
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
              data.map((item: ProductInterface, index: number) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <>{item.name}</>
                    </Td>
                    <Td>
                      <input
                        type="text"
                        value={item.price}
                        onChange={(e) => {
                          handleInputChange(e, index, "price");
                          setColor(true);
                        }}
                        className="bg-transparent border-none h-[1rem] outline-none"
                        style={{
                          color:
                            color &&
                            editedData.findIndex(
                              (d) => d.id === item.id && d.price !== item.price
                            ) !== -1
                              ? "purple"
                              : "black",
                        }}
                      />
                    </Td>
                    <Td>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) =>
                          handleInputChange(e, index, "quantity")
                        }
                        className="bg-transparent border-none h-[1rem] outline-none"
                        style={{
                          color:
                            color &&
                            editedData.findIndex(
                              (d) =>
                                d.id === item.id && d.quantity !== item.quantity
                            ) !== -1
                              ? "purple"
                              : "black",
                        }}
                      />
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
export default InvestoryTable;
