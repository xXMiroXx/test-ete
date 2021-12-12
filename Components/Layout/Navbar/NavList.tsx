import { NextComponentType } from "next";
import { NavListProps } from "../type";
import NavItem from "./NavItem";

const NavList: React.FC<{ navList: NavListProps }> = (props) => {
  return (
    <nav>
      <ul>
        <NavItem item={props.navList[0]} />
        <NavItem item={props.navList[1]} />
        <NavItem item={props.navList[2]} />
      </ul>
    </nav>
  );
};
export default NavList;
