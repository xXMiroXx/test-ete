import useList from "hooks/active-list";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Styles from "./Navbar.module.scss";
import NavList from "./NavList";

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useList(navRef);

  const switchHandler = () => {
    setActive((cur) => !cur);
  };

  return (
    <nav ref={navRef} className={`${Styles.nav} ${className || ""}`}>
      <button onClick={switchHandler} className={Styles.nav__switch}>
        {(active && <FaTimes />) || <FaBars />}
      </button>
      <NavList active={active} />
    </nav>
  );
};
export default Navbar;
