import { UliInterface } from "../../types/interface";

function Ul({ children, justify, padding, className }: UliInterface) {
  return (
    <ul
      className={`flex justify-between items-center box-border gap-4 ${justify} ${padding} ${className}`}
    >
      {children}
    </ul>
  );
}

export default Ul;
