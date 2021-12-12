import { NextComponentType } from "next";
import NavList from "./NavList";
import { useState } from "react";
import { NavListProps } from "../type";
import Styles from "./Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [navActive, setNavActive] = useState(false);
  const switchHandler = () => {
    setNavActive((cur) => !cur);
  };
  return (
    <nav className={`${Styles.nav} ${className || ""}`}>
      <button onClick={switchHandler} className={Styles.nav__switch}>
        {(navActive && <FaTimes />) || <FaBars />}
      </button>
      <NavList />
    </nav>
  );
};
export default Navbar;
