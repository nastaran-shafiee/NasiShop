import { childrenInterface } from "../../types/interface";

function Td({ children }: childrenInterface) {
  return (
    <td className="p-2 whitespace-nowrap">
      <div className=" text-right text-[10px] md:text-[18px]">{children}</div>
    </td>
  );
}
export default Td;
