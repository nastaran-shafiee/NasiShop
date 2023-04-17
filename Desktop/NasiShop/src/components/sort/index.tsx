import { Children } from "react";
import { Sortinterface } from "../../types/interface";

function Sort({ name, className, children }: Sortinterface): JSX.Element {
  return (
    <>
      <div className="flex flex-col">
        <hr className="sorting" />
        <select
          name={name}
          className={`${className}text-gray  bg-sort outline-none p-2`}
        >
          {children}
        </select>
        <hr className="sorting" />
      </div>
    </>
  );
}
export default Sort;
