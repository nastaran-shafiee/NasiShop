import { childrennterface } from "../../types/interface";

function Nav({ children }: childrennterface) {
  return (
    <nav className="w-full bg-header h-14 text-White pt-2 md:pt-0 ">
      {children}
    </nav>
  );
}
export default Nav;
