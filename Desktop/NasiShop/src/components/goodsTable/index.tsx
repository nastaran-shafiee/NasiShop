import img from "../../../public/img/shoe1.png";
import { Icon } from "@iconify/react";
import Table from "../table";
import THead from "../thead";
import Tr from "../tr";
import Th from "../th";
import Td from "../td";

function GoodsTable() {
  return (
    <div className="w-full max-w-[95%] mx-auto bg-white shadow-lg rounded-sm mt-5 ">
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
          <Tr>
            <Td>
              <img
                className="rounded-full w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"
                src={img}
                width="40"
                height="40"
                alt="Philip Harbach"
              />
            </Td>
            <Td>نام کالا</Td>
            <Td>دسته بندی</Td>
            <Td>
              <div className=" text-right flex gap-3">
                <Icon
                  icon="material-symbols:delete-outline"
                  width="20"
                  height="20"
                />
                <Icon icon="material-symbols:edit" width="20" height="20" />
              </div>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <img
                className="rounded-full w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"
                src={img}
                width="40"
                height="40"
                alt="Philip Harbach"
              />
            </Td>
            <Td>نام کالا</Td>
            <Td>دسته بندی</Td>
            <Td>
              <div className=" text-right flex gap-3">
                <Icon
                  icon="material-symbols:delete-outline"
                  width="20"
                  height="20"
                />
                <Icon icon="material-symbols:edit" width="20" height="20" />
              </div>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </div>
  );
}
export default GoodsTable;
