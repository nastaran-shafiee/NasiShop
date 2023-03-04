import img from "../../../public/img/shoe1.png";
import { Icon } from "@iconify/react";
import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";

function InvestoryTable() {
  return (
    <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 ">
      <Table>
        <THead>
          <Tr>
            <Th text="نام کالا" />
            <Th text="قیمت" />
            <Th text="موجودی" />
          </Tr>
        </THead>
        <tbody className="text-sm ">
          <Tr>
            <Td>نام کالا</Td>
            <Td>1000000تومان</Td>
            <Td>5تا</Td>
          </Tr>
          <Tr>
            <Td>نام کالا</Td>
            <Td>1000000تومان</Td>
            <Td>5تا</Td>
          </Tr>
        </tbody>
      </Table>
    </div>
  );
}
export default InvestoryTable;
