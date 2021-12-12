import { useContext } from "react";
import LayoutContext from "../LayoutContext";
import NavItem from "./NavItem";
import Styles from "./Navbar.module.scss";

const NavList: React.FC = () => {
  const ctx = useContext(LayoutContext);
  return (
    <ul className={Styles.nav__list}>
      {ctx.navList.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </ul>
  );
};
export default NavList;
