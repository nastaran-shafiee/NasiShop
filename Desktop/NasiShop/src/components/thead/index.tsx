import { childrenInterface } from "../../types/interface";

function THead({ children }: childrenInterface) {
  return (
    <thead className="text-xs font-semibold uppercase text-gray-400 bg-purple h-12">
      {children}
    </thead>
  );
}
export default THead;
