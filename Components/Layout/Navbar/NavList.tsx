import { NextComponentType } from "next";
import NavItem from "./NavItem";

const NavList: NextComponentType = () => {
  return (
    <nav>
      <ul>
        <NavItem />
        <NavItem />
        <NavItem />
      </ul>
    </nav>
  );
};
export default NavList;
