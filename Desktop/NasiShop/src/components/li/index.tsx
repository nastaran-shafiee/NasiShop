import { liInterface } from "../../types/interface";

function Li({ children, width, height, border, padding }: liInterface) {
  return (
    <li
      className={`flex items-center justify-center text-lg${width}${height}${border}${padding}`}
    >
      {children}
    </li>
  );
}
export default Li;
