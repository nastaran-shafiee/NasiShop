import { childrenInterface } from "../../types/interface";

function Tr({ children }: childrenInterface) {
  return <tr className="p-4 whitespace-nowrap">{children}</tr>;
}
export default Tr;
