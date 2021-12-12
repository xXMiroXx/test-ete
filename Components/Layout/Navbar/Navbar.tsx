import { NextComponentType } from "next";
import NavList from "./NavList";
import { useState, useRef, useEffect, useCallback } from "react";
import { NavListProps } from "../type";
import Styles from "./Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navActive, setNavActive] = useState(false);
  const switchHandler = () => {
    setNavActive((cur) => !cur);
  };
  const clickAway = useCallback((e: MouseEvent) => {
    const { current } = navRef;
    if (current) {
      if (!current.contains(e.target as HTMLElement)) setNavActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", clickAway);
    return () => {
      document.removeEventListener("click", clickAway);
    };
  });

  return (
    <nav ref={navRef} className={`${Styles.nav} ${className || ""}`}>
      <button onMouseDown={switchHandler} className={Styles.nav__switch}>
        {(navActive && <FaTimes />) || <FaBars />}
      </button>
      <NavList active={navActive} />
    </nav>
  );
};
export default Navbar;
