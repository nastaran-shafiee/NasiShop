import { thInterface } from "../../types/interface";

function Th({ text }: thInterface): JSX.Element {
  return (
    <th>
      {" "}
      <div className="font-semibold text-right text-sm md:text-xl p-2 ">
        {text}
      </div>
    </th>
  );
}
export default Th;
