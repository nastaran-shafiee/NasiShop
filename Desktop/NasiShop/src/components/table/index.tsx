import { childrenInterface } from "../../types/interface";

function Table({ children }: childrenInterface) {
  return <table className="w-full table-fixed bg-table pr-2">{children}</table>;
}
export default Table;
