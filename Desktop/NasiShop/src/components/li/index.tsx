import { liInterface } from "../../types/interface";

function Li({ children, width, height, border, padding }: liInterface) {
  return (
    <li
      className={`flex items-center justify-center text-sm md:text-lg lg:text-3xl${width}${height}${border}${padding}`}
    >
      {children}
    </li>
  );
}
export default Li;
