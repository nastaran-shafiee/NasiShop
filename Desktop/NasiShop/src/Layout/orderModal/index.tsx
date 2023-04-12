import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "../../types/interface";
import { Icon } from "@iconify/react";
import { ChangeMode2, orderModeFunction } from "../../redux/fetchSlice";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../../redux/fetchAction";
import { ORDER_URL } from "../../api/endpoint";
import Table from "../../components/table";
import THead from "../../components/thead";
import Tr from "../../components/tr";
import Th from "../../components/th";
import Td from "../../components/td";
import { instance } from "../../api/contants";

function OrderModal() {
  const dispatch = useDispatch();
  const orderMode = useSelector(
    (state: FetchSliceData) => state.fetchSlice.mode2
  );
  const product = useSelector(
    (state: FetchSliceData) => state.fetchSlice.singleProduct
  );
  const id1 = useSelector((state: FetchSliceData) => state.fetchSlice.orderID);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // get value from input---------------------------------------------------=

  // mpdal root------------------------------------------------------------------
  const modalRoot = document.getElementById("modal") as HTMLElement;
  // close modal---------------------------------------------------------------

  function closeModal() {
    let count = 0;
    dispatch(ChangeMode2(count++));

    setIsModalOpen(false);
    dispatch(orderModeFunction({ mode: false }));
  }
  // function handel-------------------------------------------------------------
  function handleOrderConfirmation() {
    const updatedProduct = { ...product, delivered: true };
    instance
      .patch(`${ORDER_URL}/${id1}`, updatedProduct)
      .then((response) => {})
      .catch((error) => {
        console.error("Error confirming order", error);
      });

    closeModal();
  }
  function handleOrderConfirmation2() {
    const updatedProduct = { ...product, delivered: false };
    instance
      .patch(`${ORDER_URL}/${id1}`, updatedProduct)
      .then((response) => {})
      .catch((error) => {
        console.error("Error confirming order", error);
      });

    closeModal();
  }
  // use effect----------------------------------------------------------------
  useEffect(() => {
    dispatch(fetchSingleProduct(id1, ORDER_URL));
  }, [dispatch, product, id1, product.delivered, orderMode]);

  function orderSetting() {
    if (product.delivered === false) {
      return <p>ارسال نشده</p>;
    } else {
      return <p>ارسال شده</p>;
    }
  }

  // return----------------------------------------------------------------------
  return createPortal(
    <>
      <div className="w-full h-full bg-back absolute t-0 z-50 flex justify-center rounded-md mt-0 pt-8">
        <div className="w-[70%] h-[98%] bg-table flex flex-col md:w-[70%] items-center gap-4">
          <div className="flex justify-between w-[90%] pt-4">
            <p className="text-purple text-2xl font-bold mb-4">بررسی سفارش</p>
            <Icon
              icon="mdi:close-circle"
              width="25"
              height="25"
              className="text-purple"
              onClick={closeModal}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-[80%]">
            <div className="flex flex-col gap-4 md:col-span-2">
              <p>
                <span className="text-blue-800">نام: </span> {product.username}
              </p>
              <p>
                {" "}
                <span className="text-blue-800">نام خانوادگی: </span>{" "}
                {product.lastname}
              </p>
              <p>
                <span className="text-blue-800">آدرس</span> {product.address}
              </p>
              <p>
                <span className="text-blue-800">شماره ی تماس: </span>{" "}
                {product.phone}
              </p>
              <p>
                <span className="text-blue-800">زمان سفارش: </span>{" "}
                {new Date(product.createdAt).toLocaleString("fa-IR")}
              </p>
              <p>
                <span className="text-blue-800">زمان تحویل: </span>{" "}
                {new Date(product.expectAt).toLocaleString("fa-IR")}
              </p>
              <div className="flex gap-2">
                <p className="text-blue-800">وضعیت سفارش</p>:
                <p>{orderSetting()}</p>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-4 items-center">
              <table className="w-full bg-gray2 text-white p-4">
                <THead>
                  <Tr>
                    <Th text="نام محصول" />
                    <Th text="قیمت" />
                    <Th text="تعداد" />
                  </Tr>
                </THead>
                <tbody>
                  {product.Products &&
                    product.Products.map((item: any, index: number) => (
                      <Tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>{item.price}</Td>
                        <Td>{item.quantity}</Td>
                        <td></td>
                      </Tr>
                    ))}
                </tbody>
              </table>
              <div />
              <div className="flex gap-4">
                <p>تایید سفارش : </p>
                <button
                  className="w-12 h-8 bg-green-600 rounded-md"
                  onClick={handleOrderConfirmation}
                >
                  ارسال
                </button>
                <button
                  className="w-12 h-8 bg-red-600 rounded-md"
                  onClick={handleOrderConfirmation2}
                >
                  کنسل
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}
export default OrderModal;
