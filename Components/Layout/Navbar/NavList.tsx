import { useContext } from "react";
import LayoutContext from "../LayoutContext";
import NavItem from "./NavItem";
import Styles from "./Navbar.module.scss";
import PackagesList from "../Sublists/PackagesList";
import ServicesList from "../Sublists/ServicesList";

const NavList: React.FC<{ active: boolean }> = ({ active }) => {
  const ctx = useContext(LayoutContext);
  return (
    <ul
      className={`${Styles.nav__list} ${
        (active && Styles["nav__list--active"]) || ""
      }`}
    >
      {ctx.navList.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
      <PackagesList />
      <ServicesList />
    </ul>
  );
};
export default NavList;
