import { NextComponentType } from "next";
import NavList from "./NavList";
import { NavListProps } from "./type";

const Navbar: NextComponentType<{ list: NavListProps }> = (list) => {
  return (
    <div>
      <NavList />
    </div>
  );
};
export default Navbar;
