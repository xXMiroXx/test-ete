import { NextComponentType } from "next";
import NavList from "./NavList";
import { NavListProps } from "../type";
import Styles from "./Navbar.module.scss";
const Navbar: React.FC = (props) => {
  return (
    <nav className={Styles.nav}>
      <NavList />
    </nav>
  );
};
export default Navbar;
