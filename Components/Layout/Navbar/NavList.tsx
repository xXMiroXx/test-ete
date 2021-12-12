import { useContext } from "react";
import LayoutContext from "../LayoutContext";
import NavItem from "./NavItem";

const NavList: React.FC = () => {
  const ctx = useContext(LayoutContext);
  return (
    <nav>
      <ul>
        {ctx.navList.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};
export default NavList;
