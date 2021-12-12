import { NextComponentType } from "next";
import NavList from "./NavList";
import { NavListProps } from "../type";

const Navbar: React.FC<{ list: NavListProps }> = (props) => {
  return (
    <div>
      <NavList navList={props.list} />
    </div>
  );
};
export default Navbar;
