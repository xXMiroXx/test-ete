import { NextComponentType } from "next";
import NavList from "./NavList";
import { NavListProps } from "../type";
import Styles from "./Navbar.module.scss";
const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={`${Styles.nav} ${className || ""}`}>
      <NavList />
    </nav>
  );
};
export default Navbar;
