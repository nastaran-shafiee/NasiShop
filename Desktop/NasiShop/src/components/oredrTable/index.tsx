import img from "../../../public/img/shoe1.png";
import { Icon } from "@iconify/react";
import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";

function OrderTable() {
  return (
    <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5">
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
          <Tr>
            <Td>نسترن شفیعی</Td>
            <Td>1000000تومان</Td>
            <Td>5/2/1400</Td>
            <Td>بررسی سفارش</Td>
          </Tr>
          <Tr>
            <Td>نسترن شفیعی</Td>
            <Td>1000000تومان</Td>
            <Td>5/2/1400</Td>
            <Td>بررسی سفارش</Td>
          </Tr>
        </tbody>
      </Table>
    </div>
  );
}
export default OrderTable;
